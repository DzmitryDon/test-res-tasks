const url_1 =
  "https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=d9300c4ab4a685ca79f262ab7b4d2339";
const url_2 =
  "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=d9300c4ab4a685ca79f262ab7b4d2339";

let first_data, second_data;

function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
      try {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error(xhr.status + " " + xhr.statusText));
        }
      } catch (err) {
        reject(err);
      }
    };
    xhr.send();
  });
}

getRequest(url_1)
  .then((response) => {
    first_data = JSON.parse(response);
    return getRequest(url_2);
  })
  .then((response) => {
    second_data = JSON.parse(response);
    console.log(
      `Два ответа получены! Первый код: ${first_data.cod}. Второй код: ${second_data.cod}.`
    );
  });
