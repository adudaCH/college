import { FunctionComponent } from "react";

interface NavbarProps {
    
}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return ( 
        <>
        <ul className="nav justify-content-center d-flex bg-secondary text-light">
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Home</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/Courses">Courses</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/Student">Student</a>
    </li>
</ul>
        </>
);
}

export default Navbar;