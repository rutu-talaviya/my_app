import { Link } from "react-router-dom";

export default function Header() {
    return <>
        <header>
            <div>
                <Link to={"/About"}>About</Link>
            </div>

            <div>
                <Link to={"/Contect"}>Contect</Link>
            </div>

        </header>
    </>


}