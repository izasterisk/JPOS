package vn.edu.fpt.jpos.core;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DBContext {

    private static final String NAME = "JPOS";
    private static final String USERNAME = "sa";
    private static final String PASSWORD = "12345";
    private static final String PORT = "1433";
    private static final String HOST = "localhost";
    private static DBContext instance;

    private DBContext() {
    }

    //Single-ton design pattern
    public static DBContext getInstance() {
        if (instance == null) {
            instance = new DBContext();
        }
        return instance;
    }

    public Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        String url = "jdbc:sqlserver://" + HOST + ":" + PORT + ";DatabaseName=" + NAME
                + ";encrypt=true;trustServerCertificate=true;";
        return DriverManager.getConnection(url, USERNAME, PASSWORD);
    }
    
    private static void logError(String message, Exception ex) {
        Logger.getLogger(DBContext.class.getName())
                .log(Level.SEVERE, message, ex);
    }
    
    public boolean closeConnection(Connection conn) {
        if (conn != null) {
            try {
                if (!conn.isClosed()) {
                    conn.close();
                    return true;
                }
            } catch (SQLException ex) {
                logError("Exception found on closeConnection() method", ex);
            }
        }
        return false;
    }
    
    public boolean closeStatement(PreparedStatement stm) {
        if (stm != null) {
            try {
                stm.close();
                return true;
            } catch (SQLException ex) {
                logError("Exception found on closeStatement() method", ex);
            }
        }
        return false;
    }
    
    public boolean closeResultSet(ResultSet rs) {
        if (rs != null) {
            try {
                rs.close();
                return true;
            } catch (SQLException ex) {
                logError("Exception found on closeResultSet() method", ex);
            }
        }
        return false;
    }
}
