const Button = ({name,bg,type,btnText}:any) => {
    const buttonStyle = ['outline', 'solid'];
    const buttonBG = ['primary', 'secondary'];
    const buttonText = ['black', 'white'];

    const btnStyle = buttonStyle.includes(type)?'border border-black border-2 rounded-[50px]':buttonStyle[1];
    const btnBg = buttonBG.includes(bg)? bg :buttonBG[1];
    const butnText = buttonText.includes(btnText)? btnText :buttonText[1];
    return(
        <button className={`py-[11px] px-[28px] text-center flex relative justify-center  ${btnStyle} ${btnBg} ${butnText}`}>{name}</button>
    )
}

export default Button;