import { Card } from "antd";
import { FC } from "react";
import { WeatherIcon, WeatherType } from "../WeatherIcon";
import './index.scss';

interface IProps {
    weatherType: WeatherType;
    temprature: number;
    loading: boolean;
}

const WeatherTypeMap: Record<WeatherType, string> = {
    [WeatherType.SUNNY]: 'Sunny',
    [WeatherType.CLOUDY]: 'Clouds',
    [WeatherType.RAINY]: 'Rainy',
    [WeatherType.SNOW]: 'Snow',
    [WeatherType.PARTIALSUN]: 'Partial Clouds',
    [WeatherType.THUNDERSTORM]: 'Thunderstorm',
}

export const TodayWeatherCard: FC<IProps> = ({ weatherType, temprature, loading }) => {
    return (
        <div className="today-weather-card">
            <Card className="antd-card" bordered={false} loading={loading}>
                <p className="day">Today</p>
                <div className="weather-and-temprature">
                    <span className="weather-icon"><WeatherIcon type={weatherType} /></span>
                    <div className="weather-type-and-temprature">
                        <p className="temprature">{temprature}<span className="deg">&deg;</span></p>
                        <p className="weather-type">{WeatherTypeMap[weatherType]}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}