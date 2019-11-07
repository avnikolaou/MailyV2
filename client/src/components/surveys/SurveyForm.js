import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'
import SurveyField from "./SurveyField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

    renderFields() {
        return _.map(formFields, ({ label, name}) => {
            return <Field key={name} component={SurveyField} text={"text"} label={label} name={name}/>
        });
    }

    render() {
        return (
            <div className={"my-5"}>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <div className={"form-groyp"}>
                        <button className={"btn btn-info float-right"} type={"submit"}>Preview <FontAwesomeIcon className={"mx-1"} icon={"check"}/></button>
                        <Link to={"/surveys"} className={"btn btn-danger float-right mx-2"}>Cancel <FontAwesomeIcon className={"mx-1"} icon={"times"}/></Link>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name, errorMessage }) => {
        if (!values[name]) {
            errors[name] = errorMessage;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
