import React, { Component } from 'react';

export default class cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        } 
      }

      stateFn = () => {
            this.setState({
                color: `#333`
            })
      }

      render(){
          return (
            <div className="cell" style={{backgroundColor: `${this.state.color}`}} onClick={this.stateFn}></div>
          )
      }
}