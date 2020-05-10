import React from 'react'
import {Paper, TextField} from '@material-ui/core'

const SearchBar = () => {
    return (
        <h1>
            <Paper elevation={6} style={{padding: '25px'}}>
                <form>
                    <TextField fullWidth label='Search...' onChange/>
                </form>
            </Paper>
        </h1>
    )
}

export default SearchBar