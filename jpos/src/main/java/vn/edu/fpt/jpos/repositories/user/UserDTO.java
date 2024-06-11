/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vn.edu.fpt.jpos.repositories.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @author Admin
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserDTO {
    private int userId;
    private String name;
    private String email;
    private String username;
    private String password;
    private String phone;
    private String address;
    private int roleId;
    private int status;
    
    public boolean isBanned() {
        return ((status >> 2) & 1) == 1;
    }
    
    public boolean isRemoved() {
        return ((status >> 1) & 1) == 1;
    }
    
    public boolean isOnline() {
        return (status & 1) == 1;
    }
}
