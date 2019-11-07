import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux'
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label}) => {
        return (
            <div key={name} className={"my-3"}>
                <label className={"text-muted"}>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });
    return (
        <div className={"my-5"}>
            <h3 className={"text-center"}>Please confirm your entries</h3>
            {reviewFields}
            <button className={"btn btn-info float-right my-3"} onClick={() => submitSurvey(formValues, history)}>Send Survey <FontAwesomeIcon icon={"envelope"}/></button>
            <button className={"btn btn-warning float-right mx-2 my-3"} onClick={ onCancel }>Back <FontAwesomeIcon className={"mx-1"} icon={"times"}/></button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues:  state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
