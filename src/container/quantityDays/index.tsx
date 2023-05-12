import React, { useState } from "react"

export const QuantityDays = ({ dateFinal, dateInitial, formattedDate }: any) => {

    let [quantityOfDays, setQuantityOfDays] = useState<number>(0)

    const calcDays = () => {
        quantityOfDays = Number(dateFinal) - Number(dateInitial)
    }

    return (
        <>
            <h2>A quantidade de dias que faltam para a sua prova em {formattedDate} é : {calcDays()}</h2>
        </>
    )
}