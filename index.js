function findMatching (drivers, theDriver) {
    const match = drivers.filter((ele) => ele.toLowerCase() === theDriver.toLowerCase(), theDriver);
    return match;
}


function fuzzyMatch (drivers, theLetter) {
    const match = drivers.filter((ele) => ele.substr(0,theLetter.length) === theLetter, theLetter);
    return match;
}

function matchName (drivers, theArg) {
    const match = drivers.filter((ele) => ele.name === theArg )
    return match
}