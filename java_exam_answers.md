# Java Expertise Exam - Complete Answer Key

## Section 1: Core Java Fundamentals (20 points)

### Question 1 Answer (5 points)
**Correct Answer: D) `float` has higher precision than `double`**

**Explanation:** This is incorrect because `double` (64-bit) has higher precision than `float` (32-bit). 
- `float`: 32-bit, ~7 decimal digits precision
- `double`: 64-bit, ~15-17 decimal digits precision

All other statements are correct:
- A) `int` range: -2³¹ to 2³¹-1
- B) `boolean` only holds `true`/`false`
- C) `char` uses 16-bit Unicode (UTF-16)
- E) `byte` range: -128 to 127 (-2⁷ to 2⁷-1)

### Question 2 Answer (8 points)
**Issues identified:**
1. **Type mismatch:** `result = num1 + num2` tries to assign String concatenation to int
2. **Return type error:** Method declared `void` but tries to return `result`
3. **Logic error:** String concatenation instead of numeric addition

**Corrected version:**
```java
public class Calculator {
    private static int result;
    
    public int add(String num1, String num2) {
        try {
            int n1 = Integer.parseInt(num1);
            int n2 = Integer.parseInt(num2);
            result = n1 + n2;
            return result;
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("Invalid number format", e);
        }
    }
    
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add("10", "20")); // Output: 30
    }
}
```

### Question 3 Answer (7 points)
**Primitive types:**
- `==` compares values directly
- `.equals()` not applicable (primitives don't have methods)

```java
int a = 5, b = 5;
System.out.println(a == b); // true - value comparison
```

**String objects:**
- `==` compares references (memory addresses)
- `.equals()` compares content

```java
String s1 = new String("hello");
String s2 = new String("hello");
String s3 = "hello";
String s4 = "hello";

System.out.println(s1 == s2);        // false - different objects
System.out.println(s1.equals(s2));   // true - same content
System.out.println(s3 == s4);        // true - string pool
```

**Custom objects:**
- `==` compares references
- `.equals()` compares content (if overridden, otherwise same as ==)

```java
class Person {
    private String name;
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Person person = (Person) obj;
        return Objects.equals(name, person.name);
    }
}
```

---

## Section 2: Object-Oriented Programming (25 points)

### Question 4 Answer (10 points)
**Complete implementation:**

```java
// Abstract base class
abstract class LibraryItem {
    protected String title;
    protected String id;
    protected boolean available;
    
    public LibraryItem(String title, String id) {
        this.title = title;
        this.id = id;
        this.available = true;
    }
    
    // Getters and setters
    public String getTitle() { return title; }
    public String getId() { return id; }
    public boolean isAvailable() { return available; }
    public void setAvailable(boolean available) { this.available = available; }
    
    // Abstract method - must be implemented by subclasses
    public abstract String getItemType();
}

// Interface
interface Borrowable {
    boolean borrow();
    boolean returnItem();
}

// Concrete class - Book
class Book extends LibraryItem implements Borrowable {
    private String author;
    private String isbn;
    
    public Book(String title, String id, String author, String isbn) {
        super(title, id);
        this.author = author;
        this.isbn = isbn;
    }
    
    @Override
    public String getItemType() {
        return "Book";
    }
    
    @Override
    public boolean borrow() {
        if (available) {
            setAvailable(false);
            System.out.println("Book '" + title + "' borrowed successfully");
            return true;
        }
        return false;
    }
    
    @Override
    public boolean returnItem() {
        if (!available) {
            setAvailable(true);
            System.out.println("Book '" + title + "' returned successfully");
            return true;
        }
        return false;
    }
    
    public String getAuthor() { return author; }
    public String getIsbn() { return isbn; }
}

// Concrete class - Magazine
class Magazine extends LibraryItem implements Borrowable {
    private int issueNumber;
    private String publisher;
    
    public Magazine(String title, String id, int issueNumber, String publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
    
    @Override
    public String getItemType() {
        return "Magazine";
    }
    
    @Override
    public boolean borrow() {
        if (available) {
            setAvailable(false);
            System.out.println("Magazine '" + title + "' issue " + issueNumber + " borrowed");
            return true;
        }
        return false;
    }
    
    @Override
    public boolean returnItem() {
        if (!available) {
            setAvailable(true);
            System.out.println("Magazine '" + title + "' returned");
            return true;
        }
        return false;
    }
}

// Library class demonstrating polymorphism
class Library {
    private List<LibraryItem> items;
    
    public Library() {
        this.items = new ArrayList<>();
    }
    
    public void addItem(LibraryItem item) {
        items.add(item);
    }
    
    // Polymorphism - works with any LibraryItem subclass
    public void displayAllItems() {
        for (LibraryItem item : items) {
            System.out.println(item.getItemType() + ": " + item.getTitle() + 
                             " (Available: " + item.isAvailable() + ")");
        }
    }
    
    // Polymorphism with interface
    public void borrowItem(String id) {
        for (LibraryItem item : items) {
            if (item.getId().equals(id) && item instanceof Borrowable) {
                ((Borrowable) item).borrow();
                break;
            }
        }
    }
}
```

### Question 5 Answer (8 points)
**Correct Answer: E) Both C and D are correct**

