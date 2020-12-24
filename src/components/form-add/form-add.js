import React from 'react';

const FormAdd = () => {
    return (
        <form>
            <h3>Add task</h3>
            <p>Firstname: <input type='text' placeholder='firstname' /></p>
            <p>Secondname: <input type='text' placeholder='secondname' /></p>
            <p>Email: <input type='text' placeholder='email' /></p>
            <p> Deadline:
                <select>
                    <option>1 hour</option>
                    <option>3 hours</option>
                    <option>5 hours</option>
                    <option>1 day</option>
                    <option>2 days</option>
                </select>
            </p>
            <p>Task description: <input type='text' placeholder='Description' /></p>
            
            <button type='submit'>add</button>
        </form>
    )
}

export default FormAdd;