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
        processByMagnitude();
    }
    mainContainer.append(parse001Button);

    //-//

    mainContainer.append(ce('hr'));

    //-//

    let mainQuakeContainer = ce('div');
    mainQuakeContainer.style.display = 'flex';
    mainQuakeContainer.style.flexDirection = 'row'; // main containers side-by-side
    mainQuakeContainer.style.gap = '20px'; // space between the two lists
    mainContainer.append(mainQuakeContainer);

    // LEFT COLUMN (ALL)

    // create a Wrapper for the Left Side
    let leftWrapper = ce('div');
    leftWrapper.style.display = 'flex';
    leftWrapper.style.flexDirection = 'column'; // stack title on top of box
    mainQuakeContainer.append(leftWrapper);

    //-//

    // add Title to Wrapper
    let titleAllQuakes = ce('div');
    titleAllQuakes.textContent = 'By Date';
    titleAllQuakes.style.fontWeight = 'bold';
    titleAllQuakes.style.marginBottom = '5px';
    titleAllQuakes.style.textAlign = 'center';
    leftWrapper.append(titleAllQuakes);

    //-//

    // add Container to Wrapper
    let earthquakeContainer = ce('div');
    earthquakeContainer.style.width = '350px';
    earthquakeContainer.style.height = '200px';
    earthquakeContainer.style.overflowY = 'auto';
    earthquakeContainer.id = 'earthquakeContainer';
    earthquakeContainer.style.display = 'flex';
    earthquakeContainer.style.flexDirection = 'column';
    earthquakeContainer.style.border = '1px solid rgb(70, 70, 70)';
    leftWrapper.append(earthquakeContainer);

    //-//

    // RIGHT COLUMN (BY MAGNITUDE)

    // create a Wrapper for the Right Side
    let rightWrapper = ce('div');
    rightWrapper.style.display = 'flex';
    rightWrapper.style.flexDirection = 'column'; // stack title on top of box
    mainQuakeContainer.append(rightWrapper);

    //-//

    // add Title to Wrapper
    let titleMagnitudeQuakes = ce('div');
    titleMagnitudeQuakes.textContent = 'By Magnitude';
    titleMagnitudeQuakes.style.fontWeight = 'bold';
    titleMagnitudeQuakes.style.marginBottom = '5px';
    titleMagnitudeQuakes.style.textAlign = 'center';
    rightWrapper.append(titleMagnitudeQuakes);

    //-//

    // add Container to Wrapper
    let magnitudeContainer = ce('div');
    magnitudeContainer.style.width = '350px';
    magnitudeContainer.style.height = '200px';
    magnitudeContainer.style.overflowY = 'auto';
    magnitudeContainer.id = 'magnitudeContainer';
    magnitudeContainer.style.display = 'flex';
    magnitudeContainer.style.flexDirection = 'column';
    magnitudeContainer.style.border = '1px solid rgb(70, 70, 70)';
    rightWrapper.append(magnitudeContainer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

