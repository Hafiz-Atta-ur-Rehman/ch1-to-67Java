// Chapter # 1

/*

alert("Hello world");

alert("Error! Please Enter a valid Password");

alert("Welcome to JS Land..." + "\n" + "Happy Coding!");

alert("Welcome to JS Land...");

alert("Happy Coding");

alert("Hello...I can run JS hrough my web browser's consol");

console.log("Hello...I can run JS hrough my web browser's consol")

// Chapter # 2

var username;
//

var myName = "Hafiz Attaurrehman";
//

var message = "Hello World";
alert(message);
//

var name = "John Doe";
var age = "15 years old";
var c = "Certified Mobile Application development";
alert(name);
alert(age);
alert(c);
//

var pizza =  "PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P";
alert(pizza);
//

var email;
email = "attaurrehmaan97@gmail.com";
alert("My Email address is " + email);
//

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the BOOK "+ book);
//

var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);

// Chapter # 3

var age = 15;
alert("I am " + age + " years old");
//

var num = 14;
alert("You have visited this site " + num + " times");
//

var birthYear = 1997;
document.write("My birth Year is " + birthYear + "<br>");
document.write("Data type of my declared variable is number");


// Chapter # 4

var first = "Hello", second = " World!", third = 15;

// Legal Vaibale

var xyz = "legal Variable";
var num1;
var c = a+b;
var emp_name;
var $xyz;

// Illegal Vaibale

var student name; (space)
var alert; (JavaScript's keywords)
var marks%;
var 2rollnum;
var ?x;

// Chapter # 5

var num1 = 3;
var num2 = 5;
var num  = 0;

num = num1 + num2;
alert("Sum of "+num1+" and "+num2+" is "+num);

num = num2 - num1;
alert("Subtraction of "+num2+" and "+num1+" is "+num);

num = num1 * num2;
alert("Multiplication of "+num1+" and "+num2+" is "+num);

num = num2 / num1;
alert("Division of "+num2+" and "+num1+" is "+num);

num = num2 % num1;
alert("Moduls of "+num2+" and "+num1+" is "+num);
//


var a;
document.write("Value after variable declaration is: " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
++a;
document.write("Value after increment is:" + a + "<br>"); 
var c = a+7;
document.write("Value after addition is:" + c + "<br>");
--c;
document.write("Value after decrement is:" + c + "<br>");
var d = c%3;
document.write("The remainder is: "+ d + "<br>");
//

var cost = 600;
var total = 5*cost;
document.write("Total cost to buy 5 tickets to a movie is: "+ total + " PKR " + "<br>");
//

for(var i=1; i<=10; i++){
    document.write("4"+ "x" + i + "=" + i*4 + "<br>");
}
//

var c = 25;
var f = (c*9/5)+32;
document.write(c + "C " +" is equal to "+ f + "F " +"<br>");
//

var f = 70;
var c = (f-32)*5/9;
document.write(f + "F " +" is equal to "+ c + "C " +"<br>");
//

var item1 = prompt("Price of item 1");
var qt1 = prompt("Ordered Quantity of item 1");
var item2 = prompt("Price of item 2");
var qt2 = prompt("Ordered Quantity of item 2");
var shipping = prompt("Shipping Charges");
var total = (item1*qt1)+(item2*qt2)+(+shipping);
document.write("Price of item 1 is "+ item1+"<br>");
document.write("Quantity of item 1 is "+ qt1+"<br>");
document.write("Price of item 2 is "+ item2+"<br>");
document.write("Quantity of item 2 is "+ qt2+"<br>");
document.write("Shipping charges "+ shipping+"<br>");
document.write("Total Cost of Your Order is "+ total+"<br>");
//

var marks = prompt("Enter Total Marks");
var ob = prompt("Enter obtained marks");
var per = ob/marks*100;
document.write("Total Marks"+ marks+"<br>");
document.write("Obtained Marks"+ ob+"<br>");
document.write("Percentage is "+ per+"<br>");
//

var dollar = prompt("Enter Dollars");
var riyal = prompt("Enter Riyals");
var pkriyal = 28*riyal;
var pkdollar = 104.80*dollar;
var total = pkdollar+pkriyal;
document.write("Total Currency in PKR: "+ total+"<br>");
//

var a = 2;
var add = a+5;
var mul = a*10;
var div = a/2;
alert(add+mul+div);
//

var cy = prompt("Enter Current Year");
var by = prompt("Enter Birth Year");
var age = cy-by;
document.write("Current Year: "+ cy+"<br>");
document.write("Birth Year: "+ by+"<br>");
document.write("Your Age is "+ age+"<br>");
//

var pi = 3.142;
var radius = prompt("Enter radius of a circle");
var circumference = 2*pi*radius;
var area = pi*radius*radius;
document.write("Radius of a Circle is "+ radius+"<br>");
document.write("The circumference is "+ circumference+"<br>");
document.write("The Area is "+ area+"<br>");
//

var snacks = prompt("Enter Your Favorite Snacks");
var Age = prompt("Enter Your Age");
var maxage = 65;
var amount = prompt("Enter amount of Snacks per day");
var total = (maxage-Age)*3;
document.write("Favorite Snacks "+ snacks+"<br>");
document.write("Current Age "+ Age+"<br>");
document.write("Estimated Maximum Age "+ maxage+"<br>");
document.write("Amount of snacks per day "+ amount+"<br>");
document.write("You will need "+ total +" "+ snacks + " to last you until the ripe old age of "+ maxage +"<br>");
//

// Chapter # 6-9

var a = prompt("Enter Number");
document.write("Result: <br>");
document.write("The value of a is: " + a + "<br><br>");
++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a + "<br>");
a++;
document.write("Now the value of a is: " + a + "<br><br>");

--a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a + "<br>");
a--;
document.write("Now the value of a is: " + a + "<br><br>");
//

var a = 2,b = 1;
--a;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of b is: "+ b +"<br><br>");
--a - --b;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of --b is: "+ b +"<br><br>");
--a - --b + ++b;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of --b+ ++b is: "+ b +"<br><br>");
var result = --a - --b + ++b + b--;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of --b+ ++b + b-- is: "+ b +"<br><br>");
document.write("Now Result is: " + result + "<br><br>");
//

var input = prompt("Enter Name");
document.write("<h1>Welcome " + input +" </h1>")
//

var num = prompt("Enter number");
if (num == "") {
    for(var i=1; i<=10; i++){
        document.write("5"+ "x" + i + "=" + i*5 + "<br>");
    }
} else {
    for(i=1; i<=10; i++){
        document.write(num + "x" + i + "=" + i*num + "<br>");
    } 
}
//

var sub1 = prompt("Enter 1st Subject");
var sub2 = prompt("Enter 2nd Subject");
var sub3 = prompt("Enter 3rd Subject");
var marks = 100;
var ms1 = prompt("Enter Obtained Marks of Subject One");
var ms2 = prompt("Enter Obtained Marks of Subject Two");
var ms3 = prompt("Enter Obtained Marks of Subject Three");
var total = (+ms1)+(+ms2)+(+ms3);
var percentage1 = (ms1/marks)*100;
var percentage2 = (ms2/marks)*100;
var percentage3 = (ms3/marks)*100;
var per = (total/300)*100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+sub1+"</td><td>"+marks+"</td><td>"+ms1+"</td><td>"+percentage1+"%"+"</td></tr> <tr><td>"+sub2+"</td><td>"+marks+"</td><td>"+ms2+"</td><td>"+percentage2+"%"+"</td></tr> <tr><td>"+sub3+"</td><td>"+marks+"</td><td>"+ms3+"</td><td>"+percentage3+"%"+"</td></tr><tr><td></td><td>"+"300"+"</td><td>"+total+"</td><td>"+per+"%"+"</td></tr>");
//

// Chapter # 9-11

var karachi = prompt("Enter City","Karachi,Islamabad,Lahore");
if (karachi === "karachi") {
    document.write("Welcome to city of light")
} else {
    document.write("Not Found")
}
//

var gender = prompt("Enter Gender");
if (gender === "male") {
    document.write("Good Morning Sir")
} else {
    document.write("Good Morning Mam")
}
//

var color = prompt("Enter Color of Road traffic signal");
if (color === "red") {
    document.write("Must Stop")
} else if(color === "yellow"){
    document.write("Ready to move")
} else if(color === "green"){
    document.write("Move Now")
}
//

var fuel = prompt("Enter Fuels in Liters");
if (fuel <= 0.25) {
    document.write("Please refill the fuel in your car")
} else {
    document.write("Move on")
}
//

var a = 4;
if(++a === 5){
    alert("Given condition for variable a is true"); // Alert Message Displayed
}

var b = 82;
if(b++ === 83){
    alert("Given condition for variable b is true"); // Alert Message is not Displayed
}

var c = 12;
if(c++ === 13){
    alert("Given condition 1 for variable c is true"); // Alert Message is not Displayed
}

if(c === 13){
    alert("Condition 2 for variable c is true"); // Alert Message is Displayed
}
if(++c < 14){
    alert("Condition 3 for variable c is true"); // Alert Message is not Displayed
}
if(c === 14){
    alert("Condition 4 for variable c is true"); // Alert Message is Displayed
}
//

var materialCost = 20000;
var labourCost = 2000;
var TotalCost = materialCost + labourCost;
if(TotalCost === labourCost + materialCost){
    alert("Cost Equals");
}
//

if(true){
    alert("true");
}
if(false){
    alert("false");
}
//

var car = prompt("Enter any number for car");
var cat = prompt("Enter any number for cat");
if (car < cat ) {
    alert("car is smaller than cat");
} else {
    alert("cat is smaller than car");
}
//

var tmarks = prompt("Enter Total marks");
var obmarks = prompt("Enter obtained marks");
var perc = (obmarks/tmarks)*100;
document.write("Total Marks: "+ tmarks +"<br>");
document.write("Marks Obtained: "+ obmarks +"<br>");
document.write("Percentage: "+ perc +"%"+"<br>");
if(perc >= "90"){
    document.write("Grade : A <br>")
    document.write("Remarks : Excellent Performance  <br>")
}
else if(perc >= "80" && perc <= "89"){
    document.write("Grade : B <br>")
    document.write("Remarks : Good <br>")
}
else if(perc <= "79"){
    document.write("Grade : C <br>")
    document.write("Remarks : You Need To Improve <br>")
}
//

var game = 5;
var guess = prompt("Guess number from 1 to 10");
if(guess == game){
    document.write("Bingo! Correct Answer")
}
else if(guess > game){
    document.write("Close enough to the Correct Answer")
}
else if(guess < game){
    document.write("Close enough to the Correct Answer")
}
//

var divisible = prompt("Enter number");
var calculate = divisible%3;
if (calculate === 0) {
    document.write("This number is divisible by 3")
} else {
    document.write("This number is not divisible by 3")
}
//

var divisible = prompt("Enter number");
var calculate = divisible%2;
if (calculate === 0) {
    document.write("This number is Even Number")
} else {
    document.write("This number is Odd Number")
}
//

var t = prompt("Enter Temperature","0 to 50");
if (t > 40) {
    document.write("It is too hot outside")
} 
else if(t > 30) {
    document.write("The weather today is normal")
}
else if(t > 20) {
    document.write("Today weather is Cool")
}
else if(t > 10) {
    document.write("OMG! Today weather is so Cool")
}
//

var fstnum = prompt("Enter 1st number");
var secnum = prompt("Enter 2nd number");
var operator = prompt("Enter Operator");
if (operator === "+") {
    document.write((+fstnum)+(+secnum))
} 
else if(operator === "-") {
    document.write(fstnum-secnum)
}
else if(operator === "*") {
    document.write(fstnum*secnum)
}
else if(operator === "/") {
    document.write(fstnum/secnum)
}
else if(operator === "%") {
    document.write(fstnum%secnum)
}

// Chapter # 12-13

var ch = prompt("Enter number or a String");
if(ch >= 'A' && ch <= 'Z')
    {
        document.write( ch ," is uppercase alphabet.")
    }
    else if(ch >= 'a' && ch <= 'z')
    {
        document.write(ch ," is lowercase alphabet.")
    }
    else
    {
        document.write( ch ," is a number")
    }
//

var int1 = prompt("Enter 1st integer");
var int2 = prompt("Enter 2nd integer");
if (int1 > int2) {
    document.write("1st integer " + int1 + " is Greater than "+ int2)
} else if(int2 > int1){
    document.write("2nd integer " + int2 + " is Greater than "+ int1)
}
else{
    document.write(int2 + " and "+ int1 + " both are equal")
}
//

var input = prompt("Enter Number")
if(input > 0){
    document.write("Given Input is Positive")
}
else if(input < 0){
    document.write("Given Input is Negative")
}
else if(input == 0){
    document.write("Given Input is Zero")
}
//

var ch = prompt("Enter Vowel or not");

if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' )
{
    document.write("It is Vowel")
}
else 
{
    document.write("It is not Vowel")
}
//

var password = prompt("Enter Password");
var valid = prompt("Re-Enter Your Password");
if(password == ""){
    document.write("Please enter your password")
}else if(password === valid){
    document.write("Correct! The Password you entered matches the original password")
}else if(password !== valid){
    document.write("Incorrect password")
}
//

var greeting;
var hour = 13;
if(hour < 18){
    greeting = "Good Day";
    document.write(greeting);
}else{
    greeting = "Good Evening"
    document.write(greeting);
}
//

var time = prompt("Enter Time in 24 Format","Like 1900");
if(time >= 0000 && time < 1200){
    document.write("Good Morning")
}else if(time >= 1200 && time < 1700){
    document.write("Good Afternoon")
}else if(time >= 1700 && time < 2100){
    document.write("Good Evening")
}else if(time >= 2100 && time < 2359){
    document.write("Good Night")
} 
//

// Chapter # 14-16

var studentname = [];
studentname[0] = prompt("Enter student Name");
studentname[1] = prompt("Enter 2nd student Name");
document.write(studentname);
//

var studentname = [];
studentname[0] = "Ali";
studentname[1] = "usman";
studentname[2] = "Bilal";
document.write(studentname);
//

var arr = ["Student1","Student2","Student3"];
document.write(arr);
//

var arr = ["1","2","3"];
document.write(arr);
// 

var mixedarray = ["1","Bob","Now is","True"];
document.write(mixedarray);
//

var arr = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"];
document.write("Qualification <br>");
document.write("1) "+ arr[0] + "<br>");
document.write("2) "+ arr[1] + "<br>");
document.write("3) "+ arr[2] + "<br>");
document.write("4) "+ arr[3] + "<br>");
document.write("5) "+ arr[4] + "<br>");
document.write("6) "+ arr[5] + "<br>");
document.write("7) "+ arr[6] + "<br>");
document.write("8) "+ arr[7] + "<br>");
//

var arr = ["Kashif","Fahad","Haseeb"];
var arr1 = ["320","230","480"];
var per0 = (arr1[0]/500)*100;
var per1 = (arr1[1]/500)*100;
var per2 = (arr1[2]/500)*100;
document.write("Score of " + arr[0] + " is " + arr1[0] + ". Percentage:" + per0 + " % <br>");
document.write("Score of " + arr[1] + " is " + arr1[1] + ". Percentage:" + per1 + " % <br>");
document.write("Score of " + arr[2] + " is " + arr1[2] + ". Percentage:" + per2 + " % <br>");
//

var colorname = ["Red","Green","Blue","White","Black"];
document.write("Original Array: "+colorname+ "<br>");

var addbgcolor = prompt("Enter color which you want to add begining of array");
colorname.unshift(addbgcolor);
document.write("Add beginnig: "+colorname+ "<br>");

var addendcolor = prompt("Enter color which you want to add End of array");
colorname.push(addendcolor);
document.write("Add End: "+colorname+ "<br>");

var add1stcolor = prompt("Enter 1st color");
var add2ndcolor = prompt("Enter Color color");
colorname.unshift(add1stcolor);
colorname.unshift(add2ndcolor);
document.write("Add Two more colors at beginning: "+colorname+ "<br>");

colorname.shift(add2ndcolor);
document.write("Remove beginnig: "+colorname+ "<br>");

colorname.pop(addendcolor);
document.write("Remove End: "+colorname+ "<br>");

var index = prompt("Enter Index Where you want to add color");
var color = prompt("Enter Colorname");
colorname.splice(index,1,color);
document.write("Add particular position: "+colorname+ "<br>");

var index1 = prompt("Enter Index Where you want to delete color");
colorname.splice(index1,1);
document.write("Remove particular position: "+colorname+ "<br>");
//

var score = [320,230,480,120];
var arr;
document.write("Student score is: "+ score);
for(var i=0; i<score.length; i++){
    for(var j=i+1; j<score.length; ++j){
        if(score[i] > score[j]){
            arr = score[i];
            score[i] = score[j];
            score[j] = arr;
        }
    }
}
document.write("<br> The asscending order is: ");
for(i=0; i<score.length; ++i)
document.write("<br>"+ score[i]);
//

var arr = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities List <br>"+arr+"<br>");
arr2 = arr.slice(2,4);
document.write("Selected Cities List <br>"+arr2);
//

var arr = ["This","is","my","cat"];
document.write("Array is: <br>"+arr+"<br>");
var join = arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3];
document.write("String: <br>"+join);
//

var devices = [];
var length = prompt("Enter the length of array");
for(var i=0; i<length; i++){
    var add = devices.push(prompt("Enter Devices"));
}
document.write("Devices: <br>"+devices+"<br>");
for(var j=0; j<i; j++){
    var out = devices.shift();
    document.write("Out: <br>"+out+"<br>");
}
//

var devices = [];
var length = prompt("Enter the length of array");
for(var i=0; i<length; i++){
    var add = devices.push(prompt("Enter Devices"));
}
document.write("Devices: <br>"+devices+"<br>");
for(var j=0; j<i; j++){
    var out = devices.pop();
    document.write("Out: <br>"+out+"<br>");
}
//
var phone = ["Apple","Samsung","Motorola","Nolia","Sony","Haier"];
document.write(<select>
    <option>Apple</option>
    <option>Samsung</option>
    <option>Motorola</option>
    <option>Nokia</option>
    <option>Sony</option>
    <option>Haier</option>
</select>);

// Chapter # 17-20

var arr = [];
var arr1 = [0,1,2,3];
var arr2 = [1,0,1,2];
var arr3 = [2,1,0,1];
arr = document.write(arr1+"<br>");
arr = document.write(arr2+"<br>");
arr = document.write(arr3+"<br>");
//

for(var i=1; i<=10; i++){
    document.write(i+"<br>");
}
//

var table = prompt("Enter a number to show its multiplication table");
var len = prompt("Enter Length of your table");
for(var i=1; i<=len; i++){
    document.write(table + "x" + i + "=" + i*table + "<br>");
}
//

var fruits = ["Apple","Banana","Mango","Orange","Strawbwry"];
for(var i=0; i<fruits.length; i++){
    document.write(fruits[i]+"<br>");
}
for(var i=0; i<fruits.length; i++){
    document.write("Elements at index "+ i + " is "+ fruits[i]+"<br>");
}
//

document.write("Counting <br>")
for(var i=1; i<=15; i++){
    document.write(i+",");
}
document.write("<br>Reverse Counting <br>")
for(var i=10; i>=1; i--){
    document.write(i+",");
}
document.write("<br>Even <br>")
for(var i=0; i<=20; i++){
    for(var j=i; j%2==0; j++)
    document.write(j+",");
}
document.write("<br>Odd <br>")
for(var i=0; i<=20; i++){
    for(var j=i; j%2!=0; j++)
    document.write(j+",");
}
document.write("<br>Series <br>")
for(var i=2; i<=20; i++){
    for(var j=i; j%2==0; j++)
    document.write(j+"k,");
}
//

var arr = ["cake","Apple pie","cookie","chips","patties"];
var bakery = prompt("Welcome to ABC Bakery, What do you want to order Sir/Mam");
for(var i=0; i<=arr.length; i++){
    if(arr[i]==bakery){
        document.write(bakery +" is available at index "+ i );
    }
}
//

var score = [24,53,78,91,12];
document.write("Array items <br>"+score);
for(var i=0; i<score.length; i++){
    for(var j=i+1; j<score.length; j++){
        if(score[j] > score[i]){
            
        }
        else{
            document.write("<br> The Largest number is: "+ score[i]);
        }
        break
    }
    
}
//

var score = [24,53,78,91,12];
document.write("Array items <br>"+score);
for(var i=0; i<score.length; i++){
    for(var j=i; j<score.length; j++){
        if(score[i] > score[j]){
            document.write("<br> The Smallest number is: "+ score[j]);
        } 
    }
    break
}

//

for(var i=1; i<=100; i++){
    for(var j=i; j%5==0; j++)
    document.write(j+" ,");
}

*/

