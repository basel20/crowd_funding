import React from "react";


export default function CustomButton({btnType, title , handelClick, styles }){

    return(

        <button type={btnType} className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`} onClick={handelClick}>
            {title}
        </button>
    )
}