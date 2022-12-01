function calcular() {
    let alt = document.getElementById('altura');
    let peso = document.getElementById('peso');
    let res = document.getElementById('resp');

    if (alt.value.length == 0 && peso.value.length == 0){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let a = Number(alt.value)/100;
        let p = Number(peso.value);
        let imc = p/(a*a);
        if (imc < 18.5){
            res.innerHTML = `seu IMC é de ${imc.toFixed(1)}, você está abaixo do peso!`
        }else if (imc < 24.9){
            res.innerHTML = `seu IMC é de ${imc.toFixed(1)}, você está com o peso normal!`
        }else if (imc < 29.9){
            res.innerHTML = `seu IMC é de ${imc.toFixed(1)}, você está com excesso de peso!`
        }else if (imc < 34.9){
            res.innerHTML = `seu IMC é de ${imc.toFixed(1)}, você está com obesidade nivel 1`
        }else if (imc < 39.9){
            res.innerHTML = `seu IMC é de ${imc.toFixed(1)}, você está com obesidade nivel 2`
        }else if (imc >= 40){
            res.innerHTML = `seu IMC é de ${imc.toFixed(1)}, você está com obesidade nivel 3`
        }
    }
}