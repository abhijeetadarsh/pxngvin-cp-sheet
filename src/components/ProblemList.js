import React from 'react';
import ProblemListData from '../data/ProblemListData.json';
import ProblemItem from "./ProblemItem";
import './ProblemList.css';

export default function ProblemList() {
    return (
        <div className='container'>
            {ProblemListData.map((item) => (
                <details>
                    <summary className="text-white m-1 card" style={{ backgroundColor: "#393E46" }}>
                        {item.topic}
                    </summary>
                    <ol className="list-group card m-1"  >
                        {item.question.map((questionItem) => (
                            <li className="list-group-item">
                                <a href={questionItem.url} target="_blank">
                                    <ProblemItem problem={questionItem} />
                                </a>
                            </li>
                        ))}
                    </ol>
                </details>
            ))}
        </div>
    );
}