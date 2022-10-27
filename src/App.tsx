import { useCallback, useState } from 'react';
import { useAsync } from 'react-use'
import './App.scss';
import CityCard from './components/CityCard';
import { CityTabs } from './components/CityTabs';
import WeatherService from './services/weather';

function App() {
  const cities = ['OTTAWA', 'MOSCOW', 'TOKYO'];
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const handleCityChange = useCallback((city: string) => {
    setSelectedCity(city);
  }, [setSelectedCity]);

  const { value: fiveDayWeatherForecast, loading } = useAsync(async () => {
    return await WeatherService.getFiveDayForecast(selectedCity);
  }, [selectedCity]);


  return (
    <div className="App">
      <CityTabs cities={cities} onChange={handleCityChange} />
      {fiveDayWeatherForecast && <CityCard weatherData={fiveDayWeatherForecast} loading={loading} />}
    </div>
  );
}

export default App;
