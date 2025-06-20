public class FinancialForecast {

    public static double forecast(double initialValue, double growthRate, int years) {
        if (years == 0) return initialValue;
        return (1 + growthRate) * forecast(initialValue, growthRate, years - 1);
    }

    public static void main(String[] args) {
        double initialValue = 10000;       
        double growthRate = 0.08;         
        int years = 5;

        double result = forecast(initialValue, growthRate, years);
        System.out.printf("Future value after %d years: Rs.%.2f\n", years, result);
    }
}
