import style from "./style.module.css";

type Props = {
    title: string;
    subtitle: string;
}

export default function Header({ title, subtitle}: Props) {
    return (
        <header className={style.container}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.subtitle}>{subtitle}</p>
        </header>
    );
}