**Explanation:**
- **C is correct:** Abstract classes can have both abstract methods (no implementation) and concrete methods (with implementation)
- **D is correct:** Before Java 8, all interface methods were implicitly public and abstract

**When to choose interfaces over abstract classes:**
- **Use interfaces when:** You want to define a contract, support multiple inheritance, achieve loose coupling
- **Use abstract classes when:** You want to share code among related classes, need constructors, want to provide default implementations

### Question 6 Answer (7 points)
**Complete implementation:**

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
    private String breed;
    
    // Constructor with proper super() call
    public Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }
    
    // Method overriding
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof! Woof!");
    }
    
    // Unique method to Dog
    public void bark() {
        System.out.println(name + " is barking loudly!");
    }
    
    public String getBreed() {
        return breed;
    }
}

// Main method demonstrating polymorphism
public class AnimalDemo {
    public static void main(String[] args) {
        // Polymorphism - Animal reference, Dog object
        Animal myAnimal = new Dog("Buddy", "Golden Retriever");
        myAnimal.makeSound(); // Calls Dog's overridden method
        
        // Array of Animals demonstrating polymorphism
        Animal[] animals = {
            new Dog("Max", "German Shepherd"),
            new Dog("Luna", "Labrador")
        };
        
        for (Animal animal : animals) {
            animal.makeSound(); // Polymorphic method call
        }
        
        // Downcasting to access Dog-specific methods
        if (myAnimal instanceof Dog) {
            Dog myDog = (Dog) myAnimal;
            myDog.bark();
            System.out.println("Breed: " + myDog.getBreed());
        }
    }
}
```

---

## Section 3: Advanced Java Features (25 points)

### Question 7 Answer (8 points)
**Issues in original code:**
1. No exception handling for `FileNotFoundException` and `IOException`
2. Resources not properly closed (memory leak)
3. No custom exceptions for specific error cases

**Improved version:**

```java
// Custom exceptions
class FileProcessingException extends Exception {
    public FileProcessingException(String message, Throwable cause) {
        super(message, cause);
    }
}

class EmptyFileException extends FileProcessingException {
    public EmptyFileException(String filename) {
        super("File is empty: " + filename, null);
    }
}

public class FileProcessor {
    private static final Logger logger = LoggerFactory.getLogger(FileProcessor.class);
    
    public String readFile(String filename) throws FileProcessingException {
        if (filename == null || filename.trim().isEmpty()) {
            throw new IllegalArgumentException("Filename cannot be null or empty");
        }
        
        try (FileReader file = new FileReader(filename);
             BufferedReader reader = new BufferedReader(file)) {
            
            logger.info("Reading file: {}", filename);
            String content = reader.readLine();
            
            if (content == null) {
                throw new EmptyFileException(filename);
            }
            
            logger.debug("Successfully read {} characters from file", content.length());
            return content;
            
        } catch (FileNotFoundException e) {
            logger.error("File not found: {}", filename);
            throw new FileProcessingException("File not found: " + filename, e);
        } catch (IOException e) {
            logger.error("IO error reading file: {}", filename, e);
            throw new FileProcessingException("Error reading file: " + filename, e);
        }
    }
    
    // Alternative method to read all lines
    public List<String> readAllLines(String filename) throws FileProcessingException {
        try (BufferedReader reader = Files.newBufferedReader(Paths.get(filename))) {
            return reader.lines().collect(Collectors.toList());
        } catch (IOException e) {
            throw new FileProcessingException("Error reading all lines from: " + filename, e);
        }
    }
}
```

### Question 8 Answer (10 points)
**Generic Repository implementation:**

```java
// Entity interface for items with ID
interface Identifiable {
    Long getId();
}

