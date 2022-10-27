import { Segmented } from "antd";
import { FC } from "react";
import './index.scss';

interface IProps {
    cities: string[];
    onChange: (city: any) => void;
}

export const CityTabs: FC<IProps> = ({ cities, onChange }) => {
    return <Segmented className="city-tabs" onChange={onChange} options={cities} />;
}