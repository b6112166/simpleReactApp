import React, { Component } from 'react';
import Actvities from './Activities';


var activitiesCounter =1;
class ActivitiesList extends Component {
    
    state = { 
        activities:[
            {id:1}
        ]
     };


     handleAdd = () =>{
         
         console.log("Add event called for "+ activitiesCounter);
         activitiesCounter++;
         const newState = this.state;
         newState.activities.push({id:activitiesCounter});
         this.setState(newState);
     }

     handleDelete = id =>{
        console.log("delete is called for " +id );
        const newState = this.state;

        newState.activities= this.state.activities.filter(function(value,index,arr){
            
            return (value.id !== id);
        })


        
        this.setState(newState);
        activitiesCounter--;
    }

    render() { 
        return (
            <React.Fragment>
                {this.state.activities.map( activity=> 
                    <Actvities key={activity.id} id = {activity.id} onDelete={()=>this.handleDelete(activity.id)}/>
                    
                )}

                <button className='btn add_btn' onClick={()=>this.handleAdd()}>+</button>
                
            </React.Fragment>
        );
    }
}
 
export default ActivitiesList;
