import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

 class Employee{

        private String name;
        private int salary;

        // Constructor
        public Employee(String name, int salary) {
            this.name = name;
            this.salary = salary;
        }

        // Getters
        public String getName() {
            return name;
        }

        public int getSalary() {
            return salary;
        }

        // Override toString for printing
        @Override
        public String toString() {
            return name + " - $" + salary;
        }
    }

     class EmployeeFilter {
        public static List<Employee> getEmployeesBySalary(List<Employee> employees) {
            return employees.stream()
                    .filter(emp -> emp.getSalary() > 50000) // Filter condition
                    .collect(Collectors.toList()); // Collect results into a List
        }

        public static void main(String[] args) {
            List<Employee> employees = Arrays.asList(
                    new Employee("Alice", 45000),
                    new Employee("Bob", 60000),
                    new Employee("Charlie", 55000),
                    new Employee("David", 30000),
                    new Employee("Eve", 80000)
            );

            List<Employee> filteredEmployees = getEmployeesBySalary(employees);
            filteredEmployees.forEach(System.out::println); // Print filtered employees
        }
    }


