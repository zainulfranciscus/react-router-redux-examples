import connect from "react-redux/es/connect/connect";
import {Summary} from "./Summary";

const mapStateToProps = state => {
    return {calculations: state.calculations};
};

const SummaryContainer = connect(mapStateToProps, null)(Summary);

export default SummaryContainer;
