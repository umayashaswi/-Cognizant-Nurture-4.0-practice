import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        int n = 100000;
        Product[] products = new Product[n];
        for (int i = 0; i < n; i++) {
            products[i] = new Product(i, "Product" + i, "Category" + (i % 10));
        }

        String target = "Product99999";

        long startTime = System.nanoTime();
        Product result1 = LinearSearch.search(products, target);
        long endTime = System.nanoTime();
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));
        System.out.println("Time taken (Linear): " + (endTime - startTime) + " ns");

        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        startTime = System.nanoTime();
        Product result2 = BinarySearch.search(products, target); 
        endTime = System.nanoTime();
        System.out.println("\nBinary Search Result: " + (result2 != null ? result2 : "Not Found"));
        System.out.println("Time taken (Binary): " + (endTime - startTime) + " ns");
    }
}