//                              (Chapter 21-25) 

// Q1

/*var first_name 
var last_name
var full_name
 
first_name = prompt("Please enter your first name");
last_name = prompt("Please enter your last name");
full_name = first_name +" "+last_name;
alert("Your full name is "+full_name);
*/

// Q2
/*var phone_model 
var length_phone
var fupholl_name
 
phone_model = prompt("Please enter your favorite mobile phone model");
length_phone = phone_model.length;
document.write("My favorite phone is : "+phone_model+"<br>");
document.write("Length of string : "+length_phone);
*/

// Q3.
/*
var string = "Pakistani";
var index_num = string.indexOf('n');
document.write("String : "+string+"<br>");
document.write("Index of 'n' : "+index_num);
*/

// Q4.
/*
var string = "Hello World";
var index_num = string.lastIndexOf('l');
document.write("String : "+string+"<br>");
document.write("Last index of 'l' : "+index_num);
*/

// Q5.
/*
 var string = "Pakistani";
 var index_num = string.charAt(3);
 document.write("String : "+string+"<br>");
 document.write("Character at index 3 : "+ index_num);
*/

// Q6.
/*
var first_name 
var last_name
var full_name
 
first_name = prompt("Please enter your first name");
last_name = prompt("Please enter your last name");
full_name = first_name.concat(last_name);
alert("Your full name is "+full_name);
*/

