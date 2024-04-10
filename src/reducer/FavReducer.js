const INITAL_VALUE = {
    totalMovie:[],
    NumberFavMovie:0
}

const FavReducer =  (state = INITAL_VALUE, action) => {
    if(action.type === 'ADD'){
        return {
            ...state,
            totalMovie: [...state.totalMovie,action.payload],
            NumberFavMovie: state.NumberFavMovie+1
        }
    }else if (action.type === 'REMOVE'){
        return{
            ...state,
            totalMovie: state.totalMovie.filter(fav => fav.id !== action.payload.id),
            NumberFavMovie: state.NumberFavMovie-1
        }
    }else{
        return state
    }
};

export default FavReducer

