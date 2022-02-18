const btn = document.getElementById('get-joke');
let text = document.querySelector('.joke');

const url = 'https://icanhazdadjoke.com/';
const TIMEOUT_SEC = 5;

btn.addEventListener('click', function () {
  getJoke(url);
});

const getJoke = async function (url) {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await fetch(url, config);
    const data = await res.json();

    text.innerText = `"${data.joke}"`;
  } catch (err) {
    throw err;
  }
};
