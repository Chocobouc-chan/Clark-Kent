import React, { Component } from 'react';
import {Toto} from "./TotoComponent";

class MiddlewareComponent extends Component {

    render(){
        return (<Toto updateParent={this.props.updateParent}/>)
    }
}

export const Middleware = MiddlewareComponent