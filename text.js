function updateDateTime() 
{
    let currentDate = new Date();

  
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; 
    let day = currentDate.getDate();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    let formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    let formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    document.getElementById('date-time').textContent = ` ${formattedDate} | ${formattedTime}`;
}

setInterval(updateDateTime, 1000);


updateDateTime();

