package ee4216.lab4.imdbapi;

/**
 *
 * @author nsht
 */
public class Movie {
  
  private long id;
  private String name;
  private int year;
  private double rank;
  
  public Movie(long id, String name, int year, double rank) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.rank = rank;
  }

  /**
   * @return the id
   */
  public long getId() {
    return id;
  }

  /**
   * @param id the id to set
   */
  public void setId(long id) {
    this.id = id;
  }

  /**
   * @return the name
   */
  public String getName() {
    return name;
  }

  /**
   * @param name the name to set
   */
  public void setName(String name) {
    this.name = name;
  }

  /**
   * @return the year
   */
  public int getYear() {
    return year;
  }

  /**
   * @param year the year to set
   */
  public void setYear(int year) {
    this.year = year;
  }

  /**
   * @return the rank
   */
  public double getRank() {
    return rank;
  }

  /**
   * @param rank the rank to set
   */
  public void setRank(double rank) {
    this.rank = rank;
  }
    
}
