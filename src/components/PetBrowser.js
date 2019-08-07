import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  singlePet = () => {
    let  pets = this.props.pets
    return pets.map(pet => {return <Pet onAdoptPet= {this.props.onAdoptPet} pet = {pet}/>})
  }
  render() {
    return <div className="ui cards">{this.singlePet()}</div>
  }
}

export default PetBrowser
