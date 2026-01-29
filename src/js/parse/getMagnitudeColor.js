// getMagnitudeColor.js

// getMagnitudeColor.js

function getMagnitudeColor(magnitude)
{
    // parse to float just in case data comes in as a string
    let mag = parseFloat(magnitude);

    // extremely catastrophic 9.0+
    if (mag >= 9.0)
    {
        return "rgb(255, 0, 0)"; // Purple
    }

    // CATASTROPHIC (7.0+)
    else if (mag >= 7.0)
    {
        return "rgb(255, 255, 0)"; // Purple
    }

    // MAJOR (6.0 - 6.9)
    else if (mag >= 6.0)
    {
        return "rgb(220, 20, 60)";
    }

    // STRONG (5.0 - 5.9)
    else if (mag >= 5.0)
    {
        return "rgb(255, 204, 0)";
    }

    // MODERATE (4.0 - 4.9)
    else if (mag >= 4.0)
    {
        return "rgb(109, 205, 31)"; // Gold
    }

    // LIGHT (3.0 - 3.9)
    else if (mag >= 3.0)
    {
        return "rgb(48, 202, 249)";
    }

    // MINOR (2.0 - 2.9)
    else if (mag >= 2.0)
    {
        return "rgb(0, 149, 198)";
    }

    // MICRO (< 2.0)
    else
    {
        return "rgb(17, 0, 255)";
    }
}

function getMagnitudeColor2(magnitude)
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