// User class implementing Identifiable
class User implements Identifiable {
    private Long id;
    private String name;
    private String email;
    
    public User(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    
    @Override
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    
    @Override
    public String toString() {
        return "User{id=" + id + ", name='" + name + "', email='" + email + "'}";
    }
}

// Generic Repository with bounded wildcards
class Repository<T extends Identifiable> {
    private final Map<Long, T> items;
    private final Class<T> entityClass;
    
    public Repository(Class<T> entityClass) {
        this.items = new ConcurrentHashMap<>();
        this.entityClass = entityClass;
    }
    
    public void add(T item) {
        if (item == null || item.getId() == null) {
            throw new IllegalArgumentException("Item and ID cannot be null");
        }
        items.put(item.getId(), item);
    }
    
    public boolean remove(T item) {
        if (item == null || item.getId() == null) {
            return false;
        }
        return items.remove(item.getId()) != null;
    }
    
    public Optional<T> findById(Long id) {
        if (id == null) {
            return Optional.empty();
        }
        return Optional.ofNullable(items.get(id));
    }
    
    public List<T> getAll() {
        return new ArrayList<>(items.values());
    }
    
    // Bounded wildcard for flexible querying
    public List<T> findByIds(Collection<? extends Long> ids) {
        return ids.stream()
                  .map(this::findById)
                  .filter(Optional::isPresent)
                  .map(Optional::get)
                  .collect(Collectors.toList());
    }
    
    // Generic method with wildcard
    public <U extends T> void addAll(Collection<U> items) {
        items.forEach(this::add);
    }
    
    public int size() {
        return items.size();
    }
    
    public boolean isEmpty() {
        return items.isEmpty();
    }
}

// Usage demonstration
public class RepositoryDemo {
    public static void main(String[] args) {
        Repository<User> userRepo = new Repository<>(User.class);
        
        // Add users
        userRepo.add(new User(1L, "John Doe", "john@example.com"));
        userRepo.add(new User(2L, "Jane Smith", "jane@example.com"));
        
        // Find by ID
        Optional<User> user = userRepo.findById(1L);
        user.ifPresent(System.out::println);
        
        // Get all users
        List<User> allUsers = userRepo.getAll();
        allUsers.forEach(System.out::println);
        
        // Find by multiple IDs
        List<User> someUsers = userRepo.findByIds(Arrays.asList(1L, 2L));
        System.out.println("Found users: " + someUsers.size());
    }
}
```

### Question 9 Answer (7 points)
**Difference between packages and modules:**

**Packages:**
- Namespace mechanism for organizing related classes and interfaces
- Existed since Java 1.0
- Provide access control (public, protected, package-private)
- Organized in hierarchical directory structure

**Modules (Java 9+):**
- Higher-level grouping of packages
- Provide stronger encapsulation and explicit dependencies
- Part of Java Platform Module System (JPMS)
- Define what packages are exported and what modules are required

**module-info.java:**
```java
module com.company.library {
    // Export packages - make them available to other modules
    exports com.company.library.api;
    
    // Require other modules
    requires java.logging;
    requires java.base; // implicit, but can be explicit
    
    // Provide service implementation
    provides com.company.library.spi.BookService 
        with com.company.library.impl.DefaultBookService;
    
    // Optional: Use services from other modules
    uses com.company.library.spi.BookService;
    
    // Optional: Open packages for reflection (testing, frameworks)
    opens com.company.library.internal to 
        com.fasterxml.jackson.databind;
}
```

---

## Section 4: Functional Programming & Streams (20 points)

### Question 10 Answer (12 points)
**Complete stream solutions:**

```java
import java.util.*;
import java.util.stream.Collectors;
import static java.util.stream.Collectors.*;

class Employee {
    private String name;
    private String department;
    private double salary;
    private int age;
    
    public Employee(String name, String department, double salary, int age) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.age = age;
    }
    
    // Getters
    public String getName() { return name; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }
    public int getAge() { return age; }
    
    @Override
    public String toString() {
        return name + " (" + department + ", $" + salary + ", " + age + ")";
    }
}

