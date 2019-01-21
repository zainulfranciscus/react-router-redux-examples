import React, {Component} from 'react';

export class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstNumber:0,
            secondNumber:0,
            total:0,
            calculations:[]
        }
    }

    saveCalculation(){
        const {firstNumber, secondNumber,calculations} = this.state;
        const total = parseInt(firstNumber) + parseInt(secondNumber);

        calculations.push({
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            total: total
        });

        this.setState({
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            total: total,
            calculations: calculations
        });
    }

    render() {
        const {calculations} = this.state;

        const listOfCalculations = calculations.map((number, index) => {
            const {firstNumber, secondNumber, total} = number;
            return (
                <ul key={index}>
                    <li>{firstNumber} + {secondNumber} = {total}</li>
                </ul>
            )
        });

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
                    {listOfCalculations}
                </div>
            </div>
        );
    }
}

