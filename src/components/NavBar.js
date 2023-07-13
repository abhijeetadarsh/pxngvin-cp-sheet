export default function NavBar() {
    return <nav className="navbar navbar-light d-flex justify-content-center" style={{backgroundColor : "#222831"}}>
        <form className="form-inline">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Codeforce Handle" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </form>
    </nav>;
}