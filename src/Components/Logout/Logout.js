import React, { useState } from 'react'
import './Logout.Styles.scss'

const Logout = () => {



    async function logout() {
        if (window.confirm("Do you want to Logout ?") === true) {
        const token = localStorage.getItem('token')
        if (token) {
            localStorage.removeItem('token')
            window.location.reload();
        }
    }
}
 

    return (
        <>
            <button onClick={logout} className='imp-dates-btn'>&#8592;LOGOUT</button>
           
        </>
    )
}

export default Logout