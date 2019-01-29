import connect from "react-redux/es/connect/connect";
import {Calculator} from "./Calculator";
import {saveCalculationAction,updateNumberAction} from '../redux/actions/action';

const mapDispatchToProps = dispatch => {
    return {
        saveCalculation: () => {
            dispatch(saveCalculationAction());
        },
        dispatchNumber: (number, isFirstNumber) => {
            dispatch(updateNumberAction(number,isFirstNumber));
        }
    }
};

const mapStateToProps = state => {
    return {total: state.total}
};

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);

export default CalculatorContainer;