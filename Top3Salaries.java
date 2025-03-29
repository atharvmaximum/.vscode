//import java.util.Arrays;
import java.util.*;
import java.util.stream.Collectors;

class Salaries{
    String name;
    int salary;
    Salaries(String name, int salary){
        this.name = name;
        this.salary = salary;
    }
    public int  getSalary(){
        return salary;
    }
    @Override
    public String toString(){
        return name+" ($"+salary +")";
    }
}
public class Top3Salaries {
    public static void main(String[] args) {
        List<Salaries> sum1 = Arrays.asList(
                new Salaries("Atharva Sabale", 230000),
                new Salaries("Rupam Sabale",270000),
                new Salaries("Shantanu Deshmukh",600000),
                new Salaries("Pavan Mali",400000),
                new Salaries("Ashitosh Sutar",500000)
                );
        List<String> top3Salaries = sum1.stream()
                .filter(Objects::nonNull)
                .sorted(Comparator.comparing(Salaries::getSalary).reversed())

                .limit(3)
                .map(emp -> emp.name)
                .collect(Collectors.toList());

        System.out.println("Top 3 Salaries = " + top3Salaries);




    }
}
