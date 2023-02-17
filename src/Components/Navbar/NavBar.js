import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { scroller } from 'react-scroll'
import { useNavigate  } from 'react-router-dom';
import './NavBar.Styles.scss'

const NavBar = () => {
  const location = useLocation()
  const navigate  = useNavigate ()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
    if (location.hash) {
        scrollTo(location.hash.slice(1))
    } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
}, [location])

  const scrollTo = (section) => {
    scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        offset: -100,
        smooth: 'easeInOutQuart'
    })
  }

  const handleClick = () => {
    setOpen(!open)
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const openDropDown = Boolean(anchorEl);
  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div></div>
  )
}

export default NavBar