public class StreamOperations {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", "IT", 75000, 28),
            new Employee("Bob", "HR", 65000, 35),
            new Employee("Charlie", "IT", 85000, 32),
            new Employee("Diana", "Finance", 70000, 29),
            new Employee("Eve", "IT", 90000, 26)
        );
        
        // 1. Find all IT employees earning more than 80000
        List<Employee> highEarningIT = employees.stream()
            .filter(emp -> "IT".equals(emp.getDepartment()))
            .filter(emp -> emp.getSalary() > 80000)
            .collect(toList());
        
        System.out.println("High-earning IT employees:");
        highEarningIT.forEach(System.out::println);
        
        // 2. Get average salary by department
        Map<String, Double> avgSalaryByDept = employees.stream()
            .collect(groupingBy(
                Employee::getDepartment,
                averagingDouble(Employee::getSalary)
            ));
        
        System.out.println("\nAverage salary by department:");
        avgSalaryByDept.forEach((dept, avg) -> 
            System.out.println(dept + ": $" + String.format("%.2f", avg)));
        
        // 3. Find the youngest employee in each department
        Map<String, Optional<Employee>> youngestByDept = employees.stream()
            .collect(groupingBy(
                Employee::getDepartment,
                minBy(Comparator.comparingInt(Employee::getAge))
            ));
        
        System.out.println("\nYoungest employee by department:");
        youngestByDept.forEach((dept, empOpt) -> {
            if (empOpt.isPresent()) {
                Employee emp = empOpt.get();
                System.out.println(dept + ": " + emp.getName() + " (age " + emp.getAge() + ")");
            }
        });
        
        // 4. Create a map of department -> list of employee names
        Map<String, List<String>> namesByDept = employees.stream()
            .collect(groupingBy(
                Employee::getDepartment,
                mapping(Employee::getName, toList())
            ));
        
        System.out.println("\nEmployee names by department:");
        namesByDept.forEach((dept, names) -> 
            System.out.println(dept + ": " + names));
        
        // Bonus: More complex operations
        
        // Department with highest total salary
        Optional<Map.Entry<String, Double>> highestPayingDept = employees.stream()
            .collect(groupingBy(
                Employee::getDepartment,
                summingDouble(Employee::getSalary)
            ))
            .entrySet().stream()
            .max(Map.Entry.comparingByValue());
        
        highestPayingDept.ifPresent(entry -> 
            System.out.println("\nHighest paying department: " + 
                entry.getKey() + " ($" + entry.getValue() + ")"));
    }
}
```

### Question 11 Answer (8 points)
**Lambda conversions:**

```java
// 1. Event handler - BEFORE
button.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button clicked!");
    }
});

// AFTER - Lambda expression
button.addActionListener(e -> System.out.println("Button clicked!"));

// Alternative with method reference
button.addActionListener(this::handleButtonClick);

// 2. Custom comparator - BEFORE
Collections.sort(people, new Comparator<Person>() {
    public int compare(Person p1, Person p2) {
        return p1.getAge() - p2.getAge();
    }
});

// AFTER - Lambda expression
Collections.sort(people, (p1, p2) -> p1.getAge() - p2.getAge());

// Even better - Method reference
Collections.sort(people, Comparator.comparing(Person::getAge));

// Or using List.sort()
people.sort(Comparator.comparing(Person::getAge));

// 3. Thread creation - BEFORE
Thread t = new Thread(new Runnable() {
    public void run() {
        processData();
    }
});

// AFTER - Lambda expression
Thread t = new Thread(() -> processData());

// Alternative with method reference
Thread t = new Thread(this::processData);

// More examples of lambda benefits
public class LambdaExamples {
    
    // Functional interface examples
    @FunctionalInterface
    interface Calculator {
        int calculate(int a, int b);
    }
    
