import { Card } from "antd";
import { FC } from "react";
import { WeatherIcon, WeatherType } from "../WeatherIcon";
import './index.scss';

interface IProps {
    day: string;
    weatherType: WeatherType;
    temprature: number;
    loading: boolean;
}

export const WeatherCard: FC<IProps> = ({ day, weatherType, temprature, loading }) => {
    return (
        <div className="weather-card">
            <Card className="ant-card" loading={loading}>
                <p className="day">{day}</p>
                <span className="weather-icon"><WeatherIcon type={weatherType} /></span>
                <p className="temprature">{temprature}<span className="deg">&deg;</span></p>
            </Card>
        </div>
    )
}