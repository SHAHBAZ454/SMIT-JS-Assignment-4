// *CHAPTER # 17-20


// !Q 1 Declare and initialize an empty multidimensional array.
// !(Array of arrays)
// ?var arr = [
// ?    [],
// ?    [],
// ?    [],
// ?]


// !Q 2 Declare and initialize a multidimensional array representing the following matrix:
// ?var arr = [
// ?    [0, 1, 2, 3],
// ?    [1 , 0 , 1 , 2],
// ?    [2 , 1 , 0 , 1]
// ?]
// ?for(let i= 0; i<arr.length; i++){   

//  ? for(let j= 0; j<4; j++){

//   ?  document.write(arr[i][j]+" ")
//   ?}
//   ?document.write( "<br> ")
// ?}

// !Q 3 Write a program to print numeric counting from 1 to 10.
// ?for(let i= 1; i<=10; i++){
       
// ?  document.write( i+"<br> ")
// ?}

// !Q 4 Write a program to print multiplication table of any number using for loop. Table number & length should be
// !taken as an input from user.
// ?var table = +prompt("Enter a Number to Show Multiplication Table")
// ?var length = +prompt("Enter length Multiplication Table")
// ?for(let i= 1; i<=length; i++){
       
// ?  document.write( table+" x "+ i+" = "+ table*i+"<br>")
// ?}


// !Q 5 Write a program to print items of the following array using for loop:
// !fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// ?var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// ?for (let i = 0; i <= 4; i++) {
// ?    document.write(fruits[i] + "<br>");
// ?}
// ?document.write("<br>")
// ?for (let i = 0; i < fruits.length; i++) {
// ?    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// ?}


// !Q 6 Generate the following series in your browser. 
// !See example output.
// !a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// !b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// !c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// !d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// !e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// ?var heading = "<h2>Counting</h2>"
// ?document.write(heading)
// ?var counting = 15;
// ?for(let i =1; i<=counting; i++){
// ?  document.write(i+" , ")
// ?}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// ?var heading = "<h2>Reverse Counting</h2>"
// ?document.write(heading)
// ?var counting = 1;
// ?for(let i =15; i>=counting ; --i){
// ?  document.write(i+" , ")
// ?}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// ?var heading = "<h2>Even</h2>"
// ?document.write(heading)
// ?var even = 20;
// ?for(let i =0; i<=even ; i+=2){
// ?  document.write(i+" , ")
// ?}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// ?var heading = "<h2>Odd</h2>"
// ?document.write(heading)
// ?var even = 20;
// ?for(let i =1; i<=even ; i+=2){
// ?  document.write(i+" , ")
// ?}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// ?var heading = "<h2>Series</h2>"
// ?document.write(heading)
// ?var series = 20;
// ?for(let i =2; i<=series ; i+=2){
// ?  document.write(i+"k, ")
// ?}

// !Q 7 You have an array
// !A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// !Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is
// !found in the list or not. Example:
// ?var order = prompt("Welcome to Paradise Bakery. What do you want to order sir/ma'am?")
// ?var BakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]

//? if(BakeryItems.includes(order))

//? document.write(order+ " is Available at index "+BakeryItems.indexOf(order)+" in our bakery  "+ "<br>")

//?else
//? document.write("We are sorry "+order +" is "+"<b>" +" not available"+ "</b>"+ " in our bakery ")

// !Q 8 Write a program to identify the largest number in the given array.
// !A = [24, 53, 78, 91, 12].
// ?var a =[24, 53, 78, 91, 12];
// ?var largestNumber = a[0]

// ?for(let i =0; i<a.length; i++){
// ?  if(a[i]>largestNumber){
// ?    largestNumber = a[i];
// ?  }
// ?}
// ?document.write("Array items: "+ a+"<br>"+"The largest number is " + largestNumber)

// !Q 9 Write a program to identify the smallest number in the given array.
// !A = [24, 53, 78, 91, 12]
//? var a =[24, 53, 78, 91, 12];
//? var smallest = a[0]

//? for(let i =0; i<a.length; i++){
//?   if(a[i]<smallest){
// ?    smallest = a[i];
// ?  }
// ?}
// ?document.write("Array items: "+a+"<br>"+"The smallest number is " + smallest)

// !Q 10 Write a program to print multiples of 5 ranging 1 to 100.
// ?var number= 100;
// ?for(let i = 5;i<=number; i+=5){
// ?  document.write(i+", ")
// ?}


// *CHAPTER # 21-25


// !Q 1 Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// !titled fullName. Greet the user using his full name.
// ?var firstName = prompt("First Name");
// ?var lastName = prompt("Last Name");
// ?var fullName = firstName+lastName;

// ?document.write("Hello "+fullName+" Welcome")

// !Q 2 Write a program to take a user input about his favoritemobile phone model.
//  !Find and display the length of userinput in your browser
//? var mob = prompt("Your Favorite Mobile Phone Model")
//? var mobLength = mob.length;
//? document.write(mob+ "<br>"+ "Length Of String: "+mobLength)

