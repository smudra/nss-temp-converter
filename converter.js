
// to clear temp input field
function clearTemp() {
    document.getElementById("input-temp").value = "";
}


// use function to convert temperature
 var input = document.getElementById("converter");           
 input.addEventListener("click", determineConverter);


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
            convertedTemp = toFarenheit(Number(tempInput));

            tempColorC = convertedTemp;

            if (tempColorC < 32) {
                outputTemp.style.color = "blue";

            } else if (tempColorC >= 32 && tempColorC <= 90) {
                outputTemp.style.color = "green";

            } else if (tempColorC > 90) {
                outputTemp.style.color = "red";
            };

            convertedTemp = convertedTemp.toFixed(2) + " degree Fahrenheit";
            outputTemp.innerHTML = convertedTemp;

            //console.log("what is outputTemp.innerHTML showing?", outputTemp);

        } // converting to Fahrenheit
        else if (farenheit.checked) {
            
            convertedTemp = toCelsius(Number(tempInput));
            tempColorF = convertedTemp;

            if (tempColorF < 0) {
                outputTemp.style.color = "blue";

            } else if (tempColorF >= 0 && tempColorF <= 32) {
                outputTemp.style.color = "green";

            } else if (tempColorF > 32) {
                outputTemp.style.color = "red";
            };

            

            tempColorF = convertedTemp.toFixed(2) + " degree Celsius";
            
            outputTemp.innerHTML = tempColorF;
        };
        //document.getElementById("converted-temp").innerHTML = convertedTemp + " degrees Fahren";
   };
   




// Working code 
// if (celcius.checked) {
//     // console.log("Checking C: ", tempInput);
//     convertedTemp = toFarenheit(Number(tempInput));
    
//     console.log("Checking converted F: ", convertedTemp);
    
// console.log("TempColorC", tempColorC);
//     if (tempColorC < 0) {
//         outputTemp.style.color = "blue";

//     } else if (tempColorC >= 0 && tempColorC <= 32) {
//         outputTemp.style.color = "green";

//     } else if (tempColorC > 33) {
//         outputTemp.style.color = "red";
//     };

//     tempColorC = convertedTemp.toFixed(2) + " degree Fahrenheit";
//     outputTemp.innerHTML = tempColorC;

//     console.log("what is outputTemp.innerHTML showing?", outputTemp);

// } // converting to Fahrenheit
// else if (farenheit.checked) {
//     console.log("Checking C: ", tempInput);
//     convertedTemp = toCelsius(Number(tempInput));
    
//     console.log("Checking converted C: ", convertedTemp);

//     if (tempColorF < 32) {
//         outputTemp.style.color = "blue";

//     } else if (tempColorF > 31 && tempColorF < 91) {
//         outputTemp.style.color = "green";

//     } else if (tempColorF > 90) {
//         outputTemp.style.color = "red";
//     };

//     console.log("what is outputTemp.innerHTML showing?", outputTemp);

//     tempColorF = convertedTemp.toFixed(2) + " degree Celsius";
    
//     outputTemp.innerHTML = tempColorF;
// };