// Q7.
/*
var cityname = "Hyderabad";
var replacename = cityname.replace("Hyder","Islam");
document.write("City : "+cityname+"<br>");
document.write("After replacement : "+replacename);
*/

// Q8.
/*
var message = "Ali and Sami are best friends. They play cricket and football together."; 
var replace_message = message.replace(/and/g,"&");
document.write("Befor replacement message :"+message+"<br>");
document.write("Afer replacement message :"+replace_message);
*/

// Q9.
/*
var string = 472 
var num  = parseInt(string);
document.write("Value :"+string+"<br>");
document.write("Type : String"+"<br>");
document.write("Value :"+num+"<br>");
document.write("Type : Number");
*/

// Q10.
/*
var input;
var upperinput;
input = prompt("Please enter in small letters");
upperinput = input.toUpperCase();
document.write("User input :"+input+"<br>");
document.write("Upper Case :"+upperinput);
*/

// Q11.
/*
var num = user_input;
var title_user_input;
 
user_input = prompt("Please enter in small letters");

title_user_input = user_input.charAt(0).toUpperCase()+user_input.substr(1).toLowerCase();
document.write("User input :"+user_input+"<br>");
document.write("Title Case :"+title_user_input);
*/

// Q12.
/*
var num = 35.36; 
var string = num.toString();

result = string.slice(0,2)+string.slice(3);
document.write("Number :"+num+"<br>");
document.write("Result :"+result);
*/

