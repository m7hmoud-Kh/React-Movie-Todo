const INITAL_VALUE = {
    totalMovie:[],
    NumberFavMovie:0
}

const FavReducer =  (state = INITAL_VALUE, action) => {
    if(action.type === 'ADD'){
        const obj = action.payload
        state.totalMovie.push(obj)
        state.NumberFavMovie += 1
        return state
    }else if (action.type === 'REMOVE'){
        state.NumberFavMovie -=1
        state.totalMovie = state.totalMovie.filter(fav => fav.id !== action.payload.id)
        return state
    }else{
        return state
    }
};

export default FavReducer

