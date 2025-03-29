import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

class  Sorting{
    String name;
    int salary;
  Sorting(String name, int salary){
      this.name = name;
      this.salary = salary;
  }
  public int getSalary(){
      return salary;
  }

    public String getString(){
      return name+" ($"+salary+" )";
   }
}
public class SortEmployeesSalary {
    public static void main(String[] args) {
        List<Sorting> a1 = Arrays.asList(
                new Sorting("Neeta Sabale",20000),
                new Sorting("Rupam Sabale",500000),
                new Sorting("Nishant Jalindar Nanaware",60000),
                new Sorting("Saurabh Nikam",80000)
        );

        List<String> sortedEmplyoees = a1.stream()
                .filter(Objects::nonNull)
                .sorted(Comparator.comparing(Sorting::getSalary).reversed())
                .map(emp -> emp.name)
                .collect(Collectors.toList());
        System.out.println("Sorted Emplyoees in descending order"+sortedEmplyoees);


    }
}
