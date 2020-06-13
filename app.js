              
                //Chapter1
                
//Task1.
alert("Welcome Viewers");

//Task2.
alert("Enter! Please enter a valid password");

//Task3.

alert("Welcome to JS land...\nHappy Coding!");

//Task4.
alert("Welcome to Js land... ");
alert("Happy Coding!");

//Task5.
alert("Hello...I can run Js through my web browser's console");

                   //Chapter2

//Task1.
var username;

//Task2.
var myName="Mahnoor Shoukat";

//Task3.
var message="Hello World";
alert(message);

//Task4.
var name="John Doe";
alert(name);
var age="15 years old";
alert(age);
var qualification="Certified Mobile Application Development";
alert(qualification);

//Task5.
var a=" PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(a);

//Task6.
var email= "My email is : ";
var address="manoa0741@gmail.com";
var all= email+address;
alert(all);

//Task7.
var a="I am trying to learn from the Book ";
var book="A Smarter Way To Learn JavaScript";
var c=a+book;
alert(c);

//Task8.
document.write("Yah! I can write HTML content through JavaScript");

//Task9.
var border = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
alert(border);

                   //Chapter3

//Task1.
var age;
age = "21";
alert("i am" + " " + age + " " + "years old.");

//Task2.
function clickCounter() {
    if (typeof (Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
      alert("You have visited the website " + localStorage.clickcount + " time(s).");
    } else {
      alert("Sorry, your browser does not support web storage...");
    }
  }

//Task3.
var birthYear;
birthYear = "1998";
document.write(" My birth year is" + " " + birthYear + "<br/>");
document.write("Data type of my declared variable is number" + "<br/>" + "<br/>" + "<br/>");

//Task4.
var name = "John Doe ";
var Product = "T-shirt";

function order() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount);
    } else {
      localStorage.clickcount = 1;
    }
    document.write("John Doe ordered " + localStorage.clickcount + " T-shirts on XYZ Clothing store");
  } else {
    document.write("Sorry, your browser does not support web storage...");
  }
}

document.write("" + " <br/>" + "");

                    //Chapter4

//Task1.
var a,b,c;

//Task2.
// Legal Variable Name:-  
var a="hello world";
var b=hello;
var c=myName;
var d=5;
var e=2+2;

// Illegal variable name:- 
var a=?heloo;
var b=)menu;

//Task3.
//a.
document.write("Rules for naming JS variables");
//b.
document.write(" Variable names can only contain "+ "$" + "_" + "For example $my_1stVariable");
//c.
document.write(" Variables must begin with a"+ "$ and _"+ "small and capital letter" +"or" +"any alphabetic character"+" For example $name, _name or name ");
//d.
document.write(" Variable names are case"+"Sensetive");
//e.
document.write("Variable names should not be JS"+"Keyword");

                    //Chapter5

