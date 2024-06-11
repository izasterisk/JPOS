/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vn.edu.fpt.jpos.services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import vn.edu.fpt.jpos.core.DBContext;
import vn.edu.fpt.jpos.core.Generator;
import vn.edu.fpt.jpos.core.Sercure;
import vn.edu.fpt.jpos.repositories.user.UserDTO;
import vn.edu.fpt.jpos.repositories.user.UserError;

/**
 *
 * @author Admin
 */
public class UserDAO {

    private static final DBContext context = DBContext.getInstance();
    private static UserDAO instance;

    private static final String GET_USERS = "SELECT [user_id]\n"
            + "      ,[name]\n"
            + "      ,[email]\n"
            + "      ,[username]\n"
            + "      ,[password]\n"
            + "      ,[phone]\n"
            + "      ,[address]\n"
            + "      ,[role_id]\n"
            + "      ,[status]\n"
            + "  FROM [dbo].[Users]";

    private static final String CHANGE_PASSWORD = "UPDATE [dbo].[Users] "
            + "SET [password] = ? "
            + "WHERE [user_id] = ?";

    private static final String CHANGE_STATUS = "UPDATE [dbo].[Users] "
            + "SET [status] = ? "
            + "WHERE [user_id] = ?";

    private static final String ADD_USER = "INSERT INTO [dbo].[Users]\n"
            + "           ([name]\n"
            + "           ,[email]\n"
            + "           ,[username]\n"
            + "           ,[password]\n"
            + "           ,[phone]\n"
            + "           ,[address]\n"
            + "           ,[role_id]\n"
            + "           ,[status])\n"
            + "     VALUES (?,?,?,?,?,?,?,?)";

    private static final String UPDATE_USER_INFO = "UPDATE [dbo].[Users]\n"
            + "   SET [name] = ?\n"
            + "      ,[email] = ?\n"
            + "      ,[username] = ?\n"
            + "      ,[password] = ?\n"
            + "      ,[phone] = ?\n"
            + "      ,[address] = ?\n"
            + "      ,[role_id] = ?\n"
            + "      ,[status] = ?\n"
            + " WHERE [user_id] = ?";
    
    private void logError(String message, Exception ex) {
        Logger.getLogger(UserDAO.class.getName())
                .log(Level.SEVERE, message, ex);
    }
    
    //Singleton
    private UserDAO() {
    }
    
    public static UserDAO getInstance() {
        if (instance == null) {
            instance = new UserDAO();
        }
        return instance;
    }
    
    public UserDTO addNewUser(UserDTO user) throws ClassNotFoundException {
        Connection conn = null;
        PreparedStatement stm = null;
        String userId = null;
        try {
            conn = context.getConnection();
            stm = conn.prepareStatement(ADD_USER);
            userId = Generator.generateUUID(20);
            stm.setString(1, userId);
            stm.setString(2, user.getName());
            stm.setString(3, user.getEmail());
            stm.setString(4, user.getUsername());
            stm.setString(5, Sercure.hashPw(user.getPassword()));
            stm.setString(6, user.getPhone());
            stm.setString(7, user.getAddress());
            stm.setInt(8, user.getRoleId());
            stm.setInt(8, user.getStatus());
//            stm.setInt(8, 0b000);
            
            
            stm.executeUpdate();
//            user.setUserId(userId);
        } catch (SQLException ex) {
            logError("Exception found on addNewUser() method", ex);
        } finally {
            context.closeStatement(stm);
        }
        return user;
    }
    
