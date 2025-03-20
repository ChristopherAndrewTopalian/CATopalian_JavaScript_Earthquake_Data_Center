// audioPlay.js

function audioPlay(whichId, whichVolume)
{
    let audio = ge(whichId);

    if (audio)
    {
        audio.volume = whichVolume;
        audio.play();
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

