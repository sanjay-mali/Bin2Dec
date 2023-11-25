const binary = document.getElementById('binary');
const decimal = document.getElementById('decimal');

function convert(){
    decimal.value = parseInt(binary.value, 2);
    for (let i = 0; i < binary.value.length; i++) {
        if (binary.value[i] != 0 && binary.value[i] != 1) {
            alert("Please enter a valid binary number (0s and 1s)");
            binary.value = "";
            decimal.value = "";
            break;
        }
    }
}
// convert(binary, decimal);