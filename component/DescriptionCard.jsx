import style from "./DescriptionCard.module.css"

function DescriptionCard(props){
    return (<div className={style.DescriptionCard}><h1>{props.name}</h1><p>{props.description}</p></div>)
}

export default DescriptionCard