import React, { useState } from 'react'
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import './ImpDates.Styles.scss'

const ImpDates = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }
       
async function logout() {
    const token = localStorage.getItem('token')
		if (token) {
    localStorage.removeItem('token')
    window.location.reload();
        }
}
    const toggleDrawer = (opened) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpen(opened);
    };

    return (
        <>
            <button onClick={handleClick} className='imp-dates-btn'>&#8592;LOGOUT</button>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                >
                <div className='imp-dates-container'>
                    <div className='dates'>
                        <div className='date'>
                            <button onClick={logout} className='btn btn-sm btn-danger'>LOGOUT</button>
                        </div>
                       
                    </div>
                   
                </div>
            </SwipeableDrawer>
        </>
    )
}

export default ImpDates