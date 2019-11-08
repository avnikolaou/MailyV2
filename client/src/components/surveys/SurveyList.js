import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSurveys} from '../../actions';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    };

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className={"card my-2 bg-info text-white"} key={survey._id}>
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>{survey.title}</h5>
                        <p className={"card-text"}>{survey.body}</p>
                        <p className={"float-right"}>Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
                    </div>
                    <div className={"card-footer bg-info"}>
                        <a href="#" className={"card-link text-white"}>Yes: {survey.yes}</a>
                        <a href="#" className={"card-link text-white"}>No: {survey.no}</a>
                    </div>
                </div>
            )
        });
    };

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
