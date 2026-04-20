let first_number
let second_number
let step=0
let operator
let result=0

let first_num=[]
let sencond_num=[]

const display = document.getElementById('display')

function getnumber(num){
    console.log(num)
    if(step===0){
        first_num.push(num)
        step=0
        first_number=Number(first_num.join(''))
        display.value+=num
    }
    else if(step===1){
        sencond_num.push(num)
        second_number=Number(sencond_num.join(''))
        display.value+=num
    }
}

function getoperator(op){
    console.log(op)
    step=1
    operator=op
    display.value+=op
}

function calculate(){
    console.log("Calculating...")
    if(operator==='+'){
        result=first_number+second_number
    } else if(operator==='-'){
        result=first_number-second_number
    }else if(operator==='*'){   
        result=first_number*second_number
    }else if(operator==='/'){
        if(second_number===0){
            alert("Cannot divide by zero!")
            clearDisplay()
            return
        }
        result=first_number/second_number
    }
    display.value=result
    first_number=result
    second_number=null
    step=0
    operator=null
    first_num=[result]
    sencond_num=[]
}

function clearDisplay(){
    console.log("Clearing display...")
    display.value=''
    first_number=null
    second_number=null
    step=0
    operator=null
    result=0
    first_num=[]
    sencond_num=[]
}