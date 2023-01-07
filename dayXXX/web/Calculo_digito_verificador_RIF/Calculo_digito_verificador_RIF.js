const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
    let cid = document.querySelector("#cid").value;

    if (cid == "") {
        alert("Please fill out the input fields!");
        return;
    }

    let RIF = cid + 100000000;

    document.querySelector("#result").innerHTML = RIF;
});
