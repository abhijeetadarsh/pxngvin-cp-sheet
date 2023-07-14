import React, { useState } from 'react';
import Loading from './Loading';
import './NavBar.css';

export default function NavBar() {
    // 0 = inputHandle; 1 = loading; 2 = validHandle; 3 = invalidHandle
    const [stateOfForm, setStateOfForm] = useState(0);


    const [handle, setHandle] = useState('');
    const [solvedProblems, setSolvedProblems] = useState([]);

    const fetchSolvedProblems = async () => {
        const delay = 600; // Delay in milliseconds

        return new Promise((resolve) => {
            setTimeout(async () => {
                try {
                    const response = await fetch(
                        `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=10000`
                    );

                    if (!response.ok) {
                        setHandle('');

                        // Change stateOfForm to invalidHandle mode
                        setStateOfForm(3);
                        throw new Error('Failed to fetch solved problems');
                    }

                    const data = await response.json();
                    const solvedProblems = data.result.filter(
                        (submission) => submission.verdict === 'OK'
                    );

                    setSolvedProblems(solvedProblems);
                    console.log(solvedProblems);

                    // Change stateOfForm to validHandle mode
                    setStateOfForm(2);

                    resolve(); // Resolve the promise after the delay and function execution
                } catch (error) {
                    console.error('Error fetching solved problems:', error);
                    resolve(); // Resolve the promise even if an error occurs
                }
            }, delay);
        });
    };
    function inputChangeHandler(value) {
        setHandle(value);
    }
    function submitHandler(event) {
        // this will prevent default reloading of page on form submit
        event.preventDefault();

        // change stateOfForm to loading mode
        setStateOfForm(1);

        setSolvedProblems([]);
        fetchSolvedProblems()
            .then(() => {
                // Code to execute after the delay and the fetchSolvedProblems function has completed
            })
            .catch((error) => {
                // Error handling
                console.error('Error in fetchSolvedProblems:', error);
            });

        console.log(solvedProblems);
    }
    function openFormHandler(event) {
        setHandle('');

        // change stateOfForm to inputHandle mode
        setStateOfForm(0);
    }
    // 
    return (
        <nav id='dog' className="navbar navbar-light d-flex justify-content-center pt-4">
            {stateOfForm === 0 && <form className="form-inline" onSubmit={submitHandler}>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Codeforce Handle"
                        onChange={(event) => { inputChangeHandler(event.target.value) }} />
                    <div class="input-group-append">
                        <button className="btn btn-secondary" type="submit">Submit</button>
                    </div>
                </div>
            </form>}
            {stateOfForm === 1 && <Loading />}
            {stateOfForm === 2 && <button className="btn btn-success mb-3" onClick={openFormHandler}>{handle}</button>}
            {stateOfForm === 3 && <button className="btn btn-danger mb-3" onClick={openFormHandler}>Invalid Handle</button>}
        </nav>
    );
}