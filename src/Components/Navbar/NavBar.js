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
    <nav data-aos-duration="1000" data-aos-delay="500" data-aos='fade-down' className='navbar-white'>
      <div className='nav-container'>
        <div className='nav-links'>
          <Link className='nav-option' to='/'>Home</Link>
          <Link 
            className='nav-option' 
            to='/committee'
            aria-controls={openDropDown ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openDropDown ? 'true' : undefined}
            onClick={() => navigate('/committee')}
            onMouseOver={handleMouseOver}
          >
            Committee
          </Link>
          <Link className='nav-option' to='/call-for-paper'>Call for Paper</Link>
          <Link className='nav-option' to='/publication'>Publication</Link>
          <Link className='nav-option' to='/publish'>Publish</Link>
          <Link className='nav-option' to='/registration'>Registration</Link>
          <Link className='nav-option' to='/#map-section'>Venue</Link>
          <Link className='nav-option' to={location.pathname === "/" ? '/#contact-us-section' : location.pathname + '/#contact-us-section'}>Contact Us</Link>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openDropDown}
          onClose={handleClose}
          disableScrollLock={true}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            onMouseLeave: handleClose
          }}
        >
          <Link className='dropdown-item' to='/committee/#organising-committee'><MenuItem onClick={handleClose}>Organising Committee</MenuItem></Link>
          <Link className='dropdown-item' to='/committee/#technical-program-committee'><MenuItem onClick={handleClose}>Technical Program Committee</MenuItem></Link>
          <Link className='dropdown-item' to='/committee/#student-organising-committee'><MenuItem onClick={handleClose}>Student Organising Committee</MenuItem></Link>
        </Menu>

        <div className={open ? 'menu-icon closed' : 'menu-icon'} onClick={handleClick}>
          <div></div>
        </div>

        <div className={open ? 'menu-container opened' : 'menu-container'}>
          <Link className='nav-option' to='/'>Home</Link>
          <Link className='nav-option' to='/#about-us-section'>About Us</Link>
          <Link className='nav-option' to='/cars'>Cars</Link>
          <Link className='nav-option' to={location.pathname === '/' ? '/#contact-us-section' : '/cars/#contact-us-section'}>Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar