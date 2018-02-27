
// to clear temp input field
function clearTemp() {
    document.getElementById("input-field").value = "";
}

const keyEnter = document.getElementById("input-field").addEventListener("keypress", function(event) {
    if (event.key == "enter") {
        document.getElementById("input-field").innerHTML = "";
    }
});