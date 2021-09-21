import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'

import React, { Component } from 'react'

export default class AddCourse extends Component {
    state={
        courseTitle: "",
        courseDescription: "",
        courseDate: "",
        courseDuration: "",
        courseVenue: "" 
    }
    onHandle=(event)=>{
        this.setState(
            {
                [event.target.name]:event.target.value  
            }          
        )
    }
    onRead=()=>{
        console.log(this.state)
        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",this.state).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status==="success"){
                    alert("successfully added")
                }
                else{
                    alert("something went wrong")
                }
            }
        )
        
    
    }

    
    render() {
        return (
            <div>
                <Grid container style={{padding:50}}>
                <Grid style={{padding:5}} item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                    fullWidth
                    variant="outlined"
                    label="Coursetitle"
                    margin="normal"
                    name= "courseTitle"
                    onChange={this.onHandle}
                    />

                </Grid>
                <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                    fullWidth
                    variant="outlined"
                    label="Course description"
                    margin="normal"
                    name="courseDescription"
                    onChange={this.onHandle}
                    />

                </Grid>
                <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                    fullWidth
                    variant="outlined"
                    label="Coursedate"
                    type="date"
                    margin="normal"
                    name="courseDate"
                    onChange={this.onHandle}
                    />

                </Grid>
                <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                    fullWidth
                    variant="outlined"
                    label="Course duration"
                    margin="normal"
                    name="courseDuration"
                    onChange={this.onHandle}
                    />

                </Grid>
                <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                    fullWidth
                    variant="outlined"
                    label="Course venue"
                    margin="normal"
                    name="courseVenue"
                    onChange={this.onHandle}

    
                    />

                </Grid>
                <Grid style={{padding:5}} item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button
                    onClick={this.onRead}
                    fullWidth
                    variant="contained"
                    color="secondary"
                    >SUBMIT</Button>

                </Grid>
                </Grid>
                
            </div>
        )
    }
}
