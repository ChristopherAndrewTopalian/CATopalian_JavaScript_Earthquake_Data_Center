// makeInterface.js

function makeInterface()
{
    let titleContainer = ce('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.top = '2px';
    //titleContainer.style.left = '50%';
    //titleContainer.style.transform = 'translateX(-50%)'; // center horizontally
    ba(titleContainer);

    //-//

    let titleOfApplication = ce("a");
    titleOfApplication.style.whiteSpace = 'nowrap';
    titleOfApplication.style.fontSize = '17px';
    titleOfApplication.style.color = 'rgb(100, 100, 100)';
    titleOfApplication.style.fontWeight = 'bold';
    titleOfApplication.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Earthquake_Data_Center';
    titleOfApplication.target = '_blank';
    titleOfApplication.textContent = ' CATopalian JavaScript Earthquake Data Center';
    titleOfApplication.style.textAlign = 'center';
    titleContainer.append(titleOfApplication);

    //-//

    let mainContainer = ce('div');
    mainContainer.id = 'mainContainer';
    mainContainer.style.position = 'absolute';
    mainContainer.style.left = '5px';
    mainContainer.style.top = '25px';
    ba(mainContainer);

    //-//

    let earthquakeTextbox = ce('textarea');
    earthquakeTextbox.id = 'earthquakeTextbox';
    earthquakeTextbox.placeholder = 'Earthquake Data';
    earthquakeTextbox.style.width = '100%';
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
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

