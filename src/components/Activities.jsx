    import React, { Component } from 'react';
    
    class Actvities extends Component {
        state = {editBtns:false  } 
        render() { 
            var delBtn;
           if(this.props.editMode){
                delBtn = <button className="btn delete-btn" onClick={this.props.onDelete}>-</button>
           }
            return (
            <div>
                <input className='activity-txt'></input> {delBtn}
            </div>
            );
        }
    }
     
    export default Actvities;