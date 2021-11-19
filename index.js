import axios from 'axios';

(async () => {
  setInterval(check, 300000);
})();

function check() {
  let test = axios.get('https://ganouodepor.herokuapp.com/');
}
