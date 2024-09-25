import { FunctionComponent } from "react";

interface FooterProps {
    
}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <>
        <div className="container mt-5"> 
        <p>Tis site develop by Adi Saadya™</p>
        {/* <ul className="link-list">
        <li><a target="_blank" href="mailto:#adi15061992@gmail.com">adi15061992@gmail.com</a></li>
        <li><a target="_blank" href="tel:+972547303119">+972 5473 03119</a></li>
        <li><a target="_blank" href="https://wa.me/972547303119">whatsUp</a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/adisaadya/">LinkedIn </a></li>
        <li><a target="_blank" href="https://github.com/adudaCH">gitHub</a></li>
        </ul> */}


        </div>
        </>
    );
}

export default Footer;