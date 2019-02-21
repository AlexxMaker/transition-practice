import React, { Component } from 'react';
import '../css/App.css';
import Transition from 'react-transition-group/Transition';

class TransitionComp extends Component{

    state = {
        show:true
    }

    showDiv =() => {
        this.setState({
            show:!this.state.show ? true : false
        })
    }

    render(){
        return(
            <div>
                <Transition
                    in={this.state.show}
                    timeout={{
                        enter:2000,
                        exit:50
                    }}
                    
                    enter={true}
                    exit={true}

                    onEnter={ (node) => {
                        console.log('Enter');
                    }}

                    onExit={ (node) => {
                        console.log('EXIT');
                    }}
                >
                    {state => 
                        <div className={`square square-${state}`}>
                            { `square square-${state}` }
                        </div>
                    }
                </Transition>
                <div className="showDiv" onClick={this.showDiv}>Show/Hide</div>
            </div>
        )
    }
}


export default TransitionComp;