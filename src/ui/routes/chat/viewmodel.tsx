import { Message } from "../../../domain";

export default function ViewModel() {
    const messages: Message[] = [];
    const inputValue = "";

    const onChangeInput = (_value: string) => {
        // TODO
    };

    const onClickOnSend = () => {
        // TODO
    };

    return {
        messages,
        inputValue,
        onChangeInput,
        onClickOnSend
    };
}
