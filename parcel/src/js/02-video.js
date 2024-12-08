
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


const STORAGE_KEY = 'videoplayer-current-time';


const saveCurrentTime = throttle((event) => {
  const currentTime = event.seconds;
  localStorage.setItem(STORAGE_KEY, currentTime);
}, 1000);


player.on('timeupdate', saveCurrentTime);


const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime)).catch((error) => {
    console.error('Error at save time :', error);
  });
}