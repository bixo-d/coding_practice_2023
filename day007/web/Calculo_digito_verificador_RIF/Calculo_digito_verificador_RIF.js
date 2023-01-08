const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
    let cid = document.querySelector("#cid").value;
    let _100MM = 100000000;

    const tipo = {
        1: "V",
        2: "E",
        3: "J",
        4: "P",
        5: "G",
        6: "C"
    }

    if (cid == "") {
        alert("Please fill out the input fields!");
        return;
    }

    // Le sumamos a la cédula el valor del código por cien millones 
    // para obtener el número de 9 cifras requerido para hacer el cálculo.
    let primerDigito = 1;
    if (parseInt(cid) >= 70000000) {
        primerDigito = 2;
    }
    
    let RIF = parseInt(cid) + (_100MM * primerDigito);
    console.log(RIF.toString().split(''));

    let factors = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    console.log(factors);
    let testarr = RIF.toString().split('');
    console.log(testarr);

    var step_two = 0;

    // A cada número en testArr se le multiplica por el factor en factors 
    // y se hace la suma en step_two
    for (var i = 0; i < factors.length; i++) {
        step_two += (factors[i] * parseInt(testarr[i]));
    }

    step_three = step_two % 11;

    codigo = 11 - step_three;

    if (codigo >= 10) {
        codigo = 0;
    }

    console.log(codigo);
    //alert(step_two);

    document.querySelector("#result").innerHTML = tipo[primerDigito] + "-" + cid + "-" + codigo;
});
