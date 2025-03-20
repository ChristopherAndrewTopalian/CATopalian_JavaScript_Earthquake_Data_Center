// makeInterface.js

function makeInterface()
{
    let mainContainer = ce('div');
    mainContainer.id = 'mainContainer';
    mainContainer.style.position = 'absolute';
    mainContainer.style.left = '20px';
    mainContainer.style.top = '25px';
    ba(mainContainer);

    //-//

    let earthquakeTextbox = ce('textarea');
    earthquakeTextbox.id = 'earthquakeTextbox';
    earthquakeTextbox.placeholder = 'Earthquake Data';
    earthquakeTextbox.style.width = 800 + 'px';
    earthquakeTextbox.style.height = 150 + 'px';
    mainContainer.append(earthquakeTextbox);

    //-//

    mainContainer.append(ce('br'));

    //-//

    let earthquakesAllButton = ce('button');
    earthquakesAllButton.className = 'buttonStyle001';
    earthquakesAllButton.textContent = 'Earthquakes (All)';
    earthquakesAllButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    earthquakesAllButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        fetchAllEarthquakeData();
    }
    mainContainer.append(earthquakesAllButton);

    //-//

    mainContainer.append(ce('hr'));

    //-//

    let parse001Button = ce('button');
    parse001Button.className = 'buttonStyle001';
    parse001Button.textContent = 'Parse 001';
    parse001Button.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    parse001Button.onclick = function()
    {
        let data = ge('earthquakeTextbox').value;

        audioPlay('sfx_blip_001', 1.0);

        processEarthquakeData();
    }
    mainContainer.append(parse001Button);

    //-//

    mainContainer.append(ce('hr'));

    //-//

    let earthquakeContainer = ce('div');
    earthquakeContainer.id = 'earthquakeContainer';
    earthquakeContainer.style.display = 'flex';
    earthquakeContainer.style.flexDirection = 'column';
    mainContainer.append(earthquakeContainer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

