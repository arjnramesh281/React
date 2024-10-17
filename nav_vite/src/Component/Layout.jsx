import { Link, Outlet } from "react-router-dom"


function Layout(){
    return(
    <>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
    <div class="container">
        <a class="navbar-brand me-5" href="javascript:void(0)">Myntra</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto">
            <li class="nav-item me-2">
            <Link className="text-light text-decoration-none" to="/">Home</Link> 
            </li>
            <li class="nav-item me-2">
            <Link className="text-light text-decoration-none" to="/contact">Contact</Link>
            </li>
            <li class="nav-item me-2 ">
            <Link className="text-light text-decoration-none" to="/about">About</Link>
            </li>
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="text" placeholder="Search"/>
            <button class="btn btn-primary" type="button">Search</button>
        </form>
        </div>
    </div>
    </nav>
    </>
    )
}


export default Layout