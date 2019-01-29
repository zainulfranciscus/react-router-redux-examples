import React, {Component} from 'react';
import SummaryContainer from './SummaryContainer';

export class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            showSummaryPage: false
        };

        this.saveCalculation = this.saveCalculation.bind(this);
        this.displaySummaryPage = this.displaySummaryPage.bind(this);
        this.dispatchNumber = this.dispatchNumber.bind(this);
    }

    saveCalculation () {
        this.props.saveCalculation();
    }

    displaySummaryPage () {
        this.setState({
            showSummaryPage: true
        });
    }

    dispatchNumber (number, isFirstNumber=true) {
        this.props.dispatchNumber(number, isFirstNumber);
    }


    render() {

        if(this.state.showSummaryPage) {
            return <SummaryContainer/>;
        }

        return (
            <div>
                today's date: {Date.now()} <br/>
                <input name="firstNumber" type="text" onChange={e => this.dispatchNumber(e.target.value)}/>
                <button onClick={this.saveCalculation}>+</button>
                <input name="secondNumber" type="text" onChange={e => this.dispatchNumber(e.target.value,false)}/>
                =
                <label name="result" type="label"/>
                <label id="result">{this.props.total}</label>
                <div>
                    <p><b>Summary</b></p>
                   <SummaryContainer/>
                </div>
                <button onClick={this.displaySummaryPage}>Open the Summary Page</button>
            </div>
        );
    }
}

