const initialState = {
    weatherData: {}
};

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_WEATHER_SUCCESS':
            return {
                ...state,
                weatherData: action.payload
            }
        default:
            return state;
    }
}
