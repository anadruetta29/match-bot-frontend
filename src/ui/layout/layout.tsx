import style from "./style.module.css";
import "../styles/global.css";
import Header from "../components/atoms/header/header";

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
     return (
        <div className={style.container}>
        <Header
            title="Match Score"
            subtitle="Is this a good match? Let’s find out."
        />

        <main className={`delimiter ${style.customContainer}`}>{children}</main>
        </div>
    );
}
