export const reducer = function reducer(state = {
    firstNumber:0,
    secondNumber: 0,
    calculations: []
}, action) {
    switch (action.type) {
        case 'SAVE_CALCULATION':
            const total = parseInt(state.firstNumber) + parseInt(state.secondNumber);
            const item = {
                firstNumber: state.firstNumber,
                secondNumber: state.secondNumber,
                total,
            };

            const calculations = [...state.calculations,item];
            return Object.assign({},state,{total,calculations});
        case 'UPDATE_NUMBER':
            if(action.isFirstNumber) {
                return Object.assign({}, state, {firstNumber: action.number});
            }else {
                return Object.assign({}, state, {secondNumber: action.number});
            }
        default:
            return state;
    }
};