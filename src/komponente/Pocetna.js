import { Link } from "react-router-dom";

function Pocetna(){
    return (
        <div>
                <Link to={"/oturniru"}>
                <img id="slikahome" src="http://www.mojnovisad.com/files/news/5/0/8/47508/47508-vizual-ns-challenger-2022.jpg" alt="logoturnira" />
                </Link>
        </div>
    )
}

export default Pocetna;