    public static void main(String[] args) {
        // Lambda with functional interface
        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;
        
        System.out.println("Add: " + add.calculate(5, 3));
        System.out.println("Multiply: " + multiply.calculate(5, 3));
        
        // Stream operations with lambdas
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        // Filter and transform
        List<String> upperCaseNames = names.stream()
            .filter(name -> name.length() > 3)
            .map(String::toUpperCase)
            .collect(Collectors.toList());
        
        System.out.println("Filtered names: " + upperCaseNames);
    }
}
```

**Benefits of Lambda Expressions:**
1. **Conciseness:** Reduces boilerplate code significantly
2. **Readability:** More expressive and easier to understand
3. **Functional Programming:** Enables functional programming paradigms
4. **Performance:** Can be more efficient than anonymous classes
5. **Method References:** Even more concise for simple operations

---

## Section 5: Logging & Build Tools (10 points)

### Question 12 Answer (5 points)
**Issues in original code:**
1. Using `System.out.println()` instead of logger
2. Not using parameterized logging (string concatenation)
3. Not logging method entry/exit for debugging
4. Exception logging could include stack trace

**Improved version:**

```java
public class OrderService {
    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);
    
    public void processOrder(Order order) {
        // Use parameterized logging instead of string concatenation
        logger.info("Processing order with ID: {}", order.getId());
        
        try {
            // Log method entry for debugging
            logger.debug("Starting order processing for order: {}", order);
            
            // Business logic here
            validateOrder(order);
            calculateTotal(order);
            saveOrder(order);
            
            // Success logging with context
            logger.info("Order processed successfully. ID: {}, Total: {}", 
                       order.getId(), order.getTotal());
                       
        } catch (ValidationException e) {
            // Specific exception with context
            logger.warn("Order validation failed for ID: {}. Reason: {}", 
                       order.getId(), e.getMessage());
            throw e;
            
        } catch (Exception e) {
            // Log full stack trace for unexpected errors
            logger.error("Unexpected error processing order ID: {}", 
                        order.getId(), e);
            throw new OrderProcessingException("Failed to process order", e);
            
        } finally {
            // Cleanup logging
            logger.debug("Completed order processing attempt for ID: {}", order.getId());
        }
    }
    
    private void validateOrder(Order order) throws ValidationException {
        logger.debug("Validating order: {}", order.getId());
        
        if (order.getItems().isEmpty()) {
            throw new ValidationException("Order must contain at least one item");
        }
        
        if (order.getCustomerId() == null) {
            throw new ValidationException("Customer ID is required");
        }
        
        logger.debug("Order validation successful for ID: {}", order.getId());
    }
    
    private void calculateTotal(Order order) {
        logger.debug("Calculating total for order: {}", order.getId());
        // Business logic
        logger.debug("Total calculated: {} for order: {}", order.getTotal(), order.getId());
    }
    
    private void saveOrder(Order order) {
        logger.debug("Saving order to database: {}", order.getId());
        // Database save logic
        logger.info("Order saved successfully: {}", order.getId());
    }
}

// Logging configuration (logback.xml)
/*
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>
    
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/application.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/application.%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{50} - %msg%n</pattern>
        </encoder>
    </appender>
    
    <logger name="com.company.OrderService" level="DEBUG"/>
    
    <root level="INFO">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE"/>
    </root>
</configuration>
*/
```

### Question 13 Answer (5 points)
**Complete Maven POM snippet:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- Project coordinates -->
    <groupId>com.company</groupId>
    <artifactId>order-service</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>
    
    <name>Order Service</name>
    <description>Order processing service</description>
    
    <!-- Properties -->
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        
        <!-- Dependency versions -->
        <slf4j.version>2.0.7</slf4j.version>
        <logback.version>1.4.8</logback.version>
        <junit.version>5.9.3</junit.version>
        <maven.compiler.version>3.11.0</maven.compiler.version>
        <maven.surefire.version>3.1.2</maven.surefire.version>
    </properties>
    
    <!-- Dependencies -->
    <dependencies>
        <!-- SLF4J API -->
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-api</artifactId>
            <version>${slf4j.version}</version>
        </dependency>
        
        <!-- Logback Classic (includes logback-core) -->
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>${logback.version}</version>
        </dependency>
        
        <!-- JUnit 5 -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>${junit.version}</version>
            <scope>test</scope>
        </dependency>
        
        <!-- Optional: JUnit 5 parameterized tests -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-params</artifactId>
            <version>${junit.version}</version>
            <scope>test</scope>
        </dependency>
        
        <!-- Optional: Mockito for testing -->
        <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-core</artifactId>
            <version>5.4.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <!-- Build configuration -->
    <build>
        <plugins>
            <!-- Maven Compiler Plugin -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>${maven.compiler.version}</version>
                <configuration>
                    <source>17</source>
                    <target>17</target>
                    <encoding>UTF-8</encoding>
                    <compilerArgs>
                        <arg>-parameters</arg>
                        <arg>-Xlint:all</arg>
                    </compilerArgs>
                </configuration>
            </plugin>
            
            <!-- Maven Surefire Plugin for running tests -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>${maven.surefire.version}</version>
                <configuration>
                    <includes>
                        <include>**/*Test.java</include>
                        <include>**/*Tests.java</include>
                    </includes>
                </configuration>
            </plugin>
            
            <!-- Maven JAR Plugin -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <version>3.3.0</version>
                <configuration>
                    <archive>
                        <manifest>
                            <mainClass>com.company.OrderServiceApplication</mainClass>
                        </manifest>
                    </archive>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

---

## Bonus Section Answer (10 points)

### Book Recommendation System - Complete Solution

```java
// Custom Exceptions
class BookNotFoundException extends Exception {
    public BookNotFoundException(String message) {
        super(message);
    }
}

