
// selecionandos as variáveis

const inputBill = document.querySelector("#bill");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const inputPeople = document.querySelector("#people");
const error = document.querySelector(".error");
const tipAmount = document.querySelector("#tip-amount");
const tipTotal = document.querySelector("#total-amount");
const btnReset = document.querySelector("#btn-reset")
let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;




// eventos 


//evento InputBill
inputBill.addEventListener('input', billFuncao);

//Evento tips
tips.forEach((event)=>{
    event.addEventListener('click', tipsFuncao);
    
})

//Evento InputPeople
inputPeople.addEventListener('input', peopleFuncao);


// Evento TipCustom
tipCustom.addEventListener('input', tipCustomFuncao)

// evento Reset

btnReset.addEventListener('click', resetFuncao)


// funções


function billFuncao (){
    billValue = parseFloat(inputBill.value)
    Calcular()
}


function tipsFuncao (event){

    tips.forEach((el)=>{
        el.classList.remove('active')
        if(event.target.innerHTML == el.innerHTML){
            el.classList.add('active')
            tipValue = parseFloat(el.innerHTML ) / 100;
            console.log(tipValue)
        }
        
    })
    Calcular()
}

function peopleFuncao(){
    peopleValue = parseFloat(inputPeople.value);

    Calcular()
    if(peopleValue < 1){
        error.style.display = 'flex'
        inputPeople.style.border = '1px solid red'
    }else{
        error.style.display = 'none'
        inputPeople.style.border = 'none'
    }
}

function tipCustomFuncao(){
    tipValue = parseFloat(tipCustom.value /100) 
    Calcular()
}


function Calcular (){
    if(peopleValue >= 1){
        let amountTip = parseFloat(billValue * tipValue) / peopleValue;
        let totalTip = parseFloat(billValue / peopleValue ) + amountTip ;
        tipAmount.innerHTML = "$"+`${amountTip.toFixed(2)}`
        tipTotal.innerHTML = "$"+`${totalTip.toFixed(2)}`
    }
}

function resetFuncao(){
    inputBill.value = '0'
    billFuncao()
    inputPeople.value = '1'
    peopleFuncao();
    tipCustom.value = ''
  
}

