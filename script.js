const display = document.querySelector("#display");

function CalcWork(){
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        switch (button.innerText){
            case "AC": 
                button.addEventListener('click', DisplayClear);
                break;
            case "+/-":
                button.addEventListener('click', PlusMinus);
                break;
            case "%":
                button.addEventListener('click', Percent)
                break;
            case "=":
                button.addEventListener('click', DisplaySolve);
                break;
            default:
                button.addEventListener('click', DisplayWrite);
                break;
        }
    });
}

function DisplayClear() {
    display.innerText = "0"
}

function DisplayWrite(event){
    if (display.innerText == "0"){
        display.innerText = event.target.innerText;
    }
    else{
        display.innerText += event.target.innerText;
    }
    
}

function DisplaySolve(){
    const example = display.innerText;
    let res = 0;

    if (example.includes('%')){
        let n1 = example.split('%');
        
        res = n1[1] / n1[0] * 100;
        res += '%';
    }
    else{
        res = eval(example.replaceAll('×', '*').replaceAll('÷', '/').replaceAll('−', '-'));
    }

    display.innerText = res;
}

function PlusMinus(){
    const example = display.innerText;

    const res = eval(example.replaceAll('×', '*').replaceAll('÷', '/').replaceAll('−', '-')) * -1;

    display.innerText = res;
}

function Percent(){
    const example = display.innerText;

    const res = eval(example.replaceAll('×', '*').replaceAll('÷', '/').replaceAll('−', '-'));

    display.innerText = res+'%';
}


CalcWork();