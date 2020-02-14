const form = document.querySelector('.change-location');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img')
const card = document.querySelector('.close');
const forecast = new Forecast();
console.log(forecast);

// const getInfos = async (city) => {

//     const cityInfos = await getCity(city);
//     const weathInfos = await getWeather(cityInfos.Key);
//     // return {
//     //     cityInfos: cityInfos,
//     //     weathInfos: weathInfos
//     // };
//     //same thing new concise way
//     return { cityInfos, weathInfos }

// };


const update = (data) => {
  // const cityInfos = data.cityInfos;
  // const weathInfos = data.weathInfos;
  //destructure make the same thing with above lines

  const { cityInfos, weathInfos } = data;
  details.innerHTML = `
          <h5 class="my-3">${cityInfos.EnglishName}</h5>
          <div class="my-3">${weathInfos.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weathInfos.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>
        </div>
    `;

  card.style.display = 'inline-block';

  console.log(cityInfos, weathInfos);
  // let timeSrc;
  // if (weathInfos.IsDayTime) {
  //     timeSrc = 'img/day.svg';
  // } else {
  //     timeSrc = 'img/night.svg';
  // }
  let timeSrc = weathInfos.IsDayTime ? 'img/day.svg' : 'img/night.svg';

  time.setAttribute('src', timeSrc);

  let iconSrc = `img/icons/${weathInfos.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
}

//getInfos('washington').then(res => console.log(res)).catch(err => console.log(err))

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const city = this.city.value.trim();
  localStorage.setItem('city', city);
  form.reset();
  forecast.getInfos(city).then(data => update(data))
})

//to able to store the last searched city and show its resullts.
if (localStorage.getItem('city')) {
  forecast.getInfos(localStorage.getItem('city'))
    .then(data => { update(data) })

}
