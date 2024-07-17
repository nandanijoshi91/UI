function updateDateTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    let formattedDate = "July 24 2024";
    let formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}${ampm}`;
    
    document.getElementById('date-time').textContent = `${formattedDate} | ${formattedTime}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();
