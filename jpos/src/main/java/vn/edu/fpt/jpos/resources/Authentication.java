/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vn.edu.fpt.jpos.resources;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.HeaderParam;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import vn.edu.fpt.jpos.core.Sercure;
import vn.edu.fpt.jpos.repositories.token.TokenDTO;
import vn.edu.fpt.jpos.repositories.token.TokenError;
import vn.edu.fpt.jpos.repositories.user.UserDTO;
import vn.edu.fpt.jpos.repositories.user.UserError;
import vn.edu.fpt.jpos.services.TokenDAO;
import vn.edu.fpt.jpos.services.UserDAO;

/**
 *
 * @author Admin
 */
@Path("v1/authen")
public class Authentication {
    private static final UserDAO userDao = UserDAO.getInstance();
    private static final TokenDAO tokenDao = TokenDAO.getInstance();
    
    @POST
    @Path("login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(UserDTO user) throws ClassNotFoundException {
        try {
            UserDTO loginUser = userDao.getUserByUsername(user.getUsername());
            if (user.isBanned()) {
                throw new UserError("Your account has been banned");
            }
            if (user.isRemoved()) {
                throw new UserError("Your account has been removed");
            }
            if (!Sercure.checkPw(user.getPassword(), loginUser.getPassword())) {
                throw new UserError("Wrong password");
            }
            TokenDTO token = tokenDao.addLoginToken(loginUser.getUserId());
            if (!loginUser.isOnline()) {
                int status = loginUser.getStatus() ^ 0b001;
                userDao.changeStatus(loginUser.getUserId(),
                        loginUser.getStatus(),
                        status);
            }
            return Response.status(Response.Status.OK)
                    .entity(token)
                    .build();
        } catch (UserError ex) {
            return Response.status(Response.Status.NOT_ACCEPTABLE)
                    .entity(ex)
                    .build();
        }
    }
    
    @DELETE
    @Path("logout")
    @Produces(MediaType.APPLICATION_JSON)
    public Response logout(@HeaderParam("authtoken") String tokenString) throws ClassNotFoundException {
        try {
            TokenDTO token = tokenDao.getToken(tokenString);
            tokenDao.removeToken(tokenString);
            UserDTO user = userDao.getUserById(token.getUserId());
            if (user.isOnline()) {
                int status = user.getStatus() ^ 0b001;
                userDao.changeStatus(user.getUserId(),
                        user.getStatus(),
                        status);
            }
            return Response.status(Response.Status.OK)
                    .entity(token)
                    .build();
        } catch (TokenError | UserError ex) {
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity(ex)
                    .build();
        }
    }
    
    @GET
    @Path("account")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAccountInfo(@HeaderParam("authtoken") String tokenString) throws ClassNotFoundException, UserError {
        try {
            TokenDTO token = tokenDao.getToken(tokenString);
            if (!token.isLoginToken()) {
                throw new TokenError("Invalid authentication token");
            } else if (!token.isValid()) {
                throw new TokenError("Token is invalidate");
            } else if (token.isExpired()) {
                throw new TokenError("Token is expired");
            }
            UserDTO user = userDao.getUserById(token.getUserId());
            if (!user.isOnline()) {
                userDao.changeStatus(user.getUserId(),
                        user.getStatus(),
                        0b001);
            }
            return Response.status(Response.Status.ACCEPTED)
                    .entity(user)
                    .build();
        } catch (TokenError ex) {
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity(ex)
                    .build();
        } catch (UserError ex) {
            return Response.status(404).entity(ex).build();
        }
    }
    
    @POST
    @Path("register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response register(UserDTO user) throws ClassNotFoundException {
        try {
            userDao.getUserByUsername(user.getEmail());
            return Response.status(Response.Status.CONFLICT)
                    .entity(new UserError("This email already exist in the system"))
                    .build();
        } catch (UserError ex) {
            int userId = userDao.addNewUser(user).getUserId();
            TokenDTO authtoken = tokenDao.addLoginToken(userId);
            return Response.status(Response.Status.CREATED)
                    .entity(authtoken)
                    .build();
        }
    }
}
