import React, { useState, useEffect } from 'react';
import { Search, MapPin, Thermometer, Droplets, Wind, Eye, Sun, Cloud, CloudRain, CloudSnow, Zap } from 'lucide-react';
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';

const CalculatedWeather = () => {
  const [currentArea, setCurrentArea] = useState('Dhaka');
  const [searchInput, setSearchInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const weatherDescriptions = {
    'clear': 'Clear',
    'clouds': 'Clouds',
    'rain': 'Rain',
    'drizzle': 'Drizzle',
    'thunderstorm': 'Thunderstorm',
    'snow': 'Snow',
    'mist': 'Mist',
    'fog': 'Fog'
  };

  const weatherIcons = {
    'clear': Sun,
    'clouds': Cloud,
    'rain': CloudRain,
    'drizzle': CloudRain,
    'thunderstorm': Zap,
    'snow': CloudSnow,
    'mist': Cloud,
    'fog': Cloud
  };

  const popularAreas = [
    { name: 'Dhaka',  city: 'Dhaka' },
    { name: 'Chittagong', city: 'Chittagong' },
    { name: 'Sylhet', city: 'Sylhet' },
    { name: 'Rajshahi', city: 'Rajshahi' },
    { name: 'Khulna', city: 'Khulna' },
    { name: 'Barisal', city: 'Barisal' },
    { name: 'Rangpur', city: 'Rangpur' },
    { name: 'Mymensingh', city: 'Mymensingh' },
    { name: 'Comilla', city: 'Comilla' },
    { name: 'Narayanganj', city: 'Narayanganj' },
    { name: 'Gazipur', city: 'Gazipur' },
    { name: 'Jashore', city: 'Jashore' }
  ];

  const generateMockWeatherData = (city) => {
    const baseTemp = Math.floor(Math.random() * 15) + 20;
    const weatherTypes = ['clear', 'clouds', 'rain', 'drizzle', 'mist'];
    const currentWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    
    const currentWeather = {
      main: {
        temp: baseTemp + Math.floor(Math.random() * 5),
        feels_like: baseTemp + Math.floor(Math.random() * 3),
        humidity: Math.floor(Math.random() * 40) + 40
      },
      weather: [{
        main: currentWeatherType,
        description: weatherDescriptions[currentWeatherType] || 'Clear'
      }],
      wind: {
        speed: Math.floor(Math.random() * 20) + 5
      },
      visibility: Math.floor(Math.random() * 5) + 5,
      name: city
    };

    const forecast = [];
    for (let i = 0; i < 7; i++) {
      const weatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
      const temp = baseTemp + Math.floor(Math.random() * 10) - 5;
      forecast.push({
        dt: Date.now() / 1000 + (i * 24 * 60 * 60),
        main: {
          temp_max: temp + Math.floor(Math.random() * 3),
          temp_min: temp - Math.floor(Math.random() * 5)
        },
        weather: [{
          main: weatherType,
          description: weatherDescriptions[weatherType] || 'Clear'
        }]
      });
    }

    return { current: currentWeather, forecast };
  };

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockData = generateMockWeatherData(city);
      setWeatherData(mockData.current);
      setForecastData(mockData.forecast);
    } catch (err) {
      setError('There was a problem getting weather information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAreaSelect = (city) => {
    setCurrentArea(city);
    setSearchInput(city);
    fetchWeather(city);
  };

  const handleSearch = () => {
    const city = searchInput.trim() || currentArea;
    if (!city) {
      setError('Please Enter a City Name.');
      return;
    }
    fetchWeather(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    fetchWeather('Dhaka');
  }, []);

  const getWeatherIcon = (weatherType) => {
    const IconComponent = weatherIcons[weatherType.toLowerCase()] || Sun;
    return IconComponent;
  };

  return (
   <>
     <NavBar/>
   <div className=' pt-25 md:pb-[130px]' >
   </div>
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 ">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            Calculated Weather
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-medium">
            Complete 7-day weather information
          </p>
        </div>

        {/* Area Selection */}
        <div className="mb-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
              <MapPin className="text-blue-500" />
               Select Area
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {popularAreas.map((area) => (
                <button
                  key={area.city}
                  onClick={() => handleAreaSelect(area.city)}
                  className={`p-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-sm ${
                    currentArea === area.city
                      ? 'bg-blue-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 hover:bg-blue-50 text-gray-700'
                  }`}
                >
                  <span className="text-lg">{area.emoji}</span>
                  <div>{area.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white rounded-full p-2 shadow-2xl max-w-md w-full">
            <div className="flex items-center">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter the name of your favorite city..."
                className="flex-1 px-6 py-4 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              />
              <button
                onClick={handleSearch}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white rounded-full p-4 transition-colors duration-200"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mb-4"></div>
            <p className="text-white text-xl">Loading weather information...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-2xl mb-6 text-center">
            {error}
          </div>
        )}

        {/* Current Weather */}
        {weatherData && !loading && (
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                {React.createElement(getWeatherIcon(weatherData.weather[0].main), {
                  size: 80,
                  className: "text-blue-500"
                })}
              </div>
              <div className="text-6xl md:text-8xl font-bold text-gray-800 mb-2">
                {Math.round(weatherData.main.temp)}°C
              </div>
              <div className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
                {weatherData.name}
              </div>
              <div className="text-xl text-gray-500">
                {weatherData.weather[0].description}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl text-center">
                <Thermometer className="mx-auto mb-2 text-orange-500" size={24} />
                <div className="text-sm text-gray-600 mb-1">Perceived Temperature</div>
                <div className="text-xl font-bold text-gray-800">
                  {Math.round(weatherData.main.feels_like)}°C
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl text-center">
                <Droplets className="mx-auto mb-2 text-blue-500" size={24} />
                <div className="text-sm text-gray-600 mb-1">Humidity</div>
                <div className="text-xl font-bold text-gray-800">
                  {weatherData.main.humidity}%
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl text-center">
                <Wind className="mx-auto mb-2 text-green-500" size={24} />
                <div className="text-sm text-gray-600 mb-1">Wind Speed</div>
                <div className="text-xl font-bold text-gray-800">
                  {Math.round(weatherData.wind.speed * 3.6)} km/h
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl text-center">
                <Eye className="mx-auto mb-2 text-purple-500" size={24} />
                <div className="text-sm text-gray-600 mb-1">Visibility</div>
                <div className="text-xl font-bold text-gray-800">
                  {weatherData.visibility} km
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 7-Day Forecast */}
        {forecastData.length > 0 && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {forecastData.map((item, index) => {
              const date = new Date(item.dt * 1000);
              const dayName = index === 0 ? 'Today' : days[date.getDay()];
              const WeatherIcon = getWeatherIcon(item.weather[0].main);

              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="font-bold text-gray-800 mb-3 text-lg">
                    {dayName}
                  </div>
                  
                  <div className="mb-4">
                    <WeatherIcon size={48} className="mx-auto text-blue-500" />
                  </div>
                  
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    {Math.round(item.main.temp_max)}°
                  </div>
                  
                  <div className="text-lg text-gray-500 mb-2">
                    {Math.round(item.main.temp_min)}°
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    {item.weather[0].description}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
    <div>
     <Footer/>
    </div>
   </>
  );
};

export default CalculatedWeather;