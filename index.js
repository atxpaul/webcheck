import axios from 'axios';

const url = 'https://ganouodepor.herokuapp.com/';
//const url = 'http://localhost:8080/';
(async () => {
  setInterval(check, 300000);
})();

async function check() {
  let results = await axios.get(`${url}api/depor`);
  if (Object.entries(results.data[0]).length === 0) {
    let test = axios.get(`${url}api/depor/scrap`);
  }
  let test = axios.get(url);
}
