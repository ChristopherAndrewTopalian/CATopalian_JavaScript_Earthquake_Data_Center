// makeTitleOfApp.js

function makeTitleOfApp()
{
    let mainDiv = ce('div');
    mainDiv.style.position = 'absolute';
    mainDiv.style.top = '2px';
    mainDiv.style.left = '50%';
    mainDiv.style.transform = 'translateX(-50%)'; // center horizontally
    ba(mainDiv);

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
    mainDiv.append(titleOfApplication);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

