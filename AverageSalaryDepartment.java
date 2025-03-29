import java.util.*;
import java.util.stream.Collectors;

class AverageSalary{
    String name;
    String department;
    double salary;
    AverageSalary(String name1, String department1, double salary1){
        this.name = name1;
        this.department = department1;
        this.salary = salary1;
    }
//    public int getSalary(){
//        return salary;
//    }

}
public class AverageSalaryDepartment {
    public static void main(String[] args) {
        List<AverageSalary> s1 = Arrays.asList(
                new AverageSalary("Rupam Sabale", "Agriculture",750000),
                new AverageSalary("Rajendra Sabale", "Commerce-MBA",900000),
                new AverageSalary("Dheeraj Nikam", "Commerce-MBA",1500000),
                new AverageSalary("Saurabh Nikam", "Agriculture",200000),
                new AverageSalary("Atharva Sabale", "Computer-Science and Engineering",750000),
                new AverageSalary("Neeta Sabale", "Computer- Science and Engineering",20000)
                );
          Map<String, Double> avgSalaryByDept = s1.stream()
                  .collect(Collectors.groupingBy(
                       emp -> emp.department,
                       Collectors.averagingDouble(emp -> {
                           return emp.salary;
                       })
                  ));
          avgSalaryByDept.forEach((name, salary) -> System.out.println("name ::"+name+"Salary ::"+salary));


    }
}
