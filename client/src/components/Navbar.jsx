import React from 'react'
import { AppBar, Toolbar, CssBaseline } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <AppBar position='static'>
                <CssBaseline />
                <Toolbar>
                    <div className='navlinks'>
                        <Link to='/PageOneComponent' className='link'>
                            Task №1
                        </Link>
                        {/* <Link to='/PageTwoComponent' className='link'>
							Task №2
						</Link> */}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
