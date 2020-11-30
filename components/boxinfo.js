import styles from "./boxinfo.module.css";

export default function BoxInfo(props) {
    const { icon, title, text } = props;

    return (
        <div className={styles.boxinfo}>
            {icon}
            <p className={styles.title}>{title}</p>

            <p>{text}</p>
        </div>
    );
}
