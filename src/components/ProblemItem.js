import React from 'react';
import ProblemStatus from '../api/ProblemStatus';
import './ProblemItem.css';

export default function ProblemItem(props) {
    if (props.problem.idx === 'error') {
        return <div>{props.problem.url}</div>;
    }

    return (
        <div id='problem-item'>
            <div id='problem-item__details'>
                <div>{props.problem.idx}. {props.problem.name}</div>
                <div>{props.problem.rating}</div>
            </div>

                <ProblemStatus/>
        </div>
    );
}