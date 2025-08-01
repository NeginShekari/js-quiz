# Java Expertise Assessment Exam
## Level 6/10 - Intermediate Java Developer

**Duration:** 90 minutes  
**Total Points:** 100 points  
**Passing Score:** 70 points (Level 6/10 expectation)

---

## Section 1: Core Java Fundamentals (20 points)

### Question 1 (5 points)
**Multiple Choice:** Which of the following statements about Java primitive types is INCORRECT?

A) `int` values range from -2,147,483,648 to 2,147,483,647  
B) `boolean` can only hold `true` or `false` values  
C) `char` uses 16-bit Unicode encoding  
D) `float` has higher precision than `double`  
E) `byte` ranges from -128 to 127

### Question 2 (8 points)
**Code Analysis:** Identify and explain the issues in this code snippet:

```java
public class Calculator {
    private static int result;
    
    public void add(String num1, String num2) {
        result = num1 + num2;
        return result;
    }
    
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add("10", "20"));
    }
}
```

**What are the compilation errors and logical issues? Provide the corrected version.**

### Question 3 (7 points)
**Short Answer:** Explain the difference between `==` and `.equals()` when comparing:
- Primitive types
- String objects
- Custom objects

Provide code examples for each case.

---

## Section 2: Object-Oriented Programming (25 points)

### Question 4 (10 points)
**Design Problem:** Create a class hierarchy for a library management system:

Requirements:
- Abstract base class `LibraryItem` with common properties (title, id, available)
- Concrete classes `Book` and `Magazine` extending `LibraryItem`
- Interface `Borrowable` with methods `borrow()` and `return()`
- Demonstrate polymorphism in a `Library` class that manages different item types

**Write the complete implementation showing all OOP pillars.**

### Question 5 (8 points)
**Multiple Choice + Explanation:** Which statement about interfaces vs abstract classes is TRUE?

A) Interfaces can have constructors  
B) A class can extend multiple abstract classes  
C) Abstract classes can have both abstract and concrete methods  
D) Interface methods are always public and abstract (before Java 8)  
E) Both C and D are correct

**Explain your answer and describe when you'd choose interfaces over abstract classes.**

### Question 6 (7 points)
**Code Completion:** Complete this inheritance example demonstrating method overriding:

```java
class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    // Complete this class with proper constructor and method overriding
    // Add a specific method bark() that's unique to Dog
}

// Write a main method demonstrating polymorphism
```

---

## Section 3: Advanced Java Features (25 points)

### Question 7 (8 points)
**Exception Handling:** Analyze and improve this code:

```java
public class FileProcessor {
    public String readFile(String filename) {
        FileReader file = new FileReader(filename);
        BufferedReader reader = new BufferedReader(file);
        String content = reader.readLine();
        file.close();
        return content;
    }
}
```

**Rewrite using proper exception handling, try-with-resources, and custom exceptions.**

### Question 8 (10 points)
**Collections & Generics:** Implement a generic `Repository<T>` class with the following requirements:

- Store items of type T in appropriate collection
- Methods: `add(T item)`, `remove(T item)`, `findById(Long id)`, `getAll()`
- Use generics with bounded wildcards where appropriate
- Demonstrate usage with a `User` class

### Question 9 (7 points)
**Packages & Modules:** 
- Explain the difference between packages and modules in Java
- Write a `module-info.java` for a module named `com.company.library` that:
  - Exports `com.company.library.api` package
  - Requires `java.logging` module
  - Provides service `com.company.library.spi.BookService`

---

## Section 4: Functional Programming & Streams (20 points)

### Question 10 (12 points)
**Stream Operations:** Given this data structure:

```java
class Employee {
    private String name;
    private String department;
    private double salary;
    private int age;
    
    // Constructor, getters, setters...
}

List<Employee> employees = Arrays.asList(
    new Employee("Alice", "IT", 75000, 28),
    new Employee("Bob", "HR", 65000, 35),
    new Employee("Charlie", "IT", 85000, 32),
    new Employee("Diana", "Finance", 70000, 29),
    new Employee("Eve", "IT", 90000, 26)
);
```

**Write stream operations to:**
1. Find all IT employees earning more than 80000
2. Get average salary by department
3. Find the youngest employee in each department
4. Create a map of department -> list of employee names

### Question 11 (8 points)
**Lambda Expressions:** Convert these anonymous classes to lambda expressions and explain the benefits:

```java
// 1. Event handler
button.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button clicked!");
    }
});

// 2. Custom comparator
Collections.sort(people, new Comparator<Person>() {
    public int compare(Person p1, Person p2) {
        return p1.getAge() - p2.getAge();
    }
});

// 3. Thread creation
Thread t = new Thread(new Runnable() {
    public void run() {
        processData();
    }
});
```

---

## Section 5: Logging & Build Tools (10 points)

### Question 12 (5 points)
**Logging Best Practices:** Review this logging code and suggest improvements:

```java
public class OrderService {
    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);
    
    public void processOrder(Order order) {
        System.out.println("Processing order: " + order.getId());
        
        try {
            // Business logic
            logger.info("Order processed successfully");
        } catch (Exception e) {
            logger.error("Error processing order: " + e.getMessage());
            throw e;
        }
    }
}
```

### Question 13 (5 points)
**Maven Configuration:** Write a `pom.xml` snippet that includes:
- Project coordinates for `com.company:order-service:1.0.0`
- Dependencies for SLF4J, Logback, and JUnit 5
- Compiler plugin configured for Java 17
- Properties for encoding and Maven compiler version

---

## Bonus Section: Problem Solving (10 extra points)

### Bonus Question (10 points)
**Integration Challenge:** Design and implement a complete solution for a "Book Recommendation System" that demonstrates:

- Custom exceptions for different error scenarios
- Generic repository pattern with collections
- Stream operations for filtering and recommendations
- Proper logging throughout the application
- Interface-based design for extensibility

**Requirements:**
- Store books with ratings, genres, and authors
- Find books by genre, author, or minimum rating
- Recommend books based on user preferences
- Handle edge cases with appropriate exceptions
- Log all operations with appropriate levels

---

## Answer Key & Scoring Guide

### Section 1 Answers:
**Q1:** D (float has lower precision than double)  
**Q2:** Multiple compilation errors - type mismatch, return type void vs int, string concatenation vs addition  
**Q3:** Detailed explanation of reference vs value comparison

### Section 2 Answers:
**Q4:** Complete class hierarchy with proper inheritance, polymorphism, and interface implementation  
**Q5:** E - Both C and D are correct  
**Q6:** Proper Dog class with constructor chaining and polymorphic main method

### Section 3 Answers:
**Q7:** Try-with-resources, checked exception handling, custom exceptions  
**Q8:** Generic repository with proper bounds and type safety  
**Q9:** Module system explanation and proper module-info.java

### Section 4 Answers:
**Q10:** Complex stream operations with collectors and grouping  
**Q11:** Lambda conversions with explanation of functional interfaces

### Section 5 Answers:
**Q12:** Parameterized logging, proper exception logging, remove System.out  
**Q13:** Complete Maven POM with modern dependencies and plugins

---

## Scoring Rubric:
- **90-100 points:** Expert level (9-10/10) - Ready for senior roles
- **80-89 points:** Advanced level (7-8/10) - Strong intermediate
- **70-79 points:** Target level (6/10) - Solid intermediate
- **60-69 points:** Developing (4-5/10) - Needs improvement
- **Below 60:** Beginner (1-3/10) - Requires significant study

**Good luck with your assessment!**