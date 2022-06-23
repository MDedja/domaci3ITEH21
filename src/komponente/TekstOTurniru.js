import {Link} from 'react-router-dom';

function TekstOTurniru(props){
    return (
        <div>

            <img id="slikaoturniru" src="https://c1.wallpaperflare.com/preview/323/737/209/ball-basketball-man-person.jpg" />

            <p id="tekstoturniru">
                {props.tekst}
            </p>

           <Link to={"/prijava"}><button className="btn btn-dark" id="btnekipa">Prijavi ekipu</button></Link>

        </div>
    )
}

export default TekstOTurniru;