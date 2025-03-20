// getMagnitudeColor.js

function getMagnitudeColor(magnitude)
{
    if (magnitude >= 6)
    {
        return "rgb(100, 0, 0)";
    }
    else if (magnitude >= 5)
    {
        return "rgb(0, 0, 100)";
    }
    else
    {
        return "rgb(50, 50, 50)";
    }
}