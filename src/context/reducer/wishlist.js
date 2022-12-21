const wishlist = (state=[], action)=>{
    switch(action.type){
        case "ADD_LOVE":
            return state = [...state, action.payload]
        default:
            return state
    }
}

export default wishlist