//the difference b/w----> var let & const.-----------------------------------


//var--->es5 old js me tha.
//let-->es6 new js me hai.
//const-->es6 new js me hai.
//var-->function scoped hota hai==> var apne parent function me kahi bhi use ho sskta hai.
//let & const -->block OR braces scope hota hai.
//var adds itself to the window object.
//let & const doesn't adds itself them window object.
//Window Object-->js main kai saare features hai par kuchh features jo hum use karte hai vo features vo nahi hai par fir bhi USE kar paate hai kyoki wo features js language USE kar leti hai window se, window ek box of features hai given by browser to use with js.

// function abcd() {
    //     for (var i = 1; i < 12; i++) {
        //         console.log(i);
        //     }
        //     console.log(i);
        // }
        
        // abcd();
        
        // function defg(){
            //     for(let  i=1;i<12;i++){
                //         console.log(i);
                //     }
                //     console.log(i);     //got error as__not defined bcoz let is braces scoped only.
                // }
                
                // defg();
                
                // var a=12;       //adds to the window object
                //  let  b=12;     //doesn't adds to the window obbject 
                
                //How to copy reference value---------------------------------
                //We can copy value of an Array using SPREAD(...) operator.
                // var a=[1,2,3,4,5];
                // var b=[...a];       //Here we copied the value of array a in b 
                // b.pop();
                
                //How to copy Object using reference value--------------------------
                // var obj = {
            //     name: 'Adarsh',
            //     age: 23
                    // };

// var copyobj = { ...obj };

// copyobj.name = 'adarshdixit';


//Falsy and Truthy values--------------------------------------
//Falsy values are as follows- 0,False,Undefined,null,NaN,ducument.all.
//Excluding these above mention falsy values, all other values comes under TRUTHY values.

// if(0){
//     console.log("hye");
// }
// else{
//     console.log("hello");
// }

//forEach-------------------------------------------------------
//forEach-->sirf Array pe chalta hai
//jab bhi hamare pass sirf Array ho to hum use USE me la sakte hai....forEach loop ko

// var a=[1,2,34,76,34,89,45,76];
// a.forEach(function(val){
//     console.log(val+2);
// })

// let array=[12,14,12,14,12,14,12,14];
// array.forEach(function(value){
//     console.log(value/2);
// })

//callback function-----------------------------------------------

//Aisa code jo bad me chalta hai and oose hum ek function de dete hai, ke bhaiya jab complete hojaana to ye function chala dena,aur vo function jo hum dete hai vo ek normal function hi hota hai aur use hi khte hai callback function.

// setTimeout(function(){
//     console.log("15 second baaad print hona");
// },15000);

//First Class function-------------------------------------------

//JS me ek concept hai jiska mtlb hai ke ap function ko use kr sakte hai as a value.

// function abcd(a){
//         a();
// }
// abcd(function(){
//     console.log('hey');
// })

//How an Arrays are made Behidn The Scene------------------------

// var arr=[1,2,3,4];
//The above line is converted in the JS as below line.
// arr={
//     0:1,
//     1:2,
//     2:3,
//     3:4
// }

//In JS there is nothing like Array , Array get converted into Objects, and we can check the type as--"type of-arrayname".

// arr[-1]=222;        //222 gets added inside the array.

//How to delte Objects Property ----------------------------------

var objectOne={
    name:"Adarsh",
    age:23,
}
delete objectOne.age;           //Age property gets deleted in the object only name reomains inside it.
delete objectOne.name;