// Q13.
/*
var user_name; 
user_name = prompt("Enter user name");

for (var i = 0; i < user_name.length; i++) {
    if (user_name.charCodeAt(i) == "33" || user_name.charCodeAt(i) == "44"||  
        user_name.charCodeAt(i) == "46" || user_name.charCodeAt(i) == "64")
    {document.write("Invalid password");
     break;}
    else{
        document.write("Valid password");
        break; 
    }
}
*/

// Q14.
/*
var A = ["cake","Apple pie","cookie","chips","patties"];
var item;
var bakery = prompt("Welcome to ABC Bakery, What do you want to order Sir/Mam");

for(var i=0; i<=A.length; i++){
    item = A[i].toUpperCase().indexOf(bakery.toUpperCase());
    if(item >= 0){
        document.write(bakery +" is available at index "+ i );
        break;}
}
    if(item < 0){
    document.write("We are sorry. "+bakery +" is not available in our bakery");
    }
*/

// Q15.
/*
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var pw = prompt("Enter Password");

if (pw.length < 5) {
    document.write("The password length must be  at least 6 characters long");}
else if (pw.charCodeAt(0) < 48 || pw.charCodeAt(0) > 57)
 {document.write("Password must be start with alphabets");}
 
 for(var i=0; i<=pw.length; i++){
   if (pw.charCodeAt(i) >= 48 || pw.charCodeAt(i) <= 57||
    pw.charCodeAt(i) >= 65 || pw.charCodeAt(i) <= 90||
    pw.charCodeAt(i) >= 97 || pw.charCodeAt(i) <= 122){}
    else
     {document.write("Invalid Password")}
}
*/

