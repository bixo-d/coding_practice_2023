const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
    let cid = document.querySelector("#cid").value;

    if (cid == "") {
        alert("Please fill out the input fields!");
        return;
    }
    console.log(typeof (parseInt(cid)));
    let RIF = parseInt(cid) + 100000000;
    console.log(RIF.toString().split(''));

    let factors = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    console.log(factors);
    let testarr = RIF.toString().split('');
    console.log(testarr);

    var step_two = 0;

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

    document.querySelector("#result").innerHTML = cid + "-" + codigo;
});
