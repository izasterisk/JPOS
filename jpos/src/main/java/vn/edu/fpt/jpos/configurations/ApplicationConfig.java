package vn.edu.fpt.jpos.configurations;

import jakarta.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("api")
public class ApplicationConfig extends ResourceConfig {

    public ApplicationConfig() {
        packages("vn.edu.fpt.jpos.resources");
        register(new CorsFilter());
    }
}
