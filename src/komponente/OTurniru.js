import TekstOTurniru from "./TekstOTurniru";

function OTurniru(){

    const tekst = "Internacionalni turnir u basketu 3x3, 'NOVI SAD ULTRA CHALLENGER' okupiće 16 najboljih ekipa iz svih zemalja sveta koji će se u našem gradu boriti za odlazak na Masters turnir u Lozani u avgustu 2022. godine. U organizaciji basket kluba AVAI 3x3, 'NOVI SAD ULTRA CHALLENGER'    održaće se na Trgu slobode u Novom Sadu, 3. i 4. juna. Ovaj basket spektakl ima status FIBA challenger turnira, a najbolje rangirani igrači i ekipe na FIBA 3x3 listi, zaigraće na specijalno napravljenim terenima u centru grada sa pratećim muzičkim programom, koji će atmosferu dovesti do usijanja. Na Challengeru u Novom Sadu učešće će uzeti 16 najboljih ekipa sveta u ovom sportu od kojih neke dolaze iz Amerike (NY Harlem, Princeton, Chicago), Letonije (Riga), Holandije (Amsterdam), Kine i Austrije.";

    return (
        <div>
            <TekstOTurniru tekst={tekst} />
        </div>
    )
}

export default OTurniru;