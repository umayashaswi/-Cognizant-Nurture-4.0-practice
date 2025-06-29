import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    Calculator calc = new Calculator();

    @Test
    public void testAdd() {
        assertEquals(10, calc.add(7, 3));
    }

    @Test
    public void testSubtract() {
        assertEquals(4, calc.subtract(10, 6));
        assertTrue(calc.subtract(5, 3) == 2);
        assertFalse(calc.subtract(5, 3) == 3);
    }

    @Test
    public void testMultiply() {
        assertEquals(15, calc.multiply(3, 5));
        assertNotEquals(10, calc.multiply(2, 6));
    }

    @Test
    public void testDivide() {
        assertEquals(2, calc.divide(10, 5));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        calc.divide(5, 0);
    }

    @Test
    public void testNulls() {
        Object obj1 = null;
        Object obj2 = new Object();
        assertNull(obj1);
        assertNotNull(obj2);
    }

    @Test
    public void testSameAndNotSame() {
        Calculator sameRef = calc;
        Calculator newCalc = new Calculator();
        assertSame(calc, sameRef);
        assertNotSame(calc, newCalc);
    }
}
