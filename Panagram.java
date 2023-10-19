import java.util.HashSet;
import java.util.Scanner;

public class Panagram {
    public static boolean isPangram(String sentence) {
        sentence = sentence.replaceAll(" ", "").toLowerCase();
        
        HashSet<Character> characters = new HashSet<>();

        for (int i = 0; i < sentence.length(); i++) {
            char c = sentence.charAt(i);
            if (c >= 'a' && c <= 'z') {
                characters.add(c);
            }
        }
        return characters.size() == 26;
    }

    public static void main(String[] args){

        Scanner scan = new Scanner(System.in);
        String sentence = scan.nextLine();
         boolean isPangram = isPangram(sentence);

         if (isPangram) {
            System.out.println("Input is pangram");
         }else{
            System.out.println("Input is not panagram");
        }
    }     
}


