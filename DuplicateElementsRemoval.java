import java.util.*;
import java.util.stream.Collectors;

public class DuplicateElementsRemoval {
    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(12,13,14,14,15,16,18, 18,12);
      Set<Integer> seen = new HashSet<>();
      Set<Integer> duplicates = numbers.stream()
              .filter( n-> !seen.add(n))
              .collect(Collectors.toSet());
       duplicates.forEach(System.out::println);
//      System.out.println("Duplicate Elements"+duplicates);


    }
}
