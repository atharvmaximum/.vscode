import java.util.*;
import java.util.stream.Collectors;

public class JoinStringsbyUsingComma {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("Java","Python","C++");
        String result  = words.stream()
                .collect(Collectors.joining(" ,"));
        System.out.println(result);



    }
}
