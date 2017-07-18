import React, { Component } from 'react'

import Nav from './components/Nav/Nav'

import ProfileContainer from './components/ProfileContainer/ProfileContainer'

import ProfileEditor from './components/ProfileEditor/ProfileEditor'

import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      image: "",
      name: "",
      status: "",
      birthdate: ""
    }
    this.updateProfile = this.updateProfile.bind(this)
  }

//methods
  updateProfile(newProfile) {
    this.setState(newProfile)
  }

   render() {
      return (
         <div className="App">
           <Nav/>
             <ProfileContainer
               name={this.state.name}
               status={this.state.status}
               birthdate={this.state.birthdate}
               image={this.state.image}
             />
             <ProfileEditor
               updateProfile={this.updateProfile}
             />
         </div>
      );
   }
}

export default App;
