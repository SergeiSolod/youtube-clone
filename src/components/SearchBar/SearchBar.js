import React from 'react'
import {Paper, TextField} from '@material-ui/core'
import {Field, reduxForm} from "redux-form";

const SearchBarForm = (props) => {
    return (
        <h1>
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={props.handleSubmit}>
                    <TextField fullWidth label='Search...' onChange/>
                </form>
            </Paper>
        </h1>
    )
}

const SearchBarReduxForm = reduxForm({form: 'Search'})(SearchBarForm)


const SearchBar = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <Paper elevation={6} style={{padding: '25px'}}>
            <SearchBarReduxForm onSubmit={onSubmit}/>
        </Paper>
    )
}

export default SearchBar