// Q16.
/*
var university = "University of Karachi"; 
var arr = university.split(''); 

for(var i=0; i<=arr.length-1; i++){
document.write(arr[i] +"<br>"); 
}
*/

// Q17.
/*
var user_input= prompt("User input"); 
var input_length = user_input.length-1;
var last_ch = user_input.charAt(input_length);
document.write("Last character of input:"+last_ch); 
*/

// Q18.
/*
var text = "The quick brown fox jumps over the lazy dog";
var arr = text.split(' '); 
var word = "the";
var count = 0;

for(var i=0; i<=arr.length-1; i++){
    if(arr[i].toUpperCase() == word.toUpperCase()){
        count = ++count;
    }  
}
document.write("There are "+count+" occurraence(s) of the word 'the'"); 
*/


 //                              (Chapter 26-30)
 
 

 //     Q 1.
/*
 var num = prompt("Enter any positive decimal number");
 var round = Math.round(num);
 var floor = Math.floor(num);
 var ceil = Math.ceil(num);
 document.write("Number " + num +"<br>");
 document.write("Round off Valu " + round +"<br>");
 document.write("Floor Value " + floor +"<br>");
 document.write("Ceil value " + ceil +"<br>");
*/

 //     Q 2.
/*
 var num = prompt("Enter any positive decimal number");
 var round = Math.round(num);
 var floor = Math.floor(num);
 var ceil = Math.ceil(num);
 document.write("Number " + num +"<br>");
 document.write("Round off Valu " + round +"<br>");
 document.write("Floor Value " + floor +"<br>");
 document.write("Ceil value " + ceil +"<br>");
 */

