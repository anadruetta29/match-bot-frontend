import type { Message } from "../../../../domain";
import BubbleMessage from "../../atoms/bubble-message/bubble-message";
import SendInput from "../../molecules/send-input/send-input";
import style from "./style.module.css";

type Props = {
    messages: Message[];
    inputValue: string;
    onChangeInput: (value: string) => void;
    onClickOnSend: () => void;
};

export default function ChatWindow({
    messages,
    inputValue,
    onChangeInput,
    onClickOnSend
}: Props) {
  return (
    <div className={style.container}>
      <div className={style.messages}>
        {messages.map((message, index) => (
          <BubbleMessage key={index} message={message} />
        ))}
      </div>

      <SendInput
        value={inputValue}
        onChange={onChangeInput}
        onClickOnSend={onClickOnSend}
      />
    </div>
  );
}