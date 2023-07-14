import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ProblemList from './components/ProblemList';

export default function App() {
    // const [sop, setsop] = useState([]);
    return (
        <div style={{backgroundColor : "#222831"}}>
            <NavBar/>
            <ProblemList/>
        </div>
    );
}