class InvalidRatingException extends RuntimeException {
    public InvalidRatingException(String message) {
        super(message);
    }
}

class RecommendationException extends Exception {
    public RecommendationException(String message, Throwable cause) {
        super(message, cause);
    }
}

// Book entity
class Book {
    private Long id;
    private String title;
    private String author;
    private String genre;
    private double rating;
    private int publicationYear;
    
    public Book(Long id, String title, String author, String genre, double rating, int year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        setRating(rating);
        this.publicationYear = year;
    }
    
    public void setRating(double rating) {
        if (rating < 0.0 || rating > 5.0) {
            throw new InvalidRatingException("Rating must be between 0.0 and 5.0");
        }
        this.rating = rating;
    }
    
    // Getters
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public String getGenre() { return genre; }
    public double getRating() { return rating; }
    public int getPublicationYear() { return publicationYear; }
    
    @Override
    public String toString() {
        return String.format("Book{id=%d, title='%s', author='%s', genre='%s', rating=%.1f}", 
                           id, title, author, genre, rating);
    }
}

// User preferences
class UserPreferences {
    private Set<String> favoriteGenres;
    private Set<String> favoriteAuthors;
    private double minimumRating;
    private int preferredMinYear;
    
    public UserPreferences() {
        this.favoriteGenres = new HashSet<>();
        this.favoriteAuthors = new HashSet<>();
        this.minimumRating = 3.0;
        this.preferredMinYear = 2000;
    }
    
    // Getters and setters
    public Set<String> getFavoriteGenres() { return favoriteGenres; }
    public Set<String> getFavoriteAuthors() { return favoriteAuthors; }
    public double getMinimumRating() { return minimumRating; }
    public int getPreferredMinYear() { return preferredMinYear; }
    
    public void setMinimumRating(double minimumRating) { this.minimumRating = minimumRating; }
    public void setPreferredMinYear(int preferredMinYear) { this.preferredMinYear = preferredMinYear; }
}

// Repository interface
interface BookRepository {
    void addBook(Book book);
    Optional<Book> findById(Long id) throws BookNotFoundException;
    List<Book> findAll();
    List<Book> findByGenre(String genre);
    List<Book> findByAuthor(String author);
    List<Book> findByMinimumRating(double minRating);
    boolean removeBook(Long id);
}

// Repository implementation
class InMemoryBookRepository implements BookRepository {
    private static final Logger logger = LoggerFactory.getLogger(InMemoryBookRepository.class);
    private final Map<Long, Book> books = new ConcurrentHashMap<>();
    
    @Override
    public void addBook(Book book) {
        if (book == null || book.getId() == null) {
            throw new IllegalArgumentException("Book and book ID cannot be null");
        }
        
        logger.info("Adding book: {}", book.getTitle());
        books.put(book.getId(), book);
        logger.debug("Book added successfully. Total books: {}", books.size());
    }
    
    @Override
    public Optional<Book> findById(Long id) throws BookNotFoundException {
        logger.debug("Searching for book with ID: {}", id);
        
        if (id == null) {
            throw new IllegalArgumentException("Book ID cannot be null");
        }
        
        Book book = books.get(id);
        if (book == null) {
            logger.warn("Book not found with ID: {}", id);
            return Optional.empty();
        }
        
        logger.debug("Found book: {}", book.getTitle());
        return Optional.of(book);
    }
    
    @Override
    public List<Book> findAll() {
        logger.debug("Retrieving all books. Count: {}", books.size());
        return new ArrayList<>(books.values());
    }
    
    @Override
    public List<Book> findByGenre(String genre) {
        logger.debug("Searching books by genre: {}", genre);
        
        List<Book> result = books.values().stream()
            .filter(book -> genre.equalsIgnoreCase(book.getGenre()))
            .collect(Collectors.toList());
            
        logger.info("Found {} books in genre: {}", result.size(), genre);
        return result;
    }
    
    @Override
    public List<Book> findByAuthor(String author) {
        logger.debug("Searching books by author: {}", author);
        
        List<Book> result = books.values().stream()
            .filter(book -> author.equalsIgnoreCase(book.getAuthor()))
            .collect(Collectors.toList());
            
        logger.info("Found {} books by author: {}", result.size(), author);
        return result;
    }
    
