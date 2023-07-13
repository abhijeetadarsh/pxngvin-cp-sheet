import React, { useState } from 'react';
import './NavBar.css';
export default function NavBar() {
    const [handle, setHandle] = useState('');
    const [handleIsValid, setHandleIsValid] = useState(false);
    
    function inputChangeHandler(value) {
        // handle = value;
        setHandle(value);
        console.log(handle);
    }
    function submitHandler(event) {
        // this will prevent default reloading of page on form submit
        event.preventDefault();
        setHandleIsValid(true);
    }
    function openFormHandler(event) {
        setHandle('');
        setHandleIsValid(false);
    }

    return (
        <nav className="navbar navbar-light d-flex justify-content-center pt-4">
            {handleIsValid && <button className="btn btn-success mb-3" onClick={openFormHandler}>Codeforce Handle: {handle}</button>}
            {!handleIsValid && <form className="form-inline" onSubmit={submitHandler}>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Codeforce Handle"
                        onChange={(event) => {inputChangeHandler(event.target.value)}}/>
                        <div class="input-group-append">
                            <button className="btn btn-secondary" type="submit">Submit</button>
                        </div>
                </div>
            </form>}
        </nav>
    );
}