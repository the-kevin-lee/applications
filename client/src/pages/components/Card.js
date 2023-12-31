import './Card.css';


const Card = ({weatherData, chosenLocation, type}) => {

    const changeContent = () => {
        switch (type) {
            case 'temp':
                return <Temp data={weatherData} location={chosenLocation} />
            case 'precipitation':
                return <Precip data={weatherData} location={chosenLocation}/>
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