//     Q 3.
/*
var num = prompt("Enter any positive/Negative number");

var abso = Math.abs(num);

document.write("The absolute value of " + num + " is " + abso);
*/

//     Q 4.

/*
var abc = Math.floor( Math.random() * 6 );
var diceRoll = abc +1;
var abcd = Math.floor( Math.random() * 6 );
var diceRolld = abcd +1;
document.write("Random Dice value:  " + diceRoll +"<br>");
document.write("Random Dice value:  " + diceRolld +"<br>");
*/

//     Q 5.

/*
var abc = Math.floor( Math.random() * 2 );
var diceRoll = abc +1;
var abcd = Math.floor( Math.random() * 2 );
var diceRolld = abcd +1;
if(diceRoll == 2 && diceRolld == 1)
{
    document.write(diceRoll + "<br> Random Coin value: Head <br>");
    document.write(diceRolld + "<br> Random Coin value: Tail <br>");
}
*/

//     Q 6.

/*
var abc = Math.floor( Math.random() * 99 );
var diceRoll = abc +1;
document.write("Random Number between 1 and 100: " + diceRoll +"<br>");
*/

//     Q 7.

/*
var abc = Math.floor( Math.random() * 49 );
var diceRoll = abc +1;
document.write("The weight of user is: " + diceRoll +" Kilogram <br>");
*/

//     Q 8.

/*
var abc = Math.floor( Math.random() * 9 );
var secretnum = abc +1;
var userinput = prompt("Enter number between 1 and 10 ");
if(userinput == secretnum){
    alert("Congratulation Your Number is Found");
}
else{
    alert("Prevent This page from creating additional dialogue ")
}
*/
 //                              (Chapter 31-34)

 // Q1.
// var dat = new Date();
// document.write(dat);

// Q2.
// var dat = new Date();
// var month_num = dat.getMonth();
// var month_name = '';

// if (month_num == "0"){
//     month_name = "January";
// }
// else if (month_num == "1"){
//     month_name = "February";
// }
// else if (month_num == "2"){
//     month_name = "March";
// }
// else if (month_num == "3"){
//     month_name = "April";
// }
// else if (month_num == "4"){
//     month_name = "May";
// }
// else if (month_num == "5"){
//     month_name = "June";
// }
// else if (month_num == "6"){
//     month_name = "July";
// }
// else if (month_num == "7"){
//     month_name = "August";
// }
// else if (month_num == "8"){
//     month_name = "September";
// }
// else if (month_num == "9"){
//     month_name = "October";
// }
// else if (month_num == "10"){
//     month_name = "November";
// }
// else if (month_num == "11"){
//     month_name = "December";
// }

// document.write(month_name);

// Q3.
// var dat = new Date();
// var dt = dat.toString();
// var day = dt.slice(0,3);
// document.write("Today is "+day);


// Q4.
// var dat = new Date();
// var dt = dat.toString();
// var day = dt.slice(0,3);

// if(day == "Sat"|| day == "Sun")
// document.write("It's Funday");


// Q5.
// var month = 0; // January
// var days = new Date().getDate();

// if (days <  16 ){
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

// Q6.
// var current_date = new Date();
// var milli_sec = new Date().getTime();
// var milli_min = Math.floor(milli_sec/(1000*60*60));

// document.write("Current Date : "+current_date+"<br>");
// document.write("Elapsed milli seconds since January 1, 1970 : "+milli_sec+"<br>");
// document.write("Elapsed milli minutes since January 1, 1970 : "+milli_min);

// Q7.
// var current_date = new Date();
// var hours = new Date().getHours();

// if (hours >=  12){
//     alert("It's PM");
// }
// else{
//     alert("It's AM");
// }

// Q8.
// var current_date = new Date();
// var day = "31";
// var month = "11";
// var year = "2020";
// var later_date = new Date(year, month, day);
// document.write("Later Date : "+later_date);

// Q9.
// var current_date = new Date();
// var ramzan_date = new Date(2015, 6, 15);
// var cur_date_milli = current_date.getTime();
// var ram_date_milli = ramzan_date.getTime();
// var diff = cur_date_milli - ram_date_milli;
// var days = diff/(1000*60*60*24*30);

// days = Math.floor(days);

// document.write(days+" days have passed since 1st Ramzan, 2015");


// Q10.
// var ref_date = new Date(2015, 11, 5);
// var start_date = new Date(2015, 0, 0);
// var ref_date_milli = ref_date.getTime();
// var start_date_milli = start_date.getTime();
// var diff = ref_date_milli - start_date_milli;
// var sec = diff/(1000*60);

// sec = Math.floor(sec);

// document.write("On reference date " +ref_date+"<br>");
// document.write(sec+" seconds have passed since begining of 2015");

// Q11.
// var current_date = new Date();
// var hours = new Date().getHours();

// var previous_date = current_date.setHours(hours-1);
// document.write("Current Date : "+current_date+"<br>");
// document.write("1 hours ago it was :"+previous_date);

// Q12.
// var current_date = new Date();
// var years = new Date().getFullYear();

// var previous_date = current_date.setYears(years-100);
// document.write("Current Date : "+current_date+"<br>");
// document.write("1oo years back it was :"+previous_date);

// Q13. 
// var age = prompt("Your age is"); 
// var cur_year = new Date().getFullYear();

