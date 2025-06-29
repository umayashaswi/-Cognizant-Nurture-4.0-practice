import org.junit.Test;
import org.junit.experimental.categories.Categories;

import static org.junit.Assert.assertEquals;
public class CalculatorTest {
    @Test
    public void testAdd(){
        Calculator cal=new Calculator();
        int result=cal.add(2,3);
        assertEquals(5,result);
    }
    @Test
    public void testsubtract(){
        Calculator cal=new Calculator();
        int result=cal.subtract(5,3);
        assertEquals(1,result);
    }
    @Test
    public void testmultiply(){
        Calculator cal=new Calculator();
        int result=cal.multiply(3,2);
        assertEquals(6,result);
    }
}
