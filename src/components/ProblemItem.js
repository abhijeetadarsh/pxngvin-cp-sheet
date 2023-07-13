import React, { useEffect, useState } from 'react';
const API_URL = "https://codeforces.com/api/problemset.problems";

export default function ProblemItem(props) {
    const [problemsetData, setProblemsetData] = useState([]);

    async function fetchProblemset(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setProblemsetData(data.result.problems);
            console.log(problemsetData);
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchProblemset(API_URL);
    }, []);

    // const problem = problemsetData.find(obj => obj.contestId === props.cid && obj.index === props.idx);
    return <div>
        {/* {problem.name}
        {problem.points} */}
        Problem Name
    </div>;
}