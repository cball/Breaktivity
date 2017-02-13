export default function(seconds) {
  minutes = parseInt(seconds / 60) % 60;
  seconds = (seconds % 60).toFixed(0);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10 && minutes >= 1) {
    seconds = "0" + seconds;
  }

  return `${minutes}:${seconds}`;
}
