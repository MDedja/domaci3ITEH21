function PrijavaForm(){

    return (
        <div>
            <div id="formaprijava">

                <div className="redforme">

                <div className="clan">
                <label>Naziv tima</label>
                <input type="text" className="form-control" />
                </div>

                <div className="clan">
                <label>Kapiten</label>
                <input type="text" className="form-control" />
                </div>


                <div className="clan">
                <label>Igrač</label>
                <input type="text" className="form-control" />
                </div>

                </div>

                <div className="redforme">

                <div className="clan">
                <label>Igrač</label>
                <input type="text" className="form-control" />
                </div>

                <div className="clan">
                <label>Broj telefona</label>
                <input type="text" className="form-control"/>
                </div>

                <div className="clan">
                <label>Email</label>
                <input type="text" className="form-control"/>
                </div>

                </div>
                <button  className="btn btn-dark" id="btnprijavitim">Prijavi se</button>

            </div>
        </div>
    )
}

export default PrijavaForm;