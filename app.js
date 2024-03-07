const salida = document.getElementById('salida');
const operandos = document.querySelectorAll('button[data-type="operand"]');
const operadores = document.querySelectorAll('button[data-type="operator"]');
const reset = document.querySelector('button[value="clear"]')

let ecuacion = salida.value;

function condicionesIniciales() {
    salida.value = 0;
    salida.style.color = "#545454";
    ecuacion = salida.value;
}

condicionesIniciales();

operandos.forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        if (salida.value === "0") {
            salida.value = btn.target.value;
        }
        else if (btn.target.value === "." && salida.value.includes(".")) {
            // No hagas nada si el valor ya contiene un punto
        } else {
            salida.value += btn.target.value;
            ecuacion = salida.value;
        }
        
        if (salida.value === "0") {
            salida.style.color = "#545454";
        } else {
            salida.style.color = "#ffffff";
        }
    })
})

operadores.forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        switch (btn.target.value) {
            case "invert":
                salida.value = parseFloat(salida.value) * -1;
                break;

            case "%":
                salida.value = parseFloat(salida.value / 100);
            
            case "/":
                salida.value += btn.target.value;
                break;

            case "*":
                salida.value += btn.target.value;
                break;

            case "-":
                salida.value += btn.target.value;
                break;

            case "+":
                salida.value += btn.target.value;
                break;

            case "=":
            salida.value = eval(ecuacion);
        }
    })
})

reset.addEventListener('click', condicionesIniciales);
