import type { Message } from "../../../../domain";
import style from "./style.module.css";

type Props = {
    message: Message;
};

export default function BubbleMessage({ message }: Props) {
    return (
        <div className={`${style.message} ${style[message.role]}`}>
            <p>{message.text}</p>
        </div>
    );
}
