import { FC } from "react";

export enum WeatherType {
    CLOUDY,
    RAINY,
    SNOW,
    SUNNY,
    PARTIALSUN,
    THUNDERSTORM,
}

interface IProps {
    type: WeatherType
}

export const weatherIconMap: Record<WeatherType, any> = {
    [WeatherType.CLOUDY]: <img src='./images/cloudy.svg' alt="cloud" />,
    [WeatherType.RAINY]: <img src='./images/rainy.svg' alt="rain" />,
    [WeatherType.SNOW]: <img src='./images/snowy.svg' alt="snow" />,
    [WeatherType.SUNNY]: <img src='./images/sunny.svg' alt="snow" />,
    [WeatherType.PARTIALSUN]: <img src='./images/partial-sunny.svg' alt="snow" />,
    [WeatherType.THUNDERSTORM]: <img src='./images/thunder.svg' alt="snow" />,
}

export const WeatherIcon: FC<IProps> = ({ type }) => {
    return <>{weatherIconMap[type]}</>;
}