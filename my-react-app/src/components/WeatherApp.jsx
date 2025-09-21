import { useState } from 'react';
import CustomBtn from './CustomButton';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeatherData = async () => {
    if (city.trim() === '') {
      setError('City name cannot be empty');
      setWeather(null);
      return;
    }

    setError('');
    setWeather(null);

    try {
      const response = await fetch(`http://localhost:5000/weather/${city}`);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError('');
      } else {
        setWeather(null);
        setError(data.error || 'Error fetching weather data');
      }
      console.log(data);
    } catch (err) {
      setWeather(null);
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type='text'
          placeholder='Enter city name'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <CustomBtn label='Fetch Weather' onClick={fetchWeatherData} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h3>
            {weather.icon} {weather.city}
          </h3>
          <p>Temperature: {weather.temperature}</p>
          <p>Condition: {weather.condition}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Wind: {weather.windSpeed}</p>
          <p>Time: {new Date(weather.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
