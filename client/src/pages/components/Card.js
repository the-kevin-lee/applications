import './Card.css';
import Temp from './reusablecomponents/Temp';
import Precip from './reusablecomponents/Precip';
import WindData from './reusablecomponents/WindData';
import Humidity from './reusablecomponents/Humidity';
import CloudData from './reusablecomponents/CloudData';
import WeatherCondition from './reusablecomponents/WeatherCondition';

const Card = ({weatherData, chosenLocation, type}) => {
    

    const changeContent = () => {
        switch (type) {
            case 'temp':
                return <Temp data={weatherData} location={chosenLocation} />
            case 'precipitation':
                return <Precip data={weatherData} location={chosenLocation}/>
            case 'winddata':
                return <WindData data={weatherData} location={chosenLocation}/>
            case 'humidity':
                return <Humidity data={weatherData} location={chosenLocation}/>
            case 'clouddata':
                return <CloudData data={weatherData} location={chosenLocation}/>
            case 'weathercondition':
                return <WeatherCondition data={weatherData} location={chosenLocation}/>
            default:
                return <div>Unknown</div>;
        }
    }
  
    return (
        <div className='card'>
            {changeContent()}
        </div>
    )}

export default Card;