    @Override
    public List<Book> findByMinimumRating(double minRating) {
        logger.debug("Searching books with minimum rating: {}", minRating);
        
        List<Book> result = books.values().stream()
            .filter(book -> book.getRating() >= minRating)
            .sorted(Comparator.comparingDouble(Book::getRating).reversed())
            .collect(Collectors.toList());
            
        logger.info("Found {} books with rating >= {}", result.size(), minRating);
        return result;
    }
    
    @Override
    public boolean removeBook(Long id) {
        logger.info("Removing book with ID: {}", id);
        boolean removed = books.remove(id) != null;
        
        if (removed) {
            logger.info("Book removed successfully. Remaining books: {}", books.size());
        } else {
            logger.warn("No book found to remove with ID: {}", id);
        }
        
        return removed;
    }
}

// Recommendation service interface
interface RecommendationService {
    List<Book> recommendBooks(UserPreferences preferences, int maxResults) 
        throws RecommendationException;
    List<Book> recommendSimilarBooks(Long bookId, int maxResults) 
        throws BookNotFoundException, RecommendationException;
}

// Recommendation service implementation
class SmartRecommendationService implements RecommendationService {
    private static final Logger logger = LoggerFactory.getLogger(SmartRecommendationService.class);
    private final BookRepository bookRepository;
    
    public SmartRecommendationService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    
    @Override
    public List<Book> recommendBooks(UserPreferences preferences, int maxResults) 
            throws RecommendationException {
        
        logger.info("Generating recommendations for user preferences");
        logger.debug("Preferences - Genres: {}, Authors: {}, Min Rating: {}", 
                    preferences.getFavoriteGenres(), 
                    preferences.getFavoriteAuthors(), 
                    preferences.getMinimumRating());
        
        try {
            List<Book> allBooks = bookRepository.findAll();
            
            if (allBooks.isEmpty()) {
                logger.warn("No books available for recommendations");
                return Collections.emptyList();
            }
            
            List<Book> recommendations = allBooks.stream()
                .filter(book -> book.getRating() >= preferences.getMinimumRating())
                .filter(book -> book.getPublicationYear() >= preferences.getPreferredMinYear())
                .filter(book -> matchesPreferences(book, preferences))
                .sorted(this::compareBooksByPreference)
                .limit(maxResults)
                .collect(Collectors.toList());
            
            logger.info("Generated {} recommendations", recommendations.size());
            return recommendations;
            
        } catch (Exception e) {
            logger.error("Error generating recommendations", e);
            throw new RecommendationException("Failed to generate recommendations", e);
        }
    }
    
    @Override
    public List<Book> recommendSimilarBooks(Long bookId, int maxResults) 
            throws BookNotFoundException, RecommendationException {
        
        logger.info("Finding similar books to book ID: {}", bookId);
        
        try {
            Optional<Book> targetBookOpt = bookRepository.findById(bookId);
            if (!targetBookOpt.isPresent()) {
                throw new BookNotFoundException("Book not found with ID: " + bookId);
            }
            
            Book targetBook = targetBookOpt.get();
            logger.debug("Target book: {}", targetBook);
            
            List<Book> similarBooks = bookRepository.findAll().stream()
                .filter(book -> !book.getId().equals(bookId))
                .filter(book -> isSimilar(book, targetBook))
                .sorted((b1, b2) -> Double.compare(
                    calculateSimilarityScore(b2, targetBook),
                    calculateSimilarityScore(b1, targetBook)
                ))
                .limit(maxResults)
                .collect(Collectors.toList());
            
            logger.info("Found {} similar books", similarBooks.size());
            return similarBooks;
            
        } catch (BookNotFoundException e) {
            throw e;
        } catch (Exception e) {
            logger.error("Error finding similar books for ID: {}", bookId, e);
            throw new RecommendationException("Failed to find similar books", e);
        }
    }
    
    private boolean matchesPreferences(Book book, UserPreferences preferences) {
        boolean genreMatch = preferences.getFavoriteGenres().isEmpty() || 
                           preferences.getFavoriteGenres().contains(book.getGenre());
        
        boolean authorMatch = preferences.getFavoriteAuthors().isEmpty() || 
                            preferences.getFavoriteAuthors().contains(book.getAuthor());
        
        return genreMatch || authorMatch;
    }
    
