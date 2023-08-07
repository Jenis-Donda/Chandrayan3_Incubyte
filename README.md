
# Incubyte Chandrayaan 3



## TDD :-
- Test-Driven Development (TDD) is a software development approach that emphasizes writing tests before writing the actual code. It is a part of the Agile software development methodology and aims to improve code quality, maintainability, and the overall development process.

## Setup TDD Enviroment :
### I use the jest framework for testing and programming language as javascript.

- Create an NPM project: 
```
$ npm init
```
- Create example.js and add it to the project’s root.
- Install Jest:
```
$ npm install jest --D
 ```
- Update the package.json test script
- make test files using .test.js extension.

### how to run?

```
$ npm run test 
```
- this will run all testcases of your project.
```
$ npm run test -- testing/example.test.js 
```
this will run particular test file of your project. Here testing is a folder that contains all test files.

## About Project 

- this project is about to calculate the coordinates and final direction of chandrayaan3 based on a given commands and initial coordinates and direction. so using TDD approach we achieve this.

- **Example** :

    Commands: [“f”, “r”, “u”, “b”, “l”]

    Starting Position: (0, 0, 0)

    Initial Direction: N

    output :

    "f" - (0, 1, 0) - N 

    "r" - (0, 1, 0) - E

    "u" - (0, 1, 0) - U

    "b" - (0, 1, -1) - U

    "l" - (0, 1, -1) - W

    Final Position: (0, 1, -1)

    Final Direction: W

- **Functions** :

    **1) turnLeft** : this function take direction as an argument and  based on that it will return the new direction. it is function for shift the direction to the left side. 


    if direction is "N" -> "W"

    if direction is "S" -> "E"

    if direction is "E" -> "N"

    if direction is "W" -> "S"

    if direction is "U" -> "W"

    if direction is "D" -> "E"

    **2) turnRight** : this function take direction as an argument and  based on that it will return the new direction. it is function for shift the direction to the right side. 

    
    if direction is "N" -> "E"

    if direction is "S" -> "W"

    if direction is "E" -> "S"

    if direction is "W" -> "N"

    if direction is "U" -> "E"

    if direction is "D" -> "W"

     **3) turnUp** : this function take direction as an argument and  based on that it will return the new direction. it is function for shift the direction to the Up side. 

    
    if direction is "N"  or "S" or "E" or "W" -> "U"

    if direction is "U" -> "D"

    if direction is "D" -> "S"

     **4) turnDown** : this function take direction as an argument and  based on that it will return the new direction. it is function for shift the direction to the Down side. 

    
    if direction is "N"  or "S" or "E" or "W" -> "D"

    if direction is "U" -> "S"

    if direction is "D" -> "N"

     **5) moveForward** : this function take direction and position as an argument and  based on that it will return the new coordinates. it is function for shift the direction to the Down side. 

    
    if direction is "N"  then y coordinate is increment by 1.

    if direction is "S"  then y coordinate is decrement by 1.

    if direction is "E"  then X coordinate is increment by 1.

    if direction is "W"  then x coordinate is decrement by 1.

    if direction is "U"  then z coordinate is increment by 1.

    if direction is "D"  then z coordinate is decrement by 1.

     **6) moveBackward** : this function take direction and position as an argument and  based on that it will return the new coordinates. it is function for shift the direction to the Down side. 

    
    if direction is "N"  then y coordinate is decrement by 1.

    if direction is "S"  then y coordinate is increment by 1.

    if direction is "E"  then X coordinate is decrement by 1.

    if direction is "W"  then x coordinate is increment by 1.

    if direction is "U"  then z coordinate is decrement by 1.

    if direction is "D"  then z coordinate is increment by 1.


     **7) processCommands** : this function is our main function which will take commands, initial direction and coordinates as argumnets. 

    in this function we go to one by one command and call the suitable function for that command and update direction or coordinates. this way we can get the last coordinates and final direction of chandrayaan3.

- we have test files for all this function. and we do unit testing for all this functions. and check whether we get expected output or not.

## example : 

commands = ['r','f','u','d','b','b','l']

initial position = [0,0,0]

initial direction = "E"

- first of all it will be going in processCommands function. in there first we have ,
    
    1)"r" so it call turnRight : which will return "S" and update the direction

    2)"f" so it call moveForward : which will return Coordinates with decrement y axis cordinates [0,-1,0]

    3)"u" so it call turnUp : which will return "U" and update the direction

    4)"d" so it call turnDown : which will return "S" and update the direction

    5)"b" so it call moveBackward : which will return Coordinates with increment y axis cordinates [0,0,0]

    6)"b" so it call moveBackward : which will return Coordinates with increment y axis cordinates [0,1,0]

    7)"l" so it call turnLeft : which will return "E" and update the direction

    **and in our test case expected is :** 

    final direction  : "E" 

    final position   : [0,1,0]

- so it will successfully passed the test case. so this way we can use the TDD for testing with developing.

- this way we can create many testcases and check the output for our program.

## Benefits of TDD :- 

- TDD ensures that the code is continuously tested, reducing the likelihood of introducing bugs or regressions.
- The tests serve as living documentation, showing how the code is intended to be used and what it should do.
- TDD provides immediate feedback during the development process, helping developers catch errors early.







