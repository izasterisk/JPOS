package vn.edu.fpt.jpos.core;

import org.mindrot.jbcrypt.BCrypt;

public class Sercure {

    public static String hashPw(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    public static boolean checkPw(String plainTextPw, String pw) {
        return BCrypt.checkpw(plainTextPw, pw);
    }

}