// var birth_year = cur_year - age;

// document.write("Your birth year is :"+birth_year); 

// Q14.
// var customer_name = "ABC CUSTOMER";
// var current_month = "FEBRUARY";
// var number_of_units = 410;
// var charges_per_unit = 16;
// var net_amount_payable = 0;
// var late_payment_surcharge = 350;
// var gross_amount_paybale = 0;

// net_amount_payable = Math.round(number_of_units * charges_per_unit);
// gross_amount_paybale = Math.round(net_amount_payable + late_payment_surcharge);
// document.write("<H1> K-Eelectric Bill </H1><br>"); 
// document.write("Customer Name : "+customer_name+"<br>"); 
// document.write("Current Month : "+current_month+"<br>"); 
// document.write("Number of units : "+number_of_units+"<br>"); 
// document.write("Charges per unit : "+charges_per_unit+"<br><br><br>"); 
// document.write("Net amount payable (with in due date) : "+net_amount_payable+"<br>"); 
// document.write("Late payment surcharge : "+late_payment_surcharge+"<br>"); 
// document.write("Gross amount paybale (after due date) : "+gross_amount_paybale+"<br>"); 

 //                              (Chapter 35-38)

 //     Q 1.
/*
 var date = new Date();
document.write(date);
*/

 //     Q 2.
 /*
 function user(){
    var fname = prompt("Enter First Name");
    var lname = prompt("Enter Last Name");
    document.write(fname+" "+lname);
 }
 user();
 */

  //     Q 3.
  /*
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter 2nd Number");
function add(a,b){
    var z = (+a)+(+b);
    return z;
}
var g = add(num1,num2);
document.write(g);
*/

//     Q 4.
/*
var num1 = prompt("Enter First Number");
var operator = prompt("Enter Operator");
var num2 = prompt("Enter 2nd Number");
function calc(a,b,c){
    if(operator === "+"){
        return (+a)+(+c);
    }else if(operator === "-"){
        return a-c;
    }else if(operator === "*"){
        return a*c;
    }else if(operator === "/"){
        return a/c;
    }else{
        return "Incorrect Operator";
    }
}
var g = calc(num1,operator,num2);
document.write(g);
*/

//     Q 5.
/*
var num = prompt("Enter any one Number");
function user(a){
    return a*a;
 }
var f = user(num);
document.write(f);
*/

//     Q 6.
/*
var n = prompt("Enter any one Number");
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  answer = factorial(n)
  document.write("The factorial of " + n + " is " + answer);
  */

//     Q 7.
/*
 var startnum = prompt("Enter Starting Number");
 var endtnum = prompt("Enter Ending Number");
 function user(){
     for(var i = startnum; i<=endtnum; i++){
        document.write(i + "<br>");
     }
  }
 user();
*/

//     Q 8.
/*
var Base = prompt("Enter Base of trianglr");
var Per = prompt("Enter Perpendicular of triangle");
function hypoteneus(sideA, sideB){
    var z = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    return z;
  }
  
var a = hypoteneus(Base, Per);
document.write(a);
*/

//     Q 9.
/*
var width = prompt("Enter Width");
var Height = prompt("Enter Height");
function area(sideA, sideB){
    var z = sideA*sideB;
    return z;
  }
  
var a = area(width, Height);
document.write(a);
*/

//     Q 10.
/*
var string = prompt("Enter String palindrome or not");
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   var g = palindrome(string);
   document.write("This is " +g+ " palindrom");
   */

   //     Q 11.
/*

  var string = prompt("Enter String palindrome or not");
  function upper(str) {
    return str.replace(/(^| )./g, x => x.toUpperCase())
  }
  var g = upper(string);
  document.write(g);
*/

//     Q 12
/*
var string = prompt("Enter String ");
function longestword(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
var g = longestword(string);
document.write("The Longest Word is "+g);
*/

//     Q 13.
/*
var string = prompt("Enter String");
var letter = prompt("Enter letter");
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

var g = char_count(string,letter);

document.write(letter+ " found "+ g + " times");
*/

//     Q 14.
/*
var num = prompt("Enter any one Number for Circumference");
var pi = 3.1416;
function calcCircumference(a){
    var circumference = 2*pi*a;
    return circumference;
 }
var f = calcCircumference(num);
document.write("The Circumference is "+f+"<br>");


var num = prompt("Enter any one Number for Area");
var pi = 3.1416;
function calcCircumference(a){
    var r = a*a;
    var area = pi*r;
    return area;
 }
var f = calcCircumference(num);
document.write("The Area is "+f);
*/


//                  The End

//               Chapter 38 - 42
//          Q1
/*
var x = prompt("Enter any one Number");
var y = prompt("Enter Power of a Number");
document.write(x + " raised to the power of " + y + " is = " + Math.pow(x, y));
*/

//          Q2

/*
var p = prompt("Enter Year")
function leapyear(year)
{
 if (year % 100 === 0 || year % 400 === 0 || year % 4 === 0){
    document.write("Leap Year")
 }else{
    document.write("Not Leap Year")
 }
}
leapyear(p)
*/

//         Q3

/*
var a = prompt("1st side");
var b = prompt("2nd side");
var c = prompt("3rd side");
var s,k,x,y,z,area;

function valueofS()
{
    k = (a+b+c);
    s = k/2;
    x = s-a;
    y = s-b;
    z = s-c;
    area();
}
function area()
{
    area = s*x*y*z;
}
valueofS();

document.write(area);
*/

