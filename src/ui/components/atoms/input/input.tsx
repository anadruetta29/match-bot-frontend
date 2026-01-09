import style from "./style.module.css";

type Props = {
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
};

export default function TextInput({
    value,
    placeholder = "Escribí tu mensaje...",
    onChange
}: Props) {
    return (
        <input
            className={style.container}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
