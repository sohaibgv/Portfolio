import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Sohaib Ezzahir </title>
                    <meta name="description" content="Sohaib Ezzahir's portfolio website." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
