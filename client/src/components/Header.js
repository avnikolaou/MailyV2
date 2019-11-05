import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from "./Payments";

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li className={"nav-item"}><a className={"btn btn-info m-1 d-flex"} href="/auth/google">Login With Google!</a></li>;
            default:
                return [
                    <li key={"1"}>
                        <Payments/>
                    </li>,
                    <li key={"2"} className={"nav-item"}>
                        <button className={"btn btn-info m-1 d-flex"} href="">Credits: {this.props.auth.credits}</button>
                    </li>,
                    <li key={"3"} className={"nav-item"}>
                        <button className={"btn btn-info m-1 d-flex"} href="/api/logout">Logout ({this.props.auth.name})</button>
                    </li>
                ]
        }
    }

    render() {
        return (
            <div>
                <nav className={"nav navbar navbar-expand-sm navbar-dark bg-dark"}>
                    <div className={"container"}>
                        <Link to={this.props.auth ? '/surveys' : '/'} className={"navbar-brand"}>Maily</Link>
                        <button className={"navbar-toggler"} data-toggle={"collapse"} data-target={"#navbarCollapse"}>
                            <span className={"navbar-toggler-icon"}></span>
                        </button>
                        <div id={"navbarCollapse"} className={"collapse navbar-collapse"}>
                            <ul className={"navbar-nav ml-auto"}>
                                {this.renderContent()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
