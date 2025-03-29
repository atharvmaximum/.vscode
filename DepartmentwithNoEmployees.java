import java.util.*;
import java.util.stream.Collectors;

class Department {
    String name;

    public Department(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class Employee1 {
    String name;
    String departmentName;

    public Employee1(String name, String departmentName) {
        this.name = name;
        this.departmentName = departmentName;
    }

    public String getDepartmentName() {
        return departmentName;
    }
}

public class DepartmentwithNoEmployees{
    public static void main(String[] args) {
        List<Department> departments = Arrays.asList(
                new Department("HR"),
                new Department("IT"),
                new Department("Finance"),
                new Department("Marketing")
        );

        List<Employee1> employees = Arrays.asList(
                new Employee1("Alice", "IT"),
                new Employee1("Bob", "Finance")
        );

        // Finding departments with no employees assigned
        Set<String> assignedDepartments = employees.stream()
                .map(Employee1::getDepartmentName)
                .collect(Collectors.toSet());

        List<String> unassignedDepartments = departments.stream()
                .map(Department::getName)
                .filter(dept -> !assignedDepartments.contains(dept))
                .collect(Collectors.toList());

        System.out.println("Departments with no employees: " + unassignedDepartments);
    }
}
