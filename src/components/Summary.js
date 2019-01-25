import React, {Component} from 'react';

export class Summary extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {calculations} = this.props;

        if(calculations.length === 0){
            return null;
        }
        
        return calculations.map((number, index) => {
            const {firstNumber, secondNumber, total} = number;
            return (
                <ul key={index}>
                    <li>{firstNumber} + {secondNumber} = {total}</li>
                </ul>
            )
        });
    }

}