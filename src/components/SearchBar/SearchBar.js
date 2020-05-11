import React from 'react'
import {Paper, Button} from '@material-ui/core'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../../utils/formControl/formsControl";

const SearchBarForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Поиск'} name={'search'} validate={[required]} component={Input}
                   className="form-control-search"/>
            <button type='submit' className="waves-effect waves-light btn">button</button>
        </form>
    )
}

const SearchBarReduxForm = reduxForm({form: 'Search'})(SearchBarForm)

const SearchBar = (props) => {
    const onSubmit = (formData) => {
        props.setYouTubeThunk(formData)
    }
    return (
        <Paper elevation={6} style={{padding: '25px'}}>
            <SearchBarReduxForm onSubmit={onSubmit}/>
        </Paper>
    )
}

export default SearchBar