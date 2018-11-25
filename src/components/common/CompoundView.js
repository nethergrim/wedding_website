import React from 'react'
import './CompoundView.css'

const CompoundView = props => (
    <div className="chip">
    <img src={props.image} alt="Person" width="30" height="30" />
    {props.text}
  </div>
)

export default CompoundView
