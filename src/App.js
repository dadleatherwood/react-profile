import React, { Component } from 'react'

// import Nav from './components/Nav/Nav'

import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      image: "",
      name: "",
      status: "Hello",
      birthdate: ""
    }
    this.updateName = this.updateName.bind(this)
    this.updateImage = this.updateImage.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
    this.updateBirthdate = this.updateBirthdate.bind(this)
  }

//methods
  updateName(e) {
    console.log(e.target.value);
    this.setState({name: e.target.value})
  }

  updateImage(e) {
    this.setState({image: e.target.value})
  }

  updateStatus(e) {
    this.setState({status: e.target.value})
  }

  updateBirthdate(e) {
    this.setState({birthdate: e.target.value})
  }

   render() {
      return (
         <div className="App">

            <div className="profile-container">
               <div className="profile-image">
                  <img src={this.state.image} alt=""/>
               </div>
               <div className="profile-info">
                  <h2>{this.state.name}</h2>
                  <h3 className="profile-info-status">{this.state.status}</h3>
                  <h4 className="profile-info-birthdate">{this.state.birthdate}</h4>
               </div>
            </div>

            <form className="profile-editor" onSubmit={this.updateProfile}>
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new name"
                  value={this.state.name}
                  onChange={this.updateName}
               />
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new image"
                  value={this.state.image}
                  onChange={this.updateImage}
               />
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new birthdate"
                  value={this.state.birthdate}
                  onChange={this.updateBirthdate}
               />
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new status"
                  value={this.state.status}
                  onChange={this.updateStatus}
               />
               <input className="profile-editor-submit" type="submit" value="Update Profile"/>

            </form>
         </div>
      );
   }
}

export default App;
