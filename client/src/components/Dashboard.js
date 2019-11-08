import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css'
import SurveyList from './surveys/SurveyList'

const Dashboard  = () => {
    return (
        <div>
            <SurveyList />
            <Link to={"/surveys/new"} className={"btn btn-dark btn-circle btn-circle-xl m-1"}><FontAwesomeIcon icon={"plus"}/></Link>
        </div>
    );
};

export default Dashboard;