    public UserDTO getUserByUsername(String u) throws UserError, ClassNotFoundException {
        Connection conn = null;
        PreparedStatement stm = null;
        ResultSet rs = null;
        UserDTO user = null;
        try {
            conn = context.getConnection();
            stm = conn.prepareStatement(GET_USERS + " WHERE [username] = ?");
            stm.setString(1, u);
            rs = stm.executeQuery();
            if (rs.next()) {
                user = new UserDTO();
//                user.setUserId(rs.getString("user_id"));
                user.setName(rs.getString("name"));
                user.setEmail(rs.getString("email"));
                user.setUsername(rs.getString("username"));
                user.setPassword(rs.getString("password"));
                user.setPhone(rs.getString("phone"));
                user.setAddress(rs.getString("address"));
                user.setRoleId(rs.getInt("role_id"));              
                user.setStatus(rs.getInt("status"));                
            } else {
                throw new UserError("This username does not exist");
            }
        } catch (SQLException ex) {
            logError("Exception found on getUserByUsername() method", ex);
        } finally {
            context.closeResultSet(rs);
            context.closeStatement(stm);
        }
        return user;
    }
    
    public UserDTO getUserById(int userId) throws UserError, ClassNotFoundException {
        Connection conn = null;
        PreparedStatement stm = null;
        ResultSet rs = null;
        UserDTO user = null;

        try {
            conn = context.getConnection();
            stm = conn.prepareStatement(GET_USERS + " WHERE [user_id] = ?");
            stm.setInt(1, userId);
            rs = stm.executeQuery();
            if (rs.next()) {
                user = new UserDTO();
                user.setName(rs.getString("name"));
                user.setEmail(rs.getString("email"));
                user.setUsername(rs.getString("username"));
                user.setPassword(rs.getString("password"));
                user.setPhone(rs.getString("phone"));
                user.setAddress(rs.getString("address"));
                user.setRoleId(rs.getInt("role_id"));              
                user.setStatus(rs.getInt("status")); 
            } else {
                throw new UserError("This id does not exist in the system");
            }
        } catch (SQLException ex) {
            logError("Exception found on getUserById() method", ex);
        } finally {
            context.closeResultSet(rs);
            context.closeStatement(stm);
        }
        return user;
    }
    
    public boolean changeStatus(int userId, int status, int state) throws ClassNotFoundException {
        Connection conn = null;
        PreparedStatement stm = null;
        boolean res = false;
        try {
            conn = context.getConnection();
            stm = conn.prepareStatement(CHANGE_STATUS);
            stm.setInt(1, status ^ state);
            stm.setInt(2, userId);
            stm.executeUpdate();
            res = true;
        } catch (SQLException ex) {
            logError("Exception found on changeStatus() method", ex);
            res = false;
        } finally {
            context.closeStatement(stm);
        }
        return res;
    }
    
    public boolean changePassword(String userId, String newPw) throws ClassNotFoundException {
        Connection conn = null;
        PreparedStatement stm = null;
        boolean res = false;
        try {
            conn = context.getConnection();
            stm = conn.prepareStatement(CHANGE_PASSWORD);
            stm.setString(1, newPw);
            stm.setString(2, userId);
            stm.executeUpdate();
            res = true;
        } catch (SQLException ex) {
            logError("Exception found on changePassword() method", ex);
            res = false;
        } finally {
            context.closeStatement(stm);
        }
        return res;
    }
    
//    public boolean updateUserInfo(UserDTO user) throws ClassNotFoundException {
//        boolean check = false;
//        Connection conn = null;
//        PreparedStatement stm = null;
//        try {
//            conn = context.getConnection();
//            if (conn != null) {
//                stm = conn.prepareStatement(UPDATE_USER_INFO);
//                stm.setString(1, user.getFirstName());
//                stm.setString(2, user.getLastName());
//                stm.setString(3, user.getPhone());
//                stm.setString(4, user.getAddress());
//                stm.setString(5, user.getBio());
//                stm.setString(6, user.getAvatar());
//                stm.setString(7, user.getUserId());
//                check = stm.executeUpdate() > 0;
//            }
//        } catch (SQLException e) {
//            logError("Exception found on updateUser() method", e);
//            check = false;
//        } finally {
//            context.closeStatement(stm);
//        }
//        return check;
//    }
}
