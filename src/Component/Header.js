import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography>LINK UR CODES</Typography>
                   <Link  to="/"> AddCourse</Link>
                    <Link to="/viewcourse"> viewcourse</Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
