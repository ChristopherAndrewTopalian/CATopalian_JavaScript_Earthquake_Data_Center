// processEarthquakeData.js

function processEarthquakeData()
{
    let textData = ge('earthquakeTextbox').value;

    let outputContainer = document.getElementById("earthquakeContainer");

    outputContainer.value = ""; // clear previous data

    let lines = textData.split("\n");

    for (let i = 0; i < lines.length; i++)
    {
        if (lines[i].trim() === "")
        {
            continue;
        }

        let parts = lines[i].split(", ");

        let date = parts[0].replace("Date: ", "");

        let magnitude = parts[1].replace("Magnitude: ", "");

        let location = parts[2].replace("Location: ", "");

        //-//

        let quakeDiv = ce("div");
        quakeDiv.style.border = "solid 1px gray";
        quakeDiv.style.padding = "10px";
        quakeDiv.style.marginBottom = "5px";
        quakeDiv.style.backgroundColor = getMagnitudeColor(parseFloat(magnitude));

        quakeDiv.innerHTML = "<strong>" + location + "</strong><br>" + 
        "Magnitude: " + magnitude + "<br>" + 
        "Date: " + date;

        outputContainer.append(quakeDiv);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

