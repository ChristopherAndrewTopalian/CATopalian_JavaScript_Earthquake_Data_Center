// processByMagnitude.js

function processByMagnitude()
{
    let textData = ge('earthquakeTextbox').value;

    // target the NEW container
    let magContainer = ge("magnitudeContainer");

    // clear previous data (Use innerHTML for divs, not .value)
    magContainer.innerHTML = ""; 

    let lines = textData.split("\n");

    // this array will hold our "Clean" data temporarily
    let quakeList = [];

    // PARSE
    for (let i = 0; i < lines.length; i++)
    {
        if (lines[i].trim() === "") continue;

        let parts = lines[i].split(", ");
        
        // ensure line has all 3 parts
        if(parts.length < 3) continue; 

        let dateStr = parts[0].replace("Date: ", "");
        let magStr  = parts[1].replace("Magnitude: ", "");
        let locStr  = parts[2].replace("Location: ", "");

        // create a temporary object
        let quakeObject = {
            date: dateStr,
            magnitude: parseFloat(magStr), // convert to Number for sorting
            location: locStr
        };

        quakeList.push(quakeObject);
    }

    // SORT
    // we compare b to a to get Descending order
    quakeList.sort(function(a, b)
    {
        return b.magnitude - a.magnitude;
    });

    // RENDER
    // we loop through our SORTED list
    for (let i = 0; i < quakeList.length; i++)
    {
        let q = quakeList[i]; // short variable for convenience

        let quakeDiv = ce("div");
        quakeDiv.style.border = "solid 1px gray";
        quakeDiv.style.padding = "10px";
        quakeDiv.style.marginBottom = "5px";

        // use our color function
        quakeDiv.style.backgroundColor = getMagnitudeColor(q.magnitude);

        // use white text if the background is dark (which our new colors are)
        quakeDiv.style.color = "white"; 
        quakeDiv.style.fontFamily = "Arial, sans-serif";

        quakeDiv.innerHTML = 
            "<div style='font-size: 1.2em; font-weight: bold;'>" + q.magnitude.toFixed(1) + " - " + q.location + "</div>" + 
            "<div style='font-size: 0.9em; opacity: 0.8;'>" + q.date + "</div>";

        magContainer.append(quakeDiv);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

