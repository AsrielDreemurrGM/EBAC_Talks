AOS.init();

const eventDate = new Date("Nov 12, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const countDate = setInterval(function() {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - nowTimeStamp;

    const daysInMS = 1000 * 60 *60 * 24;
    const hoursInMS = 1000 * 60 * 60;
    const minutesinMS = 1000 * 60;

    const daysUntilEvent = Math.floor(timeUntilEvent / (daysInMS));
    const hoursUntilEvent = Math.floor((timeUntilEvent % (daysInMS)) / (hoursInMS));
    const minutesUntilEvent = Math.floor(timeUntilEvent % (hoursInMS) / (minutesinMS));
    const secondsUntilEvent = Math.floor((timeUntilEvent % minutesinMS) / 1000)

    document.getElementById('contador').innerHTML = `começa em ${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (timeUntilEvent < 0) {
        clearInterval(countDate);
        document.getElementById('contador').innerHTML = '<br>Evento expirado'
    }
}, 1000)