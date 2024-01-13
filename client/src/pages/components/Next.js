
import ImplementForecastData from './ImplementForecastData'


const Next = () => {
  const { hourlyForecast, dailyForecast, error } = ImplementForecastData('new york');

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!hourlyForecast || !dailyForecast) {
    return <div>Loading forecast data...</div>;
  }


    // Check that the expected properties exist before slicing
    const fiveDayForecast = dailyForecast?.timelines?.daily?.slice(0, 5) || [];
    const twelveHourForecast = hourlyForecast?.timelines?.hourly?.slice(0, 12) || [];
  

  return (
    <>
      <div className="forecast-container">
        <h1 className="future-forecast-title">Future Forecast</h1>
        <div className="main-div">
          <div className="next-5-d">
            <h2>Next 5 Days</h2>
            <ul>
              {fiveDayForecast.map((day, index) => (
                <li key={index}>Day {index + 1}: {day.values.temperature}</li>
              ))}
            </ul>
          </div>
          <div className="next-12-h">
            <h2>Next 12 Hours</h2>
            <ul>
              {twelveHourForecast.map((hour, index) => (
                <li key={index}>Hour {index + 1}: {hour.values.temperature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};


export default Next;