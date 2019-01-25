import React, {Component} from 'react';
import {Summary} from "./Summary";

export class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstNumber:0,
            secondNumber:0,
            total:0,
            calculations:[],
            showSummaryPage: false
        };
    }

    saveCalculation(){
        const {firstNumber, secondNumber,calculations} = this.state;
        const total = parseInt(firstNumber) + parseInt(secondNumber);

        const calculation = {
            firstNumber,
            secondNumber,
            total
        };

        calculations.push(calculation);

        this.setState(Object.assign({calculations},calculation));
    }

    render() {
        const {calculations} = this.state;

        if(this.state.showSummaryPage) {
            return <Summary calculations={calculations}/>;
        }

        return (
            <div>
                <input name="firstNumber" type="text" onChange={e => this.state.firstNumber = e.target.value}/>
                <button onClick={this.saveCalculation.bind(this)}>+</button>
                <input name="secondNumber" type="text" onChange={e => this.state.secondNumber = e.target.value}/>
                =
                <label name="result" type="label"/>
                <label id="result">{this.state.total}</label>
                <div>
                    <p><b>Calculation Done So far</b></p>
                   <Summary calculations={calculations}/>
                </div>
                <button onClick={() => {this.setState({showSummaryPage:true})}}>Open the Summary Page</button>
            </div>
        );
    }
}

