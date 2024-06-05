using System;

class Program
{
    const int MAX = 100;

    static int Sum(int[] arr)
    {
        int result = 0;
        for (int i = 0; i < arr.Length; i++)
        {
            result += arr[i];
        }
        return result;
    }

    static int GetNumberOfElements()
    {
        Console.Write("Enter the number of elements (1-100): ");
        if (!int.TryParse(Console.ReadLine(), out int n) || n < 1 || n > MAX)
        {
            Console.WriteLine("Invalid input. Please provide a digit ranging from 1 to 100.");
            Environment.Exit(1);
        }
        return n;
    }

    static int[] GetArrayElements(int n)
    {
        int[] arr = new int[n];
        Console.WriteLine("Enter " + n + " integers:");
        for (int i = 0; i < n; i++)
        {
            if (!int.TryParse(Console.ReadLine(), out arr[i]))
            {
                Console.WriteLine("Invalid input. Please enter valid integers.");
                Environment.Exit(1);
            }
        }
        return arr;
    }

    static void Main()
    {
        int n = GetNumberOfElements();
        int[] arr = GetArrayElements(n);
        int total = Sum(arr);

        Console.WriteLine("Sum of the numbers: " + total);
    }
}