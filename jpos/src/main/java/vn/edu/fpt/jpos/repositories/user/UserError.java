/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vn.edu.fpt.jpos.repositories.user;

/**
 *
 * @author Admin
 */
public class UserError extends Exception{
    
    public UserError(String message) {
        super(message);
    }
    
    public UserError(String message, Throwable cause) {
        super(message, cause);
    }
}
