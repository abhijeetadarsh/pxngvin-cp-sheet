import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ProblemList from './components/ProblemList';

export default function App() {
    return (
        <div className="container-secondary" style={{backgroundColor : "#222831"}}>
            <NavBar/>
            <ProblemList />
        </div>
    );
}