const POSITION = ['left','center','right']

const Headingtitle = ({title, position}: any) =>{
    const titlePosition = POSITION.includes(position)?position:POSITION[0]    
    return (
        <h2 className={`text-[14px] text-${titlePosition}`}>{title}</h2>
    )
}

export default Headingtitle;