    private int compareBooksByPreference(Book b1, Book b2) {
        // Sort by rating (descending), then by publication year (descending)
        int ratingComparison = Double.compare(b2.getRating(), b1.getRating());
        if (ratingComparison != 0) {
            return ratingComparison;
        }
        return Integer.compare(b2.getPublicationYear(), b1.getPublicationYear());
    }
    
    private boolean isSimilar(Book book1, Book book2) {
        return book1.getGenre().equalsIgnoreCase(book2.getGenre()) ||
               book1.getAuthor().equalsIgnoreCase(book2.getAuthor()) ||
               Math.abs(book1.getRating() - book2.getRating()) <= 0.5;
    }
    
    private double calculateSimilarityScore(Book book1, Book book2) {
        double score = 0.0;
        
        // Genre similarity
        if (book1.getGenre().equalsIgnoreCase(book2.getGenre())) {
            score += 3.0;
        }
        
        // Author similarity
        if (book1.getAuthor().equalsIgnoreCase(book2.getAuthor())) {
            score += 2.0;
        }
        
        // Rating similarity
        double ratingDiff = Math.abs(book1.getRating() - book2.getRating());
        score += Math.max(0, 1.0 - ratingDiff);
        
        return score;
    }
}

// Main application demonstrating the complete system
public class BookRecommendationSystem {
    private static final Logger logger = LoggerFactory.getLogger(BookRecommendationSystem.class);
    
    public static void main(String[] args) {
        logger.info("Starting Book Recommendation System");
        
        try {
            // Initialize components
            BookRepository repository = new InMemoryBookRepository();
            RecommendationService recommendationService = new SmartRecommendationService(repository);
            
            // Sample data
            populateBooks(repository);
            
            // User preferences
            UserPreferences preferences = new UserPreferences();
            preferences.getFavoriteGenres().addAll(Arrays.asList("Fiction", "Mystery"));
            preferences.getFavoriteAuthors().add("Agatha Christie");
            preferences.setMinimumRating(4.0);
            
            // Get recommendations
            List<Book> recommendations = recommendationService.recommendBooks(preferences, 5);
            
            System.out.println("\n=== RECOMMENDATIONS ===");
            recommendations.forEach(System.out::println);
            
            // Find similar books
            List<Book> similarBooks = recommendationService.recommendSimilarBooks(1L, 3);
            
            System.out.println("\n=== SIMILAR BOOKS ===");
            similarBooks.forEach(System.out::println);
            
            logger.info("Book Recommendation System completed successfully");
            
        } catch (Exception e) {
            logger.error("Application error", e);
        }
    }
    
    private static void populateBooks(BookRepository repository) {
        logger.info("Populating sample books");
        
        List<Book> sampleBooks = Arrays.asList(
            new Book(1L, "Murder on the Orient Express", "Agatha Christie", "Mystery", 4.5, 1934),
            new Book(2L, "The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 4.2, 1925),
            new Book(3L, "And Then There Were None", "Agatha Christie", "Mystery", 4.6, 1939),
            new Book(4L, "To Kill a Mockingbird", "Harper Lee", "Fiction", 4.8, 1960),
            new Book(5L, "1984", "George Orwell", "Dystopian", 4.7, 1949),
            new Book(6L, "The Catcher in the Rye", "J.D. Salinger", "Fiction", 3.8, 1951),
            new Book(7L, "Hercule Poirot's Christmas", "Agatha Christie", "Mystery", 4.3, 1938)
        );
        
        sampleBooks.forEach(repository::addBook);
        logger.info("Added {} sample books", sampleBooks.size());
    }
}
```

This complete solution demonstrates:
- **Custom exceptions** with proper hierarchy
- **Generic repository pattern** with interface-based design
- **Stream operations** for complex filtering and recommendations
- **Comprehensive logging** at all levels
- **Error handling** throughout the application
- **Interface-based design** for extensibility and testability
- **Modern Java features** including Optional, streams, and lambda expressions

---

## Final Scoring Summary

**Perfect Score Breakdown:**
- Section 1 (20 pts): Fundamental Java concepts
- Section 2 (25 pts): OOP mastery
- Section 3 (25 pts): Advanced features
- Section 4 (20 pts): Functional programming
- Section 5 (10 pts): Tools and best practices
- Bonus (10 pts): Integration and design

**Level 6/10 Target: 70-79 points**
- Shows solid intermediate understanding
- Can apply concepts in practical scenarios
- Ready for more advanced Java topics
- Demonstrates professional development skills