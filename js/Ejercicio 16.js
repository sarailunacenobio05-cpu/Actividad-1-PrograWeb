
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (tipo) => {
    const input1 = document.getElementById("numero1").value;
    const input2 = document.getElementById("numero2").value;

    if (input1.trim() === "" || input2.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, ingresa un número en ambos campos.'
        });
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);


    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Por favor, asegúrate de ingresar únicamente números válidos.'
        });
        return;
    }

    let resultado;

    switch (tipo) {
        case 'suma':
            resultado = sumar(num1, num2);
            break;
        case 'restar':
            resultado = restar(num1, num2);
            break;
        case 'multiplicar':
            resultado = multiplicar(num1, num2);
            break;
        case 'dividir':
            resultado = dividir(num1, num2);
            
            if (typeof resultado === 'string') {
                Swal.fire({
                    icon: 'error',
                    title: 'Operación no permitida',
                    text: resultado
                });
                document.getElementById("resultado").value = "";
                return;
            }
            break;
        default:
            return;
    }

    document.getElementById("resultado").value = resultado;
};