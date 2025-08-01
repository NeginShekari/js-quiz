const questions = [
  {
    id: 1,
    title: 'What is the correct way to declare a variable in Java?',
    options: [
      {
        key: 1,
        title: 'int x = 5;'
      },
      {
        key: 2,
        title: 'variable int x = 5;'
      },
      {
        key: 3,
        title: 'declare int x = 5;'
      },
      {
        key: 4,
        title: 'int x := 5;'
      }
    ],
    answerKey: 1
  },
  {
    id: 2,
    title: 'Which of the following is NOT a primitive data type in Java?',
    options: [
      {
        key: 1,
        title: 'int'
      },
      {
        key: 2,
        title: 'boolean'
      },
      {
        key: 3,
        title: 'String'
      },
      {
        key: 4,
        title: 'double'
      }
    ],
    answerKey: 3
  },
  {
    id: 3,
    title: 'What is the main principle of Object-Oriented Programming that allows a class to inherit properties from another class?',
    options: [
      {
        key: 1,
        title: 'Encapsulation'
      },
      {
        key: 2,
        title: 'Inheritance'
      },
      {
        key: 3,
        title: 'Polymorphism'
      },
      {
        key: 4,
        title: 'Abstraction'
      }
    ],
    answerKey: 2
  },
  {
    id: 4,
    title: 'Which keyword is used to create an interface in Java?',
    options: [
      {
        key: 1,
        title: 'class'
      },
      {
        key: 2,
        title: 'interface'
      },
      {
        key: 3,
        title: 'abstract'
      },
      {
        key: 4,
        title: 'implements'
      }
    ],
    answerKey: 2
  },
  {
    id: 5,
    title: 'What is method overloading in Java?',
    options: [
      {
        key: 1,
        title: 'Creating multiple methods with the same name but different parameters'
      },
      {
        key: 2,
        title: 'Overriding a method from parent class'
      },
      {
        key: 3,
        title: 'Creating methods with different names'
      },
      {
        key: 4,
        title: 'Using static methods only'
      }
    ],
    answerKey: 1
  },
  {
    id: 6,
    title: 'Which statement about packages in Java is correct?',
    options: [
      {
        key: 1,
        title: 'Packages are used only for organizing classes'
      },
      {
        key: 2,
        title: 'Packages provide namespace and access control'
      },
      {
        key: 3,
        title: 'All classes must be in the default package'
      },
      {
        key: 4,
        title: 'Packages cannot contain sub-packages'
      }
    ],
    answerKey: 2
  },
  {
    id: 7,
    title: 'What is the purpose of the "try-catch" block in Java?',
    options: [
      {
        key: 1,
        title: 'To handle exceptions and prevent program crashes'
      },
      {
        key: 2,
        title: 'To create loops'
      },
      {
        key: 3,
        title: 'To define methods'
      },
      {
        key: 4,
        title: 'To import packages'
      }
    ],
    answerKey: 1
  },
  {
    id: 8,
    title: 'Which of the following is a checked exception in Java?',
    options: [
      {
        key: 1,
        title: 'NullPointerException'
      },
      {
        key: 2,
        title: 'ArrayIndexOutOfBoundsException'
      },
      {
        key: 3,
        title: 'IOException'
      },
      {
        key: 4,
        title: 'RuntimeException'
      }
    ],
    answerKey: 3
  },
  {
    id: 9,
    title: 'Which collection interface extends the Collection interface and maintains insertion order?',
    options: [
      {
        key: 1,
        title: 'Set'
      },
      {
        key: 2,
        title: 'List'
      },
      {
        key: 3,
        title: 'Map'
      },
      {
        key: 4,
        title: 'Queue'
      }
    ],
    answerKey: 2
  },
  {
    id: 10,
    title: 'What is the difference between ArrayList and LinkedList?',
    options: [
      {
        key: 1,
        title: 'ArrayList uses arrays, LinkedList uses nodes with pointers'
      },
      {
        key: 2,
        title: 'ArrayList is synchronized, LinkedList is not'
      },
      {
        key: 3,
        title: 'LinkedList is faster for all operations'
      },
      {
        key: 4,
        title: 'There is no difference'
      }
    ],
    answerKey: 1
  },
  {
    id: 11,
    title: 'Which Map implementation maintains insertion order?',
    options: [
      {
        key: 1,
        title: 'HashMap'
      },
      {
        key: 2,
        title: 'TreeMap'
      },
      {
        key: 3,
        title: 'LinkedHashMap'
      },
      {
        key: 4,
        title: 'ConcurrentHashMap'
      }
    ],
    answerKey: 3
  },
  {
    id: 12,
    title: 'What is the purpose of generics in Java?',
    options: [
      {
        key: 1,
        title: 'To provide type safety at compile time'
      },
      {
        key: 2,
        title: 'To improve runtime performance'
      },
      {
        key: 3,
        title: 'To create abstract classes'
      },
      {
        key: 4,
        title: 'To handle exceptions'
      }
    ],
    answerKey: 1
  },
  {
    id: 13,
    title: 'What is a lambda expression in Java?',
    options: [
      {
        key: 1,
        title: 'A way to create anonymous functions'
      },
      {
        key: 2,
        title: 'A type of exception'
      },
      {
        key: 3,
        title: 'A collection framework'
      },
      {
        key: 4,
        title: 'A design pattern'
      }
    ],
    answerKey: 1
  },
  {
    id: 14,
    title: 'Which functional interface is used with lambda expressions that take one parameter and return a boolean?',
    options: [
      {
        key: 1,
        title: 'Function<T,R>'
      },
      {
        key: 2,
        title: 'Consumer<T>'
      },
      {
        key: 3,
        title: 'Predicate<T>'
      },
      {
        key: 4,
        title: 'Supplier<T>'
      }
    ],
    answerKey: 3
  },
  {
    id: 15,
    title: 'What is the purpose of the Stream API in Java?',
    options: [
      {
        key: 1,
        title: 'To handle file I/O operations'
      },
      {
        key: 2,
        title: 'To process collections of data in a functional style'
      },
      {
        key: 3,
        title: 'To create network connections'
      },
      {
        key: 4,
        title: 'To manage threads'
      }
    ],
    answerKey: 2
  },
  {
    id: 16,
    title: 'Which stream operation is used to transform elements in a stream?',
    options: [
      {
        key: 1,
        title: 'filter()'
      },
      {
        key: 2,
        title: 'map()'
      },
      {
        key: 3,
        title: 'forEach()'
      },
      {
        key: 4,
        title: 'collect()'
      }
    ],
    answerKey: 2
  },
  {
    id: 17,
    title: 'What is the difference between intermediate and terminal operations in streams?',
    options: [
      {
        key: 1,
        title: 'Intermediate operations return a stream, terminal operations return a result'
      },
      {
        key: 2,
        title: 'Terminal operations return a stream, intermediate operations return a result'
      },
      {
        key: 3,
        title: 'Both return streams'
      },
      {
        key: 4,
        title: 'Both return results'
      }
    ],
    answerKey: 1
  },
  {
    id: 18,
    title: 'What is Maven primarily used for in Java development?',
    options: [
      {
        key: 1,
        title: 'Code compilation only'
      },
      {
        key: 2,
        title: 'Project management and build automation'
      },
      {
        key: 3,
        title: 'Database management'
      },
      {
        key: 4,
        title: 'GUI development'
      }
    ],
    answerKey: 2
  },
  {
    id: 19,
    title: 'What is the main configuration file in a Maven project?',
    options: [
      {
        key: 1,
        title: 'build.xml'
      },
      {
        key: 2,
        title: 'pom.xml'
      },
      {
        key: 3,
        title: 'config.xml'
      },
      {
        key: 4,
        title: 'maven.xml'
      }
    ],
    answerKey: 2
  },
  {
    id: 20,
    title: 'What is the purpose of logging frameworks like SLF4J in Java?',
    options: [
      {
        key: 1,
        title: 'To handle database connections'
      },
      {
        key: 2,
        title: 'To provide a standardized way to log messages'
      },
      {
        key: 3,
        title: 'To create user interfaces'
      },
      {
        key: 4,
        title: 'To manage memory allocation'
      }
    ],
    answerKey: 2
  },
  {
    id: 21,
    title: 'Which access modifier makes a member accessible only within the same package?',
    options: [
      {
        key: 1,
        title: 'private'
      },
      {
        key: 2,
        title: 'protected'
      },
      {
        key: 3,
        title: 'public'
      },
      {
        key: 4,
        title: 'package-private (default)'
      }
    ],
    answerKey: 4
  },
  {
    id: 22,
    title: 'What happens when you call System.gc() in Java?',
    options: [
      {
        key: 1,
        title: 'It immediately runs garbage collection'
      },
      {
        key: 2,
        title: 'It suggests to the JVM to run garbage collection'
      },
      {
        key: 3,
        title: 'It terminates the program'
      },
      {
        key: 4,
        title: 'It clears all variables'
      }
    ],
    answerKey: 2
  },
  {
    id: 23,
    title: 'Which design pattern ensures a class has only one instance?',
    options: [
      {
        key: 1,
        title: 'Factory Pattern'
      },
      {
        key: 2,
        title: 'Observer Pattern'
      },
      {
        key: 3,
        title: 'Singleton Pattern'
      },
      {
        key: 4,
        title: 'Strategy Pattern'
      }
    ],
    answerKey: 3
  },
  {
    id: 24,
    title: 'What is the difference between == and .equals() in Java?',
    options: [
      {
        key: 1,
        title: '== compares references, .equals() compares content'
      },
      {
        key: 2,
        title: '.equals() compares references, == compares content'
      },
      {
        key: 3,
        title: 'Both compare references'
      },
      {
        key: 4,
        title: 'Both compare content'
      }
    ],
    answerKey: 1
  },
  {
    id: 25,
    title: 'Which statement about abstract classes is correct?',
    options: [
      {
        key: 1,
        title: 'Abstract classes cannot have constructors'
      },
      {
        key: 2,
        title: 'Abstract classes can have both abstract and concrete methods'
      },
      {
        key: 3,
        title: 'Abstract classes can be instantiated'
      },
      {
        key: 4,
        title: 'Abstract classes cannot have instance variables'
      }
    ],
    answerKey: 2
  }
];
$('#quizForm').empty();
questions.forEach(question => {
  $('#quizForm').append(`<div class="question">
                    <h3>${question.title}</h3>
                        <div class="choices">
                            <div class="choice">
                              <label for="">${question.options[0].title}</label>
                              <input type="radio" name="question${question.id}" value="${question.options[0].key}" />
                            </div>
                            <div class="choice">
                              <label>${question.options[1].title}</label>
                              <input type="radio" name="question${question.id}" value="${question.options[1].key}" />
                            </div>
                            <div class="choice">
                              <label>${question.options[2].title}</label>
                              <input type="radio" name="question${question.id}" value="${question.options[2].key}" />
                            </div>
                            <div class="choice">
                              <label>${question.options[3].title}</label>
                              <input type="radio" name="question${question.id}" value="${question.options[3].key}" />
                            </div>
                          </div></div>`);
  
})
$('#quizForm').append('<button type="submit">Submit Exam</button>');
$('#emptyAnswers').html('25');
let winScore = 0
let emptyScore = 0;
let looseScore = 0;
$('button[type=submit]').click(
  function(e){
    e.preventDefault();
    for (let i = 0; i < questions.length; i++) {
      if ($(`input:radio[name="question${questions[i].id}"]`).is(':checked')) {
          if ($(`input:radio[name="question${questions[i].id}"]:checked`).val() == questions[i].answerKey) 
          {
            winScore++;
          }
          else
          {
            looseScore++;
          }
      }
      else
      {
        emptyScore++;
      }
    }
    $('#rightAnswers').html(winScore);
    $('#emptyAnswers').html(emptyScore);
    $('#wrongAnswers').html(looseScore);
    winScore = 0
    emptyScore = 0;
    looseScore = 0;
  }
)
