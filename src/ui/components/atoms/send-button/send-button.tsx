import sendIcon from "../../../assets/send.svg";
import style from "./style.module.css";

type Props = {
    onClick: () => void;
}

export default function SendButton( { onClick }: Props) {
    return( 
        <button className={style.container} onClick={onClick}>
            <img src={sendIcon} alt="Enviar" />
        </button>
    )
}