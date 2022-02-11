import react from 'react';
import React, { Component } from 'react';
import './App.css';
import ActivitiesList from './components/ActivitiesList';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div className='main-wrapper'>
                <ActivitiesList/>
            </div>
        );
    }
}
 
export default App;
