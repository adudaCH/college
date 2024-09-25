import { FunctionComponent } from "react";

interface FooterProps {
    
}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <div className="bg-dark-subtle">
        <div className="container mt-5"> 
        <p className="mt-5">This site develop by <strong>adudaCH</strong>™</p>


        </div>
        </div>
    );
}

export default Footer;