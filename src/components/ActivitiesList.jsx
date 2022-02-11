import React, { Component } from 'react';
import Actvities from './Activities';


var activitiesCounter =1;
var id_counter =1;
class ActivitiesList extends Component {
    
    state = { 
        activities:[
            {id:1 , content:""}
        ]
     };


     handleAdd = () =>{
         
         console.log("Add event called for "+ id_counter);
         activitiesCounter++;
         id_counter++;
         const newState = this.state;
         newState.activities.push({id:id_counter});
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

    handleUpdate(){
        
    }

    render() { 
        return (
            <React.Fragment>
                <button className = 'btn save_btn'>Save</button>
                {this.state.activities.map( activity=> 
                    <Actvities key={activity.id} id = {activity.id} onUpdate = {()=>this.handleUpdate()} onDelete={()=>this.handleDelete(activity.id)}/>
                    
                )}

                <button className='btn add_btn' onClick={()=>this.handleAdd()}>+</button>
                
            </React.Fragment>
        );
    }
}
 
export default ActivitiesList;
