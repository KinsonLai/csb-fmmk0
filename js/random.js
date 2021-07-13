function GenerateRandomNumber() {
    let input1 = parseInt(document.getElementById("input-1").value);
    let input2 = parseInt(document.getElementById("input-2").value);
    let random = (Math.floor(Math.random() * (input2 - input1 + 1)) + input1);
    document.getElementById("output-num").innerHTML = random;
}