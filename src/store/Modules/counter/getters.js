export default {
    finalCounter(state) {
        return state.count * 3
    },
    normalizedCounter(_,getters){
        const finalCounter = getters.finalCounter
        if(finalCounter < 0){
            return 0;
        }else if(finalCounter > 100){
            return 100;
        }
        return finalCounter
    },
}