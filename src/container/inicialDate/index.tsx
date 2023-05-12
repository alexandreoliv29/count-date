import { useRef, useState } from "react"


export const InicialDate = ({formattedDate, handleChange, dateInputRef, dateInitial}: any) => {

    return (
        <>
            <div className="initialDate w-100 h-100">
                <p>Data inicial</p>
                <p>{formattedDate}</p>
                <div className="bg-red">
                    <p>teste</p>
                </div>

                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                />
                <p>Selected Date: {dateInitial}</p>
            </div>
        </>
    )
}