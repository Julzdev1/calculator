const opr = prompt("operator +, -, *, / ")
const num1 = parseInt(prompt( "enter a number: "));
const num2 = parseInt(prompt("enter another number: "));

let result;

if (opr == "+")
{
    result=(num1 + num2)
}else if(opr == "-"){
    result=(num1 -num2);
}else if(opr == "*"){
    result=(num1 * num2);
}
else if (opr == "/"){
    result=(num1 / num2);
}
{
    alert(num1 + opr + num2 +'=' + result);
}