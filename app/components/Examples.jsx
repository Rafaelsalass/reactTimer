import React from 'react'
import {Link} from 'react-router'

var Examples = props => {
  return (
    <div>
      <h1 className="text-center">Examples!</h1>
      <p className="text-justify">Here are some example locations, click on them to search for the
      temperature of this places:</p>
     <ul>
       <li><Link to="/?place=Venezuela">Venezuela</Link></li>
       <li><Link to="/?place=Canada">Canada</Link></li>
       <li><Link to="/?place=Ecuador">Ecuador</Link></li>
       <li><Link to="/?place=Madagascar">Madagascar</Link></li>
     </ul>
    </div>
  )
}; 

export default Examples;
