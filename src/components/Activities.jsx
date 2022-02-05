    import React, { Component } from 'react';
    
    class Actvities extends Component {
        //state = {  } 
        render() { 
            
           
            return (
            <div>
                <input></input> <button className="btn delete-btn" onClick={this.props.onDelete}>-</button>
            </div>
            );
        }
    }
     
    export default Actvities;