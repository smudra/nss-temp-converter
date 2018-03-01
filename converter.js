
// to clear temp input field
function clearTemp() {
    document.getElementById("input-temp").value = "";
}


// use function to convert temperature
 var input = document.getElementById("converter");           input.addEventListener("click", determineConverter);


 // Radio buttons
 var celcius = document.getElementById("celcius");
 var farenheit = document.getElementById("farenheit");


 // output Converted Temperature
 var outputTemp = document.getElementById("converted-temp");
 var convertedTemp = 0;
 let tempColorC = 0;
 let tempColorF = 0;


    // convert to celcius
    function toCelsius(C) {
        C = parseFloat(C);
        return ((C - 32) / 1.8);
        //document.getElementById("converted-temp").innerHTML = ((C - 32) / 1.8);
    };

    // convert to farenheit
    function toFarenheit(F) {
        F = parseFloat(F);
        return ((F * 1.8) + 32);
        //document.getElementById("converted-temp").innerHTML = ((F * 1.8) + 32);
    };


    function determineConverter (clickEvent) {
        var tempInput = document.getElementById("input-temp").value;
        

        if (celcius.checked) {
            // console.log("Checking C: ", tempInput);
            convertedTemp = toCelsius(Number(tempInput));
            // console.log("Checking converted F: ", convertedTemp);
            

            if (tempColorC < 0) {
                outputTemp.style.color = "blue";

            } else if (tempColorC >= 0 && tempColorC <= 32) {
                outputTemp.style.color = "green";

            } else if (tempColorC > 33) {
                outputTemp.style.color = "red";
            };
            tempColorC = convertedTemp.toFixed(2) + " degree Celsius";

            outputTemp.innerHTML = tempColorC;

            console.log("what is outputTemp.innerHTML showing?", outputTemp);

        } // converting to Fahrenheit
        else if (farenheit.checked) {
            console.log("Checking F: ", tempInput);
            convertedTemp = toFarenheit(Number(tempInput));
            console.log("Checking converted F: ", convertedTemp);

            // tempColorF = convertedTemp.toFixed(2) + " degree Fahrenheit";
            
            // outputTemp.innerHTML = tempColorF;

            if (tempColorF < 32) {
                outputTemp.style.color = "blue";

            } else if (tempColorF >= 32 && tempColorF <= 90) {
                outputTemp.style.color = "green";

            } else if (tempColorF > 90) {
                outputTemp.style.color = "red";
            };

            console.log("what is outputTemp.innerHTML showing?", outputTemp);

            tempColorF = convertedTemp.toFixed(2) + " degree Fahrenheit";
            
            outputTemp.innerHTML = tempColorF;
        };
        //document.getElementById("converted-temp").innerHTML = convertedTemp + " degrees Fahren";
   };
   console.log("convert to F", convertedTemp);

//console.log(determineConverter("outputTemp", outputTemp));
   // To Create colors for temperature
//    if (outputTemp )

//    if (outputTemp.innerHTML >= 32 && outputTemp.innerHTML <= 90) {
//         outputTemp.style.color = "red";
//    }