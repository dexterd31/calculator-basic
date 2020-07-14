//tomamos los numbers
let box = document.getElementById('button')
let pantalla = document.getElementById('pantalla')
pantalla.textContent = '0'
const numero2= '-2'
//colocamos un valor por defecto a la pantalla
pantalla.textContent= '0'

box.addEventListener('click', e => {
    const elemento= e.target
    const data = elemento.dataset
    //imprimir el primer valor
    if(data.number) printScreen(data.number)
    //tomar el segundo valor con la operacion
    if(data.math) getOperation(elemento, data.math)
    //sacar el segundo valor y obtener un resultado
    if(data.option) getResult(data.option)
})

const printScreen = numero =>{
    if(pantalla.textContent === '0'){
        pantalla.textContent = numero
    }else{
        pantalla.textContent += numero
    }

}
const getOperation = (element,operation) => {
    numero1 = pantalla.textContent
    operator = operation
    pantalla.textContent = element.textContent
    return {
        numero1,
        operator
    }
}
const getResult = operation => {
    if(operation ==='limpia'){
        pantalla.textContent= '0'
    }else{
        calculaResultado(numero1,operator)
    }
}

const calculaResultado = (numero, operador)=>{
    //pasamos el valor a array y lo separamos por comillas cada caracter
    const pantalla2= pantalla.textContent.split('')
    // eliminamos el primer valor en el index 0
    pantalla2.shift()
    //pasamos de array a string dandonde espaciado para que se unan los valores
    const numero2= pantalla2.join('')
    
    switch(operador){
        case 'sum':
            pantalla.textContent = Number(numero1) + Number(numero2)
            setTimeout(()=>{
                pantalla.textContent= '0'
            },1000)
            break;
        case 'res':
            pantalla.textContent = Number(numero1) - Number(numero2)
            setTimeout(()=>{
                pantalla.textContent= '0'
            },1000)
            break;
        case 'multi':
            pantalla.textContent = Number(numero1) * Number(numero2)
            setTimeout(()=>{
                pantalla.textContent= '0'
            },1000)
            break;
        case 'divi':
            pantalla.textContent = Number(numero1) / Number(numero2)
            setTimeout(()=>{
                pantalla.textContent= '0'
            },1000)
            break;    
    }
}