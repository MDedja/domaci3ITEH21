import {useState} from 'react';

function PrijavaForm(props){

    const [tim, setTim] = useState({
        naziv: '',
        kapiten: '',
        igrac1: '',
        igrac2: '',
        brojTelefona: '',
        email: ''
    });


    return (
        <div>
            <div id="formaprijava">

                <div className="redforme">

                <div className="clan">
                <label>Naziv tima</label>
                <input type="text" className="form-control" value={tim.naziv} onChange={e => setTim({...tim, naziv: e.target.value})} />
                </div>

                <div className="clan">
                <label>Kapiten</label>
                <input type="text" className="form-control" value={tim.kapiten} onChange={e => setTim({...tim, kapiten: e.target.value})} />
                </div>


                <div className="clan">
                <label>Igrač</label>
                <input type="text" className="form-control" value={tim.igrac1} onChange={e => setTim({...tim, igrac1: e.target.value})}   />
                </div>

                </div>

                <div className="redforme">

                <div className="clan">
                <label>Igrač</label>
                <input type="text" className="form-control" value={tim.igrac2} onChange={e => setTim({...tim, igrac2: e.target.value})}  />
                </div>

                <div className="clan">
                <label>Broj telefona</label>
                <input type="text" className="form-control" value={tim.brojTelefona} onChange={e => setTim({...tim, brojTelefona: e.target.value})}/>
                </div>

                <div className="clan">
                <label>Email</label>
                <input type="text" className="form-control" value={tim.email} onChange={e => setTim({...tim, email: e.target.value})}/>
                </div>

                </div>
                <button onClick={() => props.prikaziPrijavu(tim)} className="btn btn-dark" id="btnprijavitim">Prijavi se</button>

            </div>
        </div>
    )
}

export default PrijavaForm;