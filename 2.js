//IIFA-------------------Immedaitely Invoked Function Expression

// var ans = (function(){
//     var privateval=12;

//     return{
//         getter:function(){
//             console.log(privateval);
//         },
//         setter:function(val){
//             privateval=val;     
//         }
//     }
// })()

//Prototype----------------------------------------------->>
// var obj={
//     name:"adarsh",
//     age:23,
//     height:5.5
// }


//Prototype Inheritance------------------------------------->>

// var human ={
//     canTalk:true,
//     canFly:false,
//     canWalk:true,
//     HaveEmotions:true
// }

// var sheryiansStudent={
//     canMakeAmazingWebsites:true,
//     canMakeawesomeAnimations:true,
//     CanMakeWorldClassAwwwardedWebsites:true
// }

// sheryiansStudent.__proto__=human;

// "this" - keyword------------------------------------------>>

// //In global scope
// console.log(this);

// //In function scope
//  function abcd(){
//     console.log(this);
//  }

//In Method scope

// var obj={
//     name:"adarsh",
//     kuchbolo:function(){
//         console.log(this);
//     }
// }
// obj.kuchbolo();

//In Event Listener------------------------------->>

// var button=document.querySelector('button');
// button.addEventListener("click",function(){
//     console.log(this);
// })

// var button=document.querySelector('button');
// button.addEventListener("click",function(){
//     this.style.color="red";
// })

// Call -------------------------------------------------------->>

// function abcd(){
//     console.log(this);
// }

//     // abcd();

// var obj={
//     name:'adarsh'
// }

// abcd.call()



// application 
// function abcd(){
//     console.log(this.name);
// }

//     // abcd();

// var obj={
//     name:'adarsh'
// }

// abcd.call(obj)


// // applicaton 2
// function abcd(val1,val2,val3){
//     console.log(this,val1,val2,val3);
// }
//   var obj={
//     name:'adarsh'
//   }

// abcd.call(obj,10,20,30);


// apply------------------------------------------------------->>

// function abcd(val1,val2,val3){
//     console.log(this,val1,val2,val3);
//     console.log(this.name,val1,val2,val3);
// }

// var obj={
//     age:23,
//     name:'adarsh'
// }

// abcd.apply(obj,[10,20,30]);

// bind --------------------------------------------------------->>

// function abcd(){
//     console.log(this);
// }

// var obj={
//     name:'adarsh'
// }

// var bindedfnc=abcd.bind(obj);
// bindedfnc();

// Pure and Impure Function------------------------------------------------>>

// Pure Function
function abcd(a,b){
    return a*b;
}
var ans1=abcd(1,2);
var ans2=abcd(1,2);

//  Impure function

var abcdef = 12;                    //global variable 

function abcd(a,b){
    abcdef =24;                     //global variable's value has been changed inside a function
    return a*b;
}
var ans1=abcd(1,2);
var ans2=abcd(1,2);


