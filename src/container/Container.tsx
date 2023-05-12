import { useRef, useState } from "react";
import { FinalDate } from "./finalDate"
import { InicialDate } from "./inicialDate"
import { QuantityDays } from "./quantityDays"

export const Container = () => {


    function getFormattedDate() {
        const date = new Date();
        const year = date.getFullYear().toString().slice(2);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${day}/${month}/${year}`;
    }

    const [dateFinal, setDate] = useState('');
    const [dateInitial, setDateInitial] = useState('');
    const dateInputRef = useRef(null);

    const handleChange = (e: any) => {
        setDate(e.target.value);
    };


    const formattedDate = getFormattedDate();


    return (
        <>
            <div className="d-flex" style={{ width: '90%', margin: 'auto' }}>
                <div className="container bg-red">
                    <p>Coloque as datas abaixo (o dia de hoje é calculado por padrão)</p>
                    <InicialDate
                        formattedDate={formattedDate}
                        handleChange={handleChange}
                        dateInputRef={dateInputRef}
                        dateInitial={dateInitial}

                    />
                    <FinalDate
                        formattedDate={formattedDate}
                        handleChange={handleChange}
                        dateInputRef={dateInputRef}
                        dateFinal={dateFinal}
                    />
                    <QuantityDays
                        dateFinal={dateFinal}
                        dateInitial={dateInitial}
                        formattedDate={formattedDate}
                    />
                </div>
            </div>
        </>
    )
}