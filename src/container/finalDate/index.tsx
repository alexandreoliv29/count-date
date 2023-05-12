import { useRef, useState } from "react";


export const FinalDate = ({formattedDate, handleChange, dateInputRef, dateFinal}: any) => {

    return (
        <>
            <div className="finalDate">
                <p>Data Final</p>
                <div className="bg-red">
                    <p>teste</p>
                </div>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                />
                <p>Selected Date: {dateFinal}</p>

            </div>
        </>
    )
}