import { FC } from 'react';
import { TodayWeatherCard } from '../../components/TodayWeatherCard';
import WeatherCardList from '../../components/WeatherCardList';
import { WeatherData } from '../../services/weather';
import './index.scss';

interface IProps {
    loading: boolean;
    weatherData: WeatherData[]
}

const CityCard: FC<IProps> = ({ loading, weatherData }) => {
    return (
        <div className="city-card">
            <TodayWeatherCard loading={loading} temprature={weatherData[0].temprature} weatherType={weatherData[0].weatherType} />
            <WeatherCardList loading={loading} weatherData={weatherData.slice(1)} />
        </div>
    );
}

export default CityCard;
