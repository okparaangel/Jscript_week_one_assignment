//                             ASSIGNMENTS    13-02-2024
// Mr Ade has 50000 in his bank acount, write a program
// wereby Mr Ade can not withdraw more than 50000, if he
// withdraws less than 50000, show balance.


// const AccountBalance = 50000; 
// const account = 50000;
// const password = 2020; 

// const input = prompt("enter Your Pin \n" + "DONT SHARE YOUR PIN WITH ANYONE!!!");

// if( input == password){
//     let balancechecker = prompt(" Enter the amount you want to withdraw")
//         if (balancechecker <= AccountBalance) {
//             alert("RECIEVING....");
//             alert("you just withdraw" + balancechecker + "\n" + "\n" + "New balance is " + ( AccountBalance - balancechecker) );
//             alert ("THANK YOU FOR BANKING WITH US");
//     } else{
//         alert("INSUFFICIENT BALANCE!!!");
//     }
// }else{
//     alert("INCORRECT PIN")
// }

//                                     //  ASSIGNMENT  14-02-2024
// // let Sunday = "holiday";
// switch (day) {

// case "monday":
//     console.log("ring 4:00am");

// case "tuesday":
//     console.log("ring 4:00am")

// case "wednesday":
//     console.log("ring 4:00am");

// case "thursday":
//     console.log("ring 4:00am");

// case "friday":
//     console.log("ring 4:00am");

// case "saturday":
//     console.log("ring 4:00am");

// default: 
//     console.log("invalid day of the week");
// }



                            // ASSIGNMENT     16-02-2024

// write a program that takes user input for a number and check if 
// its divisible by both 2 and 3, or just by one of them, if its divisible 
// by both, it should display "divisible by both 2 and 3." if its divisible
//  by only one of them, it should display "divisible by only either 2 or 3",
//  ortherwise, it should display "not divisible by 2 or 3".

let number = prompt("input your number" );

if (number % 2 ===0 && number % 3 ===0  ){
    console.log(number + " its divisible by both 2 and 3.");
 }
else if(number % 2===0 || number % 3 ===0 ){
     console.log(number + "  is divisible by either 2 or 3.");
 }
else {
    console.log(number + " its not divisible by 2 or 3");
 }
















