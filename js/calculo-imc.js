var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var pesoPaciente = paciente.querySelector(".info-peso");
    var peso = pesoPaciente.textContent;

    var alturaPaciente = paciente.querySelector(".info-altura");
    var altura = alturaPaciente.textContent;

    var imcPaciente = paciente.querySelector(".info-imc");

    var alturaValida = true;
    var pesoValido = true;

    if(peso <= 0 || peso >= 1000){
        pesoValido = false;
        imcPaciente.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido")
    }

    if(altura <= 0 || altura >= 3.00){
        alturaValida = false;
        imcPaciente.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
    }

    if(pesoValido && alturaValida){
        var imc = calculaImc(peso,altura)
        imcPaciente.textContent = imc;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}