// !Q 3 Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// ?var str = prompt("Pakistan");
// ?var str1 = str.indexOf(prompt("Enter a 1 character will tell you the number of index"))
// ?document.write("String: "+ str+ "<br>"+ "Index of Character:  "+str1  )

// !Q 4 Write a p)rogram to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// ?var str = "Hello World";
// ?var str1 = str.lastIndexOf("l")
// ?document.write("String: "+ str+ "<br>"+ "Last Index of Character:  "+str1  )

// !Q 5 Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// ?var str = "Pakistani";
// ?var str1 = str.charAt(3)
// ?document.write("String: "+ str+ "<br>"+ "The character at 3rd  index is  :  "+str1  )

// !Q 6 Repeat Q1 using string concat() method.
 //? var firstName = "John";
// ?var lastName = "Wick";

// ?document.write(firstName+" "+lastName)

// !Q 7 Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// ?var city = "City: Hyderabad";
// ?var afterReplacement = city.replace("City: Hyderabad"," Islamabad");

// ?document.write(city+"<br>"+"After Replacement:"+afterReplacement)

// !Q 8 Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// !var message = “Ali and Sami are best friends. They play cricket and football together.”;
// ?var message = "Ali and Sami are best friends. They play cricket and football together."
// ?var replace = message.replace(/and/g, "&")
// Display the result in the browser
// ?document.write("<p>Original Message: " +"<br>"+ message + "</p>");
// ?document.write("<p>Modified Message: " +"<br>"+ replace + "</p>")

// !Q 9 Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
//? var value = "472";
//? var  type = typeof(value)
//? var number = Number(value)
//? var type1 = typeof(number)

//? document.write("Value: "+value+"<br>"+"Type: "+type+"<br>"+"Value: "+number+"<br>"+"Type: "+type1)

// !Q 10 Write a program that takes user input. Convert and show the input in capital letters.
//? var user = prompt("Covert Lower Case to Upper Case")
//? var upperCase = user.toUpperCase();
//? document.write("User Input: "+user+ "<br>"+"Upper Case: "+upperCase)

// !Q 11 Write a program that takes user input. Convert and show the input in title case
//? var user = prompt("Covert Lower Case to Upper Case")
//? var covert = user.charAt(0);
//? var upperCase = covert.toUpperCase();
//? document.write("User Input: "+user+ "<br>"+"Upper Case: "+upperCase)

// !Q 12 . Write a program that converts the variable num to string.
// !var num = 35.36 ;
// !Remove the dot to display “3536” display in your browser.
//? var num = 35.36 ;
//? var str = num.toString().replace(".", "");
//? document.write("Number: "+num +"<br>"+"Result: "+str)

// !Q 13 Write a program to take user input and store username in a variable. If the username contains any special symbol
// !among [@ . , !], prompt the user to enter a valid username.
// !For character codes of [@ .
// !Note:
// !ASCII code of ! is 33
// !ASCII code of , is 44
// !ASCII code of . is 46
// !ASCII code of @ is 64
// ?function validateUsername() {
            // Get user input for the username
        //?     var username = prompt("Please enter your username:");

            // Check if the username contains any special symbols
        //?     if (/[,@.!]/.test(username)) {
        //?         alert("Invalid username. Please enter a username without special symbols [@ . , !]");
        //?     } else {
        //?         alert("Username is valid: " + username);
        //?     }
        //? }

        // Call the validation function when the page loads (for demonstration)
        //? validateUsername();

// !Q 14 You have an array
// !A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// !Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given
// !item is found in the list or not.
// !Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program
// !should inform about its availability. Example:
//? var order = prompt("Welcome to Paradise Bakery. What do you want to order sir/ma'am?")
//? var a = ["cake", "apple pie", "cookie", "chips", "patties"]

//? if(a.includes(order))

//? document.write(order+ " is Available at index "+a.indexOf(order)+" in our bakery  "+ "<br>")

//? else
//? document.write("We are sorry "+order +" is not available in our bakery")

// !Q 15 Write a program to take password as an input from user. The password must qualify these requirements:
// !a. It should contain alphabets and numbers
// !b. It should not start with a number
// !c. It must at least 6 characters long
// !If the password does not meet above requirements, prompt the user to enter a valid password.
// !For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
//? var uinp=prompt("Enter text")
//? document.write("User input: ",uinp)
//? document.write("<br>")
//? document.write("Last character of input: ",uinp.charAt((uinp.length)-1))

// !Q 16 Write a program to convert the following string to an array using string split method.
// !var university = “University of Karachi”;
// !Display the elements of array in your browser.
 // Define the input string
          // ?var inputString = "The quick brown fox jumps over the lazy dog";

          // Convert the input string to lowercase to make it case-insensitive
          // ?var lowercaseString = inputString.toLowerCase();
  
          // Define the word to search for
          // ?var wordToSearch = "the";
  
          // Use regular expressions to count occurrences of the word
          // ?var wordCount = (lowercaseString.match(new RegExp("\\b" + wordToSearch + "\\b", "g")) || []).length;
  
          // Display the result in the browser
          //? document.write("<p>Input String: " + inputString + "</p>");
          //? document.write("<p>Occurrences of '" + wordToSearch + "': " + wordCount + "</p>");