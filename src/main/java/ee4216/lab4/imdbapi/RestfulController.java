package ee4216.lab4.imdbapi;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nsht
 */
@RestController
@RequestMapping(path="/api")
public class RestfulController {
  
  @Autowired
  JdbcTemplate jdbcTemplate;
  
  @GetMapping("/movies")
  @ResponseBody
  public List<Movie> getMovies() {
    List<Movie> list = new ArrayList();
    
    jdbcTemplate.query(
      "select * from movies",
      (rs, row) -> new Movie(rs.getLong("id"), rs.getString("name"), rs.getInt("year"), rs.getDouble("rank"))
    ).forEach(movie -> list.add(movie));
    
    return list;
  }
  
}