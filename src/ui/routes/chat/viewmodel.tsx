import { useState } from "react";
import { Message } from "../../../domain";

export default function ViewModel() {
    const [messages, setMessages] = useState<Message[]>([
        new Message(
        "bot",
        "¿Esta persona hace un esfuerzo consciente por ponerse en tu lugar cuando estás pasando un mal día?"
        )
    ]);

    const [inputValue, setInputValue] = useState("");

    const onChangeInput = (value: string) => {
        setInputValue(value);
    };

    const onClickOnSend = () => {
        if (!inputValue.trim()) return;

        const userMessage = new Message("user", inputValue);

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");

        setTimeout(() => {
        setMessages((prev) => [
            ...prev,
            new Message("bot", "Gracias por compartirlo 💙")
        ]);
        }, 500);
    };

    return {
        messages,
        inputValue,
        onChangeInput,
        onClickOnSend
    };
}
