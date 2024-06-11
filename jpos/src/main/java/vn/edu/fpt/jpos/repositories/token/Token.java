package vn.edu.fpt.jpos.repositories.token;

import java.sql.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import vn.edu.fpt.jpos.repositories.user.UserRoleEnum;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Token {
    private String accessToken;
    private int userId;
    private UserRoleEnum userRole;
    private Date validDate;
    private TokenStatusEnum status;
}
