import java.util.*;
import java.util.stream.Collectors;

class Partition{
    String name;
    int experience;

    Partition(String name, int experience){
        this.name = name;
        this.experience = experience;
    }
    public int getExperience(){
        return experience;
    }
    @Override
    public  String toString(){
        return name+"("+experience+"years)";
    }
}
public class PartitionEmplyoee {
    public static void main(String[] args) {
        List<Partition> parts = Arrays.asList(
                new Partition("Vedantika Mane",7),
                new Partition("Vedantika wagh",3),
                new Partition("Rupam Sabale",8),
                new Partition("XYZ",6),
                new Partition("Sujal Devale",8)
                );
          Map<Boolean, List<Partition>> partition = parts.stream()
                  .collect(Collectors.partitioningBy(emp -> emp.experience >= 5));
          System.out.println("Experience <(= 5 years"+partition.get(true));
        System.out.println("Experience <(= 5 years"+partition.get(false));


    }
}
