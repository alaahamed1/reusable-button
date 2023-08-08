export default function Button({ children , cursor , color ,opacity}){
    return(
        <button  style={{cursor:cursor, color: color,opacity:opacity}}>{children}</button>
    )
}