import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../../src/store';

export default function DetailWeather(){
    const weatherDataDetail = useSelector(state => state.weatherData);
    console.log(weatherDataDetail);

    return(
        <Provider store={store}>
            <div className="p-16">
                <h1 className="text-xl font-bold">Detail Page</h1>
            </div>
        </Provider>
    );
}