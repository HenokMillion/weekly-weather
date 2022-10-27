import axios from "axios";
import { WeatherType } from "../../components/WeatherIcon";

const weatherMap: Record<string, WeatherType> = {
    "Thunderstorm": WeatherType.THUNDERSTORM,
    "Drizzle": WeatherType.RAINY,
    "Rain": WeatherType.RAINY,
    "Snow": WeatherType.SNOW,
    "Clouds": WeatherType.CLOUDY,
    "Mist": WeatherType.CLOUDY,
    "Smoke": WeatherType.CLOUDY,
    "Haze": WeatherType.RAINY,
    "Dust": WeatherType.SUNNY,
    "Fog": WeatherType.CLOUDY,
    "Sand": WeatherType.SUNNY,
    "Tornado": WeatherType.CLOUDY,
    "Ash": WeatherType.SUNNY,
    "Clear": WeatherType.SUNNY,
}
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export interface WeatherData {
    date: string;
    weatherType: WeatherType;
    temprature: number;
}

const getLatLongByCityName = async (cityName: string) => {
    const response = await axios.get(
        ` https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    );

    return {
        lon: response.data[0].lon,
        lat: response.data[0].lat,
    }
}

const getFiveDayForecast = async (city: string): Promise<WeatherData[]> => {

    const { lon, lat } = await getLatLongByCityName(city);

    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&cnt=5&units=metric`
    );

    const weatherData: WeatherData[] = [];

    response.data.list.forEach((item: any) => {
        weatherData.push({
            date: dayNames[new Date(item.dt * 1000).getDay()],
            weatherType: weatherMap[item.weather[0].main],
            temprature: item.temp.day,
        })
    })

    return weatherData;
}

const WeatherService = {
    getFiveDayForecast
}

export default WeatherService;