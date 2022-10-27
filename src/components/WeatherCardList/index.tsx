import { FC } from 'react';
import { WeatherCard } from '../../components/WeatherCard';
import { WeatherData } from '../../services/weather';
import './index.scss';

interface IProps {
    loading: boolean;
    weatherData: WeatherData[];
}

const WeatherCardList: FC<IProps> = ({ loading, weatherData }) => {
    return (
        <div className="weather-card-list">
            {
                weatherData.map((data, index) => (
                    <WeatherCard key={index} loading={loading} temprature={data.temprature} weatherType={data.weatherType} day={data.date} />
                ))
            }
        </div>
    );
}

export default WeatherCardList;
