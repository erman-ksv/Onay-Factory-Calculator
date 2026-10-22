import {calculate} from "./calculator.mjs"; // core arithmetic module (may be provided later)

const display=document.getElementById('display');
let expression='';

function updateDisplay(val){display.textContent=val||'0';}
function append(char){expression+=char;updateDisplay(expression);}
function clearAll(){expression='';updateDisplay('0');}
function backspace(){expression=expression.slice(0,-1);updateDisplay(expression);}
function evaluate(){
  try{const result=((value)=>{const match=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([+\-*\/])(-?(?:\d+(?:\.\d*)?|\.\d+))$/.exec(String(value).replace(/\s+/g,'').replaceAll('×','*').replaceAll('÷','/').replaceAll('−','-'));if(!match)throw Error('Enter two numbers and an operator');return calculate(Number(match[1]),match[2],Number(match[3]));})(expression);updateDisplay(result);expression=''+result;}
  catch(e){updateDisplay(e.message);expression='';}
}

document.querySelectorAll('.key').forEach(btn=>{
  const action=btn.dataset.action;
  const key=btn.dataset.key;
  btn.addEventListener('click',()=>{
    if(action==='clear')clearAll();
    else if(action==='backspace')backspace();
    else if(action==='equals')evaluate();
    else if(key)append(key);
  });
});

// expose for potential tests
export {append,clearAll,backspace,evaluate,updateDisplay};