//        Q4
/*
var a = prompt("1st subject");
var b = prompt("2nd subject");
var c = prompt("3rd subject");
var total = 300;
var result,avg,per;
function main(){
    document.write("Total Marks 300 <br>");
    result = a+b+c;
    Average(result);
    percentage(result);
}
function Average(result){
    avg = result/3;
    document.write("Average : " + avg + "<br>");
}
function percentage(result){
    per = (result/total)*100;
    document.write("Percentage : " + per + "<br>");
}
main();
*/

//      Q5
/*
var string = "Pakistani";
var index_num = string.indexOf('n');
document.write("String : "+string+"<br>");
document.write("Index of 'n' : "+index_num);
*/
//      Q6
/*
var string = "heelloo world";
var vowel = ["a", "e", "i", "o", "u"];

String.prototype.character = function name() {
    var i;
    for ( i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
            }

        }
    }
}

string.character();
document.write(string);
*/

//     Q7
/*
var string = "Pleases read this application and give me gratuity";
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
document.write(vowel_count(string));
*/
//     Q8
/*
var distance = prompt("Enter Distances in Km ");
var b
var c
var d 
var f 
function meter(){
    b = distance * 1000;
    feet();
}
function feet(){
    c = b * 3.28;
    inches();
}
function inches(){
    d = c * 12;
    centimeter();
}
function centimeter(){
    f = d * 30;
}
meter();
document.write("Distance in meter: "+ b +"<br>");
document.write("Distance in feet: "+ c +"<br>");
document.write("Distance in inches: "+ d +"<br>");
document.write("Distance in centimeters: "+ f +"<br>");
*/

//       Q9
/*
var hour = prompt("Enter over time in hours");

function overtime(){
    var time = hour*12;
    document.write("Employee over time rate is :"+ time+" Rs/-  per hour")
}
overtime();*/

//       Q10
/*
var notes = prompt("Enter Amount you withdraw less than 1000");
var b
var c
var d 
var f 
var g 
var h
function withdraw() {
    b = Math.floor(notes/100);
    c = Math.floor(notes/50);
    d = Math.floor(notes/10);

    f = c-b*2;
    g = d-b*10;
    h = notes % 100 % 50 / 10;

    document.write("100 rupee note are :"+ b +"<br>");
    document.write("50 rupee note are :"+ f +"<br>");
    document.write("10 rupee note are :"+ h +"<br>");
}
withdraw();
*/


//               Chapter 38 - 42

//             Q1
/*

function alert1(){
    alert('Hi');
}
*/

//            Q2
/*
function alert1(){
    alert('Thanks for purchasing phone from us');
}
*/
//            Q3
/*
function myFunction() {
    document.getElementById("myTable").deleteRow(0);
  }
  */
 //     Q4 SEE HTML
 //     Q5
//  var button = document.getElementById("clickme"),
//  count = 0;
// button.onclick = function() {
//  count += 1;
//  button.innerHTML = "Click me: " + count;
// };


//               Chapter 49 - 52

//        Q1

// function submitt(){
//     var mail = document.getElementById("email").value;
//     var password = document.getElementById("pass").value;

//     document.write("Email: " +mail+"<br>");
//     document.write("Password: " +password);
// }

//        Q2


// function readmore(){
//     var text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure unde eaque ducimus dolore fugit mollitia, a, id excepturi sunt accusantium magnam dicta, repudiandae labore. Unde laudantium obcaecati quod veniam temporibus!";

//     var peragraph = document.getElementById("pera");
//     peragraph.innerHTML = text

// }

//        Q3
// function myFunction() {
//     document.getElementById("myTable").deleteRow(1);
//   }
// function productUpdate() {
//     document.getElementById("myTable").updateRow(0);
//   }
//   function formClear() {
//     document.getElementById("myTable").clearRow(0);
//   }
//               Chapter 52 - 57

/*
function zoomin(){
    var myImg = document.getElementById("sky1");
    var currWidth = myImg.clientWidth;
    if(currWidth == 500){
        alert("Maximum zoom-in level reached.");
    } else{
        myImg.style.width = (currWidth + 10) + "px";
    } 
  }
  
  function zoomout(){
    var myImg = document.getElementById("sky2");
    var currWidth = myImg.clientWidth;
    if(currWidth == 50){
        alert("Maximum zoom-out level reached.");
    } else{
        myImg.style.width = (currWidth - 10) + "px";
    }
  }
function big(){
    var modal = document.getElementById('sky');
    modal.className += " hidden";
    
}
*/
//               Chapter 58 - 67

//     DOM


// var a = document.getElementById("main-content");
// console.log(a.childNodes);

// var b = document.getElementById("main-content")
// console.log(b.childNodes[1].nodeName)
// console.log(b.childNodes[3].nodeName)
// console.log(b.childNodes[5].nodeName)
// console.log(b.childNodes[7].nodeName)

// var c = document.getElementById("form-content")
// console.log(c.nodeType)

// var c = document.getElementById("lastName")
// console.log(c.nodeType)
// console.log(c.childNodes[0].nodeType)

// var c = document.getElementById("main-content")
// console.log(c.firstChild)
// console.log(c.lastChild)

// var c = document.getElementById("lastName")
// console.log(c.nextSibling)
// console.log(c.previousSibling)

// var c = document.getElementById("email")
// console.log(c.parentNode)
// console.log(c.parentNode.nodeType)



// The End