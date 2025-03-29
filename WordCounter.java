import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class WordCounter {
    public static Map<String,Integer> CountFrequencyCounter(List<String> words){
        return words.stream()
                .collect(Collectors.toMap(word ->word, word ->1, Integer::sum));

    }
    public static void main(String[] args) {

        List<String> ans =  Arrays.asList("Apple","Banana","Apple");
         Map<String,Integer> wordcounter =  CountFrequencyCounter(ans);
         wordcounter.forEach((word,count) -> System.out.println(ans+"="+count));


    }
}
