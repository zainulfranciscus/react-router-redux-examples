export const saveCalculationAction = function() {
    return {
        type: 'SAVE_CALCULATION'
    }
};

export const updateNumberAction = function(number, isFirstNumber) {
    return {
        type: 'UPDATE_NUMBER',
        number,
        isFirstNumber
    }
};