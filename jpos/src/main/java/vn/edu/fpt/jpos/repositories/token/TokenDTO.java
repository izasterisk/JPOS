/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vn.edu.fpt.jpos.repositories.token;

import java.sql.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @author Admin
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class TokenDTO {
    private int userId;
    private String tokenString;
    private Date validDate;
    private Date expiredDate;
    private int status;
    
    public boolean isLoginToken() {
        return ((status >> 2) & 1) == 1;
    }

    public boolean isResetPasswordToken() {
        return ((status >> 1) & 1) == 1;
    }
    
    public boolean isValid() {
        return (status & 1) == 1;
    }

    public boolean isExpired() {
        return new Date(System.currentTimeMillis()).after(expiredDate);
    }
}
