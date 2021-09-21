import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class CourseView extends Component {
    state={
        course:[],
        is_Loading:"false"
    }
    courseFetch=()=>{
        this.setState(
            {
                is_Loading:"true"
            }
        )
        axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
            (response)=>{
                console.log(response.data)
                this.setState(
                    {
                        is_Loading:"false",
                        course:response.data
                    }
                )
            }
        )
    }

    render() {
        return (
            <div>
                <Grid container style={{padding:50}}>
                    <Grid style={{padding:20}} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                        onClick={this.courseFetch}
                        color="primary"
                        variant="contained"
                        fullWidth
                        >fetchCourse</Button>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Course title</TableCell>
                                        <TableCell>Course description</TableCell>
                                        <TableCell>Course date</TableCell>
                                        <TableCell>Duration</TableCell>
                                        <TableCell>Course venue</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.course.map(
                                        (value,index)=>{
                                            return<TableRow>
                                                <TableCell>{value.courseTitle}</TableCell>
                                                <TableCell>{value.courseDescription}</TableCell>
                                                <TableCell>{value.courseDate}</TableCell>
                                                <TableCell>{value.courseDuration}</TableCell>
                                                <TableCell>{value.courseVenue}</TableCell>
                                            </TableRow>

                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        
                    </Grid>

                </Grid>
                
            </div>
        )
    }
}
