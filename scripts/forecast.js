// const apiKey = 'V6i2x6Q1yNRVnsDGmA83Wij1X3ZCA8O4';
// const cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
// const weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';

class Forecast {
    constructor() {
        this.apiKey = 'V6i2x6Q1yNRVnsDGmA83Wij1X3ZCA8O4';
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }

    async getInfos(city) {
        const cityInfos = await this.getCity(city);
        const weathInfos = await this.getWeather(cityInfos.Key);
        return { cityInfos, weathInfos }
    }

    async getCity(city) {
        const endPoint = `?apikey=${this.apiKey}&q=${city}`;
        const data = await fetch(this.cityUrl + endPoint);
        const jsonData = await data.json();
        return jsonData[0];
    }

    async getWeather(key) {
        const endPoint = `${key}?apikey=${this.apiKey}`;
        const data = await fetch(this.weatherUrl + endPoint)
        const jsonData = await data.json();
        return jsonData[0];
    }
}

// const getCity = async (city) => {
//     const endPoint = `?apikey=${apiKey}&q=${city}`
//     const data = await fetch(cityUrl + endPoint)
//     const jsonData = await data.json();
//     return jsonData[0];
// }

// const getWeather = async (key) => {
//     // const result = await getCity(city);
//     // const key = result.Key;
//     endPoint = `${key}?apikey=${apiKey}`;
//     const data = await fetch(weatherUrl + endPoint)
//     const jsonData = await data.json();
//     return jsonData[0];
// }

// getCity('london')
//     .then(res => getWeather(res.Key))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// getWeather('new york').then(res => console.log(res))