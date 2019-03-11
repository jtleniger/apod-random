const TODAY = new Date(Date.now());
const START = new Date(1995, 5, 16);
const BASE_URL = 'https://apod.nasa.gov/apod/';

function randomDate(startDate, endDate) {
    const startTime = startDate.getTime();
    const delta = endDate.getTime() - startTime;

    return new Date(startTime + (Math.random() * delta));
}

function getPageUrl(date) {
    const year = date.getFullYear().toString().substr(-2);

    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : '' + month;

    let day = date.getDate();
    day = day < 10 ? '0' + day : '' + day;

    return `${BASE_URL}ap${year}${month}${day}.html`
}

const url = getPageUrl(randomDate(START, TODAY));

window.location = url;