import React from 'react';
import ProblemListData from '../data/ProblemListData.json';
import ProblemItem from "./ProblemItem";
import './ProblemList.css';

export default function ProblemList() {

    function urlRegexParser(problemURL) {
        const regex1 = /\/contest\/(\d+)\/problem\/([A-Z\d]+)$/;
        const regex2 = /\/problemset\/problem\/(\d+)\/([A-Z\d]+)$/;
        const match1 = problemURL.match(regex1);
        const match2 = problemURL.match(regex2);

        if (match1) {
            const contestId = match1[1];
            const index = match1[2];
            return <ProblemItem cid={contestId} idx={index} />;
        }
        else if (match2) {
            const contestId = match2[1];
            const index = match2[2];
            return <ProblemItem cid={contestId} idx={index} />;
        }
        else {
            console.log("Invalid URL format");
            return <div>Cannot fetch data of question \(o_o)/</div>
        }
    }

    return <div className='container'>
        {ProblemListData.map((item) => (
            <details>
                <summary className="text-white m-1 card" style={{ backgroundColor: "#393E46" }}>
                    {item.topic}
                </summary>

                <ol className="list-group card m-1"  >
                    {item.question.map((questionItem) => (
                        <li className="list-group-item">
                            <a href={questionItem.url} target="_blank">
                                {urlRegexParser(questionItem.url)}
                            </a>
                        </li>
                    ))}
                </ol>
            </details>
        ))}
    </div>;
}