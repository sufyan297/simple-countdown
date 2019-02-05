$(document).ready(function() {
  const now = getTimeUntil('2019-04-27 08:00:00');
  countdown();
  setInterval(() => {
    countdown();
  },1000);
});

function countdown() {
  const now = getTimeUntil('2019-02-12 08:00:00');
  $('#days').html(now.days);
  $('#hours').html(now.hours);
  $('#minutes').html(now.minutes);
  $('#seconds').html(now.seconds);
}

function getTimeUntil(deadline, showDays = true) {

  const time = Date.parse(deadline) - Date.parse(new Date()) ;
  if(time <= 0){
    return;
  }
  let hours = 0;
  let days = 0;
  let seconds = Math.floor((time/1000) % 60);
  let minutes = Math.floor((time/1000/60) % 60);
  if(showDays == true){
    hours = Math.floor((time/(1000*60*60)) % 24);
    days = Math.floor((time/(1000*60*60*24)));
  } else {
    hours = Math.floor((time/(1000*60*60)));
  }

  if (days < 10) {
    days = '0'+days;
  }
  if (hours < 10) {
    hours = '0'+hours;
  }
  if (minutes < 10) {
    minutes = '0'+minutes;
  }
  if (seconds < 10) {
    seconds = '0'+seconds;
  }

  return {
    days,
    hours,
    minutes,
    seconds
  };
}
