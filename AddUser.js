import React from 'react'

const AddUser = (props) => {
    const addUser=(event)=>{
        event.preventDefault();
    }
  return (
    <form onSubmit={addUser} className='form'>
        <label htmlFor="username">UserName : </label>
        <input type="text" id="username"/>
        <label htmlFor="age">Age : </label>
        <input type="number" id="age"/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default AddUser