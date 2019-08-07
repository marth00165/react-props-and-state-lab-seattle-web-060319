import React from 'react'

class Pet extends React.Component {

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    let jawn = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {jawn.gender === "female"? '♀' : '♂' }
            {jawn.name}
          </a>
          <div className="meta">
            <span className="date">{jawn.type}</span>
          </div>
          <div className="description">
            <p>Age: {jawn.age}</p>
            <p>Weight: {jawn.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {jawn.isAdopted === true? <button  className="ui disabled button">Already adopted</button> : <button onClick = {this.handleClick} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
