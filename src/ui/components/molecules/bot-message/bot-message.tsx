import BubbleMessage from "../../atoms/bubble-message/bubble-message";
import avatarBot from "../../../assets/avatar-chatbot.svg";
import type { Message } from "../../../../domain";
import style from "./style.module.css";

type Props = {
    message: Message;
}
export default function BotMessage( { message }: Props) {
    return(
        <div className={style.container}>
            <img src={avatarBot} alt="avatar" />
            <BubbleMessage message={message} />
        </div>
    )
}