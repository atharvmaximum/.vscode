import java.util.*;
class Employement{
    String name;
    int  salary;
    Employement(String name, int salary){
        this.name = name;
        this.salary = salary;
    }
    public int getSalary(){
        return salary;
    }
}
class EmployeesSalary{
//    public static List<Integer>  maxSalary(List<Employement> a1){
//
//
//
//    }
    public static void main(String[] args) {
        List<Employement> s1 = Arrays.asList(
                new Employement("Shantanu",180000),
                new Employement("Rupam",200000),
                new Employement("Saurabh",6500000),
                new Employement("Dheeraj",3500000),
                new Employement("Neeta",17000)
        );
//        System.out.println(s1.maxSalary(s1));
        Optional<Integer> maxsalary = s1.stream()
                .map(Employement::getSalary)
                .max(Integer::compareTo);
        maxsalary.ifPresent(salary ->System.out.println("Maximum Salary"+salary));


    }
}