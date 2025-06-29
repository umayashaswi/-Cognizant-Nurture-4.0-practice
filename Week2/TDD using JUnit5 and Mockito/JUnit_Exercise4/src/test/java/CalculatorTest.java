import org.junit.Test;
import org.junit.*;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;
    @Before
    public void setUp(){
        calc=new Calculator();
        System.out.println("Setup: Calculator instance created");
    }

    @After
    public void tearDown(){
        System.out.println("Teardown: Test Completed\n");
    }
    @Test
    public void testAdd() {
        int res=calc.add(7,3);
        assertEquals(10, res);
    }

    @Test
    public void testSubtract() {
        int res=calc.subtract(10,6);
        assertEquals(4, res);
    }

    @Test
    public void testMultiply() {
        int res=calc.multiply(3,5);
        assertEquals(15, res);
    }

    @Test
    public void testDivide() {
        int res=calc.divide(10,5);
        assertEquals(2, res);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        calc.divide(5, 0);
    }
}
