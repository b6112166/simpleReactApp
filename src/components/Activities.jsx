    import React, { Component } from 'react';
    
    class Actvities extends Component {
        state = {editBtns:false  } 
        render() { 
           
            return (
            <div>
                <input className='activity-txt'></input> {<button className="btn delete-btn" onClick={this.props.onDelete}>-</button>}
            </div>
            );
        }
    }
     
    export default Actvities;