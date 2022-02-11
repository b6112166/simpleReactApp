import React, { Component } from 'react';
import Actvities from './Activities';


var activitiesCounter =1;
var id_counter =1;
class ActivitiesList extends Component {
    
    state = { 
        activities:[
            {id:1 , content:""}
        ]
        ,
        editMode:false

     };


     handleAdd = () =>{
         
         console.log("Add event called for "+ id_counter);
         activitiesCounter++;
         id_counter++;
         const newState = this.state;
         newState.activities.push({id:id_counter , content:""});
         this.setState(newState);
     }

     handleDelete = id =>{
        console.log("delete is called for " +id );
        var newState = this.state;

        newState.activities= this.state.activities.filter(function(value,index,arr){
            
            return (value.id !== id);
        })


        //shift all ids
       
        this.setState(newState);
        activitiesCounter--;
    }

    handleUpdate(){
        
    }

    handleEditMode(){
        var newState = this.state;
        newState.editMode = ! this.state.editMode;
        this.setState(newState)
    }

    render() { 
        var addButton;
        var activitiesEditMode = false;
        if(this.state.editMode ){
            addButton = <button className='btn add_btn' onClick={()=>this.handleAdd()}>+</button>
            
            if(activitiesCounter>1){ // only let user delete if there is more than one actitivies
                activitiesEditMode =true;
            }
        }
        
        return (
            <React.Fragment>
                <button className = 'btn save_btn'>Save</button> <button className = 'btn edit_btn' onClick={()=>this.handleEditMode()}>Edit</button>
                {this.state.activities.map( activity=> 
                    <Actvities key={activity.id} id = {activity.id} editMode ={activitiesEditMode} onUpdate = {()=>this.handleUpdate()} onDelete={()=>this.handleDelete(activity.id)}/>
                    
                )}
                {addButton}
            </React.Fragment>
        );
    }
}
 
export default ActivitiesList;
