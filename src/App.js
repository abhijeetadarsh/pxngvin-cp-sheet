import React, { useEffect, useState } from 'react';
import './App.css';
import ProblemItem from './components/ProblemItem';
import ProblemList from './components/ProblemList';

const API = "https://codeforces.com/api/problemset.problems";
const App = () => {
  const [problemsetData, setProblemsetData] = useState([]);

  async function fetchProblemset(url) {
    try{
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setProblemsetData(data.result);
    }
    catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchProblemset(API);
  }, []);



  function cfDataFetcher(problemURL) {
    const regex1 = /\/contest\/(\d+)\/problem\/([A-Z\d]+)$/;
    const regex2 = /\/problemset\/problem\/(\d+)\/([A-Z])$/;
    const match1 = problemURL.match(regex1);
    const match2 = problemURL.match(regex2);

    if (match1) {
      const contestId = match1[1];
      const index = match1[2];

      // console.log("Contest ID:", contestId);
      // console.log("Index:", index);
      return <ProblemItem/>;
    }
    else if (match2) {
      const contestId = match2[1];
      const index = match2[2];

      // console.log("Contest ID:", contestId);
      // console.log("Index:", index);
      return <ProblemItem/>;
    }
    else {
      console.log("Invalid URL format");
      return <div>Cannot fetch data of question :(</div>
    }
    // return <div>hello</div>;
  }
  return (
    <div className="container mt-4">
      <ProblemList/>
    </div>
  );
}

export default App;
