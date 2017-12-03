import React, {PureComponent} from "react";
import {NavLink} from "react-router-dom";
import {PageComponentProps} from "../PageComponent";

export interface ForbiddenParams {
}

export interface ForbiddenProps extends PageComponentProps<ForbiddenParams> {
}

export interface ForbiddenState {
}

export class Forbidden extends PureComponent<ForbiddenProps, ForbiddenState> {

    public componentDidMount() {
        this.props.history.replace('/');
    }

    public render() {
        return (
            <div className="forbidden-page page has-navbar"/>
        );
    }
}
