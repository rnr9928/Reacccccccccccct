let init ={
    weatherData : {},
}

function reducer(state= init,action){
    const {type, payload} = action;
    switch (type) {
        case "GET_WEATHER_DATA":
            
            return{...state,weatherData : payload};
    
        default:
            return state;
    }

}

export default reducer;