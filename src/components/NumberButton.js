import React, {Component} from 'react'
import NumOutput from './NumOutput'

class NumberButton extends Component {

    state={
        numberlist : []
    }

    button = event => {
        event.preventDefault();
        this.setState ({'numberlist':[...Array(20).keys()]})
        console.log("The button was pressed")
    }

    render () {
        let num = this.state.numberlist.map((element, i) => {
            return <NumOutput num={element} key={i} />
        })
        return (
            <div>
            <button 
                className = "button"
                onClick={this.button}
                id="numberbutton">
                Numbers
            </button>
            <div>{num}</div>
            </div>
        )
    }
}

export default NumberButton; 


