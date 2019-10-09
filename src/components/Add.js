import React, { Component } from 'react';

export default class Add extends Component {
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>

        <h6>Add</h6>

        <input type="text" placeholder="Repo title"></input>
        <input type="text" placeholder="Repo language"></input>

        <select>
          <option value="Private">Private</option>
          <option value="Public">Public</option> 
        </select>
      

      </div>
    );
  }
}
