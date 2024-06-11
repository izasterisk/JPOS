/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vn.edu.fpt.jpos.repositories.token;

/**
 *
 * @author Admin
 */
public class TokenError extends Exception{
    public TokenError(String message) {
        super(message);
    }
    
    public TokenError(String message, Throwable cause) {
        super(message, cause);
    }
}