//Task1.
var a = 5;
var b = 3;
var c = a + b;
document.write("Sum of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task2.
// subtraction
var a = 5;
var b = 3;
var c = a - b;
document.write("Subtraction of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>");

// multiplication
var a = 5;
var b = 3;
var c = a * b;
document.write("Multiplication of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>");

// division
var a = 5;
var b = 3;
var c = a / b;
document.write("Division of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>");

// modulus.
var a = 5;
var b = 3;
var c = a % b;
document.write("Modulus of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task3.

//a. 
var t;

//b.
document.write("Value after variable declaration is:" + t + "<br/>");

//c. 
var t = 5;

// d.
document.write("Value after variable declaration is:" + t + "<br/>");

//e.
var t;
t++;

//f. 
document.write("Value after increment is:" + t + "<br/>");

//g. 
var r;
r = t + 7;

//h.
document.write("Value after addition is:" + r + "<br/>");

//i. 
var s;
s = --r;

//j.
document.write("Value after decrement is:" + s + "<br/>");

//k. 
var u;
u = s % 3;

//l. 
document.write("The remainder is:" + u + "<br/>" + "<br/>" + "<br/>");

//Task4.

var ticketprice = 600;
var cost = ticketprice * 5;
document.write("Total cost of buying 5 tickets to a movie is:" + cost + "PKR" + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task5.
var n=prompt("Enter any number to print table");
for(i=1; i<=10; i++){
    document.write(n + " x " + i + " = " + n*i + "<br>");
}

//Task6.
var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');

//Task7.

var item1 = 650;
var item2 = 100;
var quantity = 3;
var quantity2 = 7;
var charges = 100;
//  Compute the total cost & show the receipt in your browser.
document.write("total cost of your order is: " + "  " + (+(item1 * quantity) + (+item2 * quantity2) + charges) + "<br/>" + "<br/>" + "<br/>");

//Task8.
var marks = 980;
var obtained = 804;
document.write(" Total Marks :" + marks + "<br/>" + "Marks Obtained :" + obtained + "<br/>" + "Percentage:" + (+obtained / marks * 100) + "%" + "<br/>" + "<br/>" + "<br/>");

//Task9.

var dollars = 10;
var riyals = 25;
document.write("Total Currency in PKR is:" + (+dollars * 104.80 + riyals * 28) + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task10.

var a = 10;
document.write((+a + 5) + (a * 10) + (a / 2) + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task11.
var birthYear = 1998;
var currentYear  = 2020;
var age  = currentYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

//Task12.
var radius = 3;
var circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
var area = Math.PI * radius*radius;
console.log("The area is " + area);

//Task13.
var snack="fries";
var age = 28;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + '  to last you until the ripe old age of ' + maxAge;
console.log(message);
                    //Chapter6-9

//Task1.
var a = prompt("enter value for a is:")
document.write("The Value of" + a + "is:" + "<br/>");
document.write("......................." + "<br/>");
document.write("The Value of a++ is:" + ++a + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");

document.write("The Value of a++ is:" + a++ + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");
document.write("The Value of a++ is:" + --a + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");
document.write("The Value of a++ is:" + a-- + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");

//Task2.
var a = 2, b = 1;
document.write("result:" + (+ --a - --b + ++b + b--) + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task3.
var username = prompt("enter your name:")
document.write("Hey" + " " + username + "!" + " " + "Thanks for visiting here" + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task5.
var number = +prompt("enter table of your choice:");

if (number > 0) {
  document.write("Table of " + " " + number + "<br/>");

  for (x = 1; x <= 10; x++) {
    document.write(number + "x" + x + "=" + number * x + "<br/>");
  }
}
else if (console !== 'undefined') {
  document.write("Table of 5" + "<br/>");
  for (a = 1; a <= 10; a++) {
    document.write("5" + "x" + a + "=" + 5 * a + "<br/>");
  }
}
document.write("<br/>" + "<br/>" + "<br/>" + "<br/>");


                   //Chapter9-11
//Task1.
var city=prompt("Enter City");
if(city=="Karachi"){
    alert("Welcome to city of lights");
}  

//Task2.

var gender=prompt("Enter your gender");
if(gender=="Male"){
    alert("Good Morning Sir");
}
else if(gender=="Female"){
    alert("Good Morning Ma'am");
}

//Task3.

var color=prompt("Input signal color");
if(color=="Red"){
    alert("Must Stop");
}
else if(color=="Yellow"){
    alert("Ready to move");
}
else if(color=="Green"){
    alert("Move Now");
}

//Task4.

var a=prompt("Input Remaining fuel");
if(a<0.25){
    alert("Please refill the fuel in your car");
}

//Task5.
// a.
var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }                    //Output:given condition for variable a is true
// b.
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }                  //No Output
//c.
var c = 12; if (c++ === 13){ alert("condition 1 is true"); }                                       //Output:condition 2 is true
if (c === 13){                                                                                     //Output:condition 4 is true
    alert("condition 2 is true"); } 
if (++c < 14){ 
    alert("condition 3 is true"); } 
    if(c === 14){
     alert("condition 4 is true"); }  

//d.
var materialCost = 20000;                                                                       //Output: The cost equals
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){
     alert("The cost equals"); } 

//e.
if (true){                                                                                    //Output:True
    alert("True"); } 
    if (false){ alert("False"); } 

//f.
if("car" < "cat"){                                                                           //Output:car is smaller than cat
    alert("car is smaller than cat"); } 

//Task7.

var secNum=4;
var n=prompt("Guess the number");
if(n==4){
    alert("Bingo! Correct answer");
}
else if(n+1){
    alert("Close enough to the correct answer");
}

//Task8.

var a=prompt("Enter num to check divisible of 3's");
if(a%3==0){
    alert("Yes it is divisible by 3");
}
else{
    alert("No it is not divisible by 3")
}

//Task9.

var a=prompt("Enter num to check even or odd");
if(a%2==0){
    alert("Even number");
}
else if(a%2!==0){
    alert("Odd number");
}

//Task10.

var t=prompt("Enter temperature");
if(t>40){
    alert("It is too hot outside");
}
else if(t>30){
 alert("The Weather today is Normal");
}
else if(t>20){
alert("Today’s Weather is cool.");
}
else if(t>10){
alert("OMG! Today’s weather is so Cool");
}

                   // Chapter12-13

//Task1.

var ch;
ch=prompt("Enter any word or number");
if (ch>='A' && ch<='Z')
alert("Character is a capital letter");
else if (ch>='a' && ch<='z')
alert("Character is a small letter");
else
alert("It is a digit");

//Task2.

var a,b;
a=prompt("Input first integer");
b=prompt("Input second integer");
if(a>b)
document.write(a + "is greater integer");
else if(b>a)
document.write(b + "is greater integer");
else if(b===a)
document.write(b + "is equal to" +a);

//Task3.

var x=prompt("Enter a number to check positive negative or zero");
if(x>0){
    alert("Number is positive");
}
else if(x<0){
    alert("Number is negative");
}
else if(x==0){
    alert("Number is zero");
}

//Task4.

function isVowel(x){

	var text;
	var x = x.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (x != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
// See if "A" is a vowel
var char ;
char=prompt("Enter any alphabet to check vowel or not");

if (isVowel(char)) {
	console.log("True");
} else {
	console.log("False");
}
  
//Task6.

var hour = 13; 
if (hour < 18){ 
    alert("Good day");
} 
    else {
        alert(" Good evening");
    }  

//Task7.

var time=prompt("Enter Prompt");
if(time>=0000 && time<1200){
    alert("Good Morning");
}
    else if(time>=1200 && time<1700){
        alert("Good Afternoon");
    }
    else if(time>=1700 && time<2100){
        alert("Good Evening");
    }
    else if(time>=2100 && time<2359){
        alert("Good night");
    }

                           //Chapter14-16
//Task1.

student_names= []; 

//Task2.

student_names= [];

//Task3.

var fruits =["apple", "orange", "grapes","mango"];

//Task4.

var num =[11,22,33,44,55];

//Task5.

var boolean =[true,false];

//Task6.

var mixArr =[true, 11, "mango", false, 55, "Ali"];

//Task7.

document.write("Qualifications");
var Pakistan=[SSC , HSC ,BCS , BS , BCOM , MS , MPhil , PhD];
for(Pakistan=[0]; ; Pakistan++){
document.write(Pakistan[0]);
}

//Task9.

var color=["red", "pink", "blue"];
document.write(color );
var a=prompt("Add color from start");
color.unshift(a);
document.write(color);
var b=prompt("Add color from end");
color.push(b);
document.write(color);
var c=prompt("Delete color from start");
color.shift(c);
document.write(color);
var d=prompt("Delete color from end");
color.pop(d);
document.write(color);
var e=prompt("Insert to an any index position");
color.splice(2,0,e);
document.write(color);
var f=prompt("Insert to an any index position");
color.slice(2,0,f);
document.write(color);

//Task10.

var std_score=[320,230,480,120];
document.write("Score of Students : " + std_score + "<br>");
std_score.sort(function(a, b){return a-b});
document.write("Ordered Score of Students : " + std_score);

//Task11.

var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("CitiesList:"+ "<br>" + cities + "<br>");
var selectedCitiesArray= cities.slice(1,4);
document.write("Selected Cities List:" + "<br>" + selectedCitiesArray);


//Task12.

var arr = ["This",  "is", "my" , "cat"]; 
document.write("Array <br>" + arr + "<br>");
document.write("String <br>" + arr.join(' '));

//Task13.

var arr=["keyboard", "Mouse", "Printer", "Monitor"];
alert(arr);
arr.shift();
alert(arr);
arr.shift();
alert(arr);
arr.shift();
alert(arr);

//Task14.

var arr=["keyboard", "Mouse", "Printer", "Monitor"];
alert(arr);
arr.pop();
alert(arr);
arr.pop();
alert(arr);
arr.pop();
alert(arr);

//Task15.
function favBrowser() {
    var mylist=document.getElementById('myList');
    document.getElementById('mobile').value=mylist.value;
}

                        //Chapter17-20
//Task1.

var arr=[],[],[];


//Task3.

for(var i=1; i<=10; i++){
    document.write(i + "<br>");
}

//Task4.

var n=prompt("Enter any number to print table");
var a=prompt("Enter length of table");
for(i=1; i<=a; i++){
    document.write(n + " x " + i + " = " + n*i + "<br>");
}

//Task5.

var fruits = new Array("Apple", "Banana", "Mango", "Orange", "Strawberry");

var len = fruits.length;	//no. of elements of the array

//print elements of the array
for (var i = 0; i < len; i++) {
	document.write(fruits[i]);
}

//Task6.

// a.
document.write("Counting"+"<br>");
for(var a=1; a<=15; a++){
    document.write(a+",");
}

// b.
document.write("Reverse Counting"+ "<br>");
for(var a=10; a>=1; a--){
    document.write(a+",");
}

//c.
document.write("Even"+ "<br>");
for(var a=0; a<=20; a++){
    if(a%2==0){
        document.write(a+",");
    }
    
}

//d.
document.write("Odd"+ "<br>");
for(var a=0; a<=20; a++){
    if(a%2!=0){
        document.write(a+",");
    }
    
}

//e.
document.write("Series"+ "<br>");
for(var a=2; a<=20; a++){
    if(a%2==0){
        document.write(a+"k"+",");
    }
    
}

//Task7.

var arr= ["cake", "apple pie", "cookie", "chips", "patties"];
a=prompt("What do you want to search");
alert(a + " is available at index " + arr.indexOf(a));

//Task8.

var array = [24, 53, 78, 91, 12];
var largest= 0;
document.write("Array is " + array + "<br>");

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
document.write("Largest num in array is : " + largest);

//Task9.

var arr = [24, 53, 78, 91, 12];
document.write("Array is " + arr + "<br>");
var min = Math.min.apply(Math, arr);
document.write("Smallest num in array is "+ min);

//Task10.

for(i=1; i<=100; i++){
    if(i%5==0){
        document.write(i+ " , ");
    }
}

//Task11.
var val1=+prompt("Enter First value");
var op=prompt("Enter Operator");
var val2=+prompt("Enter Second value");
console.log(val1+op+val2);
if(op==='+'){
    console.log((+val1)+(+val2));
}
else if(op==='-'){
    console.log(val1-val2);
}
else if(op==='*'){
    console.log(val1*val2);
}
else if(op==='/'){
    console.log(val1/val2);
}
else if(op==='%'){
    console.log(val1/val2*100+'%');
}