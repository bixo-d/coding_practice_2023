const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
    let cid = document.querySelector("#cid").value;

    if (cid == "") {
        alert("Please fill out the input fields!");
        return;
    }

    let RIF = cid + 100000000;

    let factors = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    let testarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var step_two = 0;
    
    for (var i = 0; i < factors.length; i++) {
        step_two += (factors[i] * testarr[i]);
    }
  
    step_three = step_two % 11;
  
    codigo = 11 - step_three;

    console.log(codigo);
    //alert(step_two);

    document.querySelector("#result").innerHTML = RIF;
});
