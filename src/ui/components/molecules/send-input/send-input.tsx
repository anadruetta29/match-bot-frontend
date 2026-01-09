import SendButton from "../../atoms/send-button/send-button";
import TextInput from "../../atoms/text-input/text-input";
import style from "./style.module.css";

type Props = {
    value: string;
    onChange: (value: string) => void;
    onClickOnSend: () => void;
};

export default function SendInput({
    value,
    onChange,
    onClickOnSend
}: Props) {
  return (
    <div className={style.container}>
        <TextInput
            value={value}
            placeholder="Escribí tu mensaje..."
            onChange={onChange}
        />
        <SendButton onClick={onClickOnSend} />
    </div>
  );
}
