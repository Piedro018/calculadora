const visor = document.querySelector('input')

let valor1 = 0
let valor2 = 0
let op = 0
let apagarValor = false

document.addEventListener('click', e => {

    let alvo = e.target

    if(alvo.nodeName == 'BUTTON'){

        if(alvo.classList.contains('operacao')){

            valor1 = Number(visor.value)
            apagarValor = true
            
            if(alvo.textContent == '+'){
                op = 1
            }else if(alvo.textContent == '-'){
                op = 2
            }else if(alvo.textContent == 'X'){
                op = 3
            }else if(alvo.textContent == '/'){
                op = 4
            }
            
        }else  if (alvo.classList.contains('igual')){
            igual()
        }else  if (alvo.classList.contains('limpar')){
            limparVisor()
        }else{
            adicionarVisor(alvo.textContent)
        }
   
    }

})

let adicionarVisor = numero => {

    if(apagarValor){
        visor.value = ''
        apagarValor = false

    }

    if(numero == '0' && visor.value == '0'){
        
        
        visor.value = 0
    }else if(visor.value =='0'){
        visor.value = numero
    }else{
        visor.value += numero   
    }
}

let limparVisor = () => {
    
    valor1 = 0
    valor2 = 0
    op = 0

    visor.value = ''
}

let igual = () => {

    let resultado = 0
    valor2 = Number(visor.value)
    

    switch (op) {
        case 1:// Adição
            resultado = valor1 + valor2
            break;
        case 2:// Subtração
            resultado = valor1 - valor2
            break;
        case 3: // Multiplicação
            resultado = valor1 * valor2
            break;
        case 4:// Divisão
            resultado = valor1 / valor2
            break;
    }

    visor.value = resultado

}