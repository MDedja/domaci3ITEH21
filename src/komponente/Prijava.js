import PrijavaForm from "./PrijavaForm";
import Swal from 'sweetalert2'

function Prijava(){

    function prikaziPrijavu(tim){

        Swal.fire({
            title: 'Potvrda prijave!',
            text: '  Naziv tima:' +  tim.naziv + 
            ' Kapiten:' + tim.kapiten + 
            ' Igrač:' + tim.igrac1 + 
            ' Igrač:' + tim.igrac2 + 
            ' Broj telefona:' + tim.email +
            ' Email:' + tim.email,
            icon: 'success',
            confirmButtonText: 'OK'
          })
    }

    return (
        <div>
            <h2 className="mt-4">Unesite informacije o svom timu</h2>
            <PrijavaForm prikaziPrijavu={prikaziPrijavu} />
        </div>
    )
}

export default Prijava;