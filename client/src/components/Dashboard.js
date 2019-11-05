import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css'

const Dashboard  = () => {
    return (
        <div>
            <Link to={"/surveys/new"} className={"btn btn-info btn-circle btn-circle-xl m-1"}><FontAwesomeIcon icon={"plus"}/></Link>
        </div>
    );
};

export default Dashboard;
