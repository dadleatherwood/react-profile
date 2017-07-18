import React, {Component} from 'react'

export default class ProfileContainer extends Component {

  render() {
    return (
      <div className="profile-container">
         <div className="profile-image">
            <img src={this.props.image} alt=""/>
         </div>
         <div className="profile-info">
            <h2>{this.props.name}</h2>
            <h3 className="profile-info-status">{this.props.status}</h3>
            <h4 className="profile-info-birthdate">{this.props.birthdate}</h4>
         </div>
      </div>
    )
  }
}
