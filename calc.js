//------ Using DOM Creation code.

let body=document.getElementById('body');

let div=document.createElement('div');
    div.setAttribute('class','container')
let div1=document.createElement('div')
    div1.setAttribute('id','size')
let div2=document.createElement('div')
    div2.setAttribute('class','calculator')
let input=document.createElement('input')
    input.setAttribute('type','text')
    input.setAttribute('placeholder','0')
    input.setAttribute('id','display')

let btn1=document.createElement('button')
    btn1.setAttribute('class','btn')
    btn1.setAttribute('value','9')
    btn1.innerText=9;
let btn2=document.createElement('button')
    btn2.setAttribute('id','delete')
    btn2.innerText="DEL";
let btn3=document.createElement('button')
    btn3.setAttribute('id','clear')
    btn3.innerText="C";
let btn4=document.createElement('button')
    btn4.setAttribute('class','btn')
    btn4.setAttribute('value','/')
    btn4.innerText="/";
let btn5=document.createElement('button')
    btn5.setAttribute('class','btn')
    btn5.setAttribute('value','6')
    btn5.innerText=6;
let btn6=document.createElement('button')
    btn6.setAttribute('class','btn')
    btn6.setAttribute('value','7')
    btn6.innerText=7;

let btn7=document.createElement('button')
    btn7.setAttribute('class','btn')
    btn7.setAttribute('value','8')
    btn7.innerText=8;
let btn8=document.createElement('button')
    btn8.setAttribute('class','btn')
    btn8.setAttribute('value','*')
    btn8.innerText='*';
let btn9=document.createElement('button')
    btn9.setAttribute('class','btn')
    btn9.setAttribute('value','5')
    btn9.innerText=5;
let btn10=document.createElement('button')
    btn10.setAttribute('class','btn')
    btn10.setAttribute('value','4')
    btn10.innerText=4;
let btn11=document.createElement('button')
    btn11.setAttribute('class','btn')
    btn11.setAttribute('value','3')
    btn11.innerText=3;
let btn12=document.createElement('button')
    btn12.setAttribute('class','btn')
    btn12.setAttribute('value','-')
    btn12.innerText="-";

let btn13=document.createElement('button')
    btn13.setAttribute('class','btn')
    btn13.setAttribute('value','0')
    btn13.innerText=0;
let btn14=document.createElement('button')
    btn14.setAttribute('class','btn')
    btn14.setAttribute('value','1')
    btn14.innerText=1;
let btn15=document.createElement('button')
    btn15.setAttribute('class','btn')
    btn15.setAttribute('value','2')
    btn15.innerText=2; 
let btn16=document.createElement('button')
    btn16.setAttribute('class','btn')
    btn16.setAttribute('value','+')
    btn16.innerText='+';
let btn17=document.createElement('button')
    btn17.setAttribute('class','btn')
    btn17.setAttribute('value','.')
    btn17.innerText='.' 
let btn18=document.createElement('button')
    btn18.setAttribute('class','btn')
    btn18.setAttribute('value','00')
    btn18.innerText=00;
let btn19=document.createElement('button')
    btn19.setAttribute('id','equal')
    btn19.setAttribute('value','=')
    btn19.innerText='='                


body.append(div)
div.append(div1)
div1.append(div2)
div2.appendChild(input)
div2.append(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,
    btn10,btn11,btn12,btn13,btn14,btn15,btn16,btn17,btn18,
    btn19)


 // ------- JS Code -------   

const display=document.getElementById('display') 
// buttons Click...   
const btns=document.getElementsByClassName("btn")
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",()=>{
        display.value+=btns[i].value;
        console.log(display.value);
    })

}
// Equal button
const equal=document.getElementById('equal');
equal.addEventListener("click",()=>{
    if(display.value){
        display.value=eval(display.value)
    }else{
        display.value='0'
    }
    
})
// Clear button
const clear=document.getElementById('clear');
clear.addEventListener("click",()=>{
    display.value='';
})
// Delete button
let del=document.getElementById('delete');
del.addEventListener('click',deleted)
function deleted(){
   display.value= display.value.slice(0,-1)
}