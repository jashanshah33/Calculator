let button = document.querySelectorAll(".button");
let display = document.getElementById("display");
let resetButtom = document.getElementById("reset-buttom");
let plusAndMinus = document.getElementById("plusAndMinus");
// let zero = document.getElementById("zero")

let = operant1 = 0;
let = operant2 = null;
let = operator = null;


for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click", function () {
        let value = this.getAttribute("data-value")

        if(value == "+"){
            operator = "+";
            operant1 = parseFloat(display.textContent);
            display.innerText = "";

          } else if(value == "-"){
            operator = "-";
            operant1 = parseFloat(display.textContent);
            display.innerText = "";
            
        }   else if(value == "/"){
            operator = "/";
            operant1 = parseFloat(display.textContent);
            display.innerText = "";
            
        }    else if(value == "*"){
            operator = "*";
            operant1 = parseFloat(display.textContent);
            display.innerText = "";
            
        }   else if(value == "%"){
            operator = "%";
            operant1 = parseFloat(display.textContent);
            display.innerText = operant1/100;
            
        }   else if( value == "="){
            operant2 = parseFloat(display.textContent);

            let result = eval(operant1 + operator + operant2);
            display.textContent = result;

             if (result == Infinity) {
                display.innerText = "ERROR";
            } 
            
          }  else {
            display.innerText += value;
        }


    })
    
}

resetButtom.addEventListener("click", function(){
   display.innerText = "";


})

plusAndMinus.addEventListener("click", function () {
    let minus = "-";
    display.innerHTML = minus;
})








