import styles from "./boxarticle.module.css";

export default function BoxArticle(props) {
    const { image, author, info, article } = props;
    return (
        <div className={styles.boxarticle}>
            <div className={styles.image}>{image}</div>

            <div className={styles.details}>
                <p className={styles.author}>{author}</p>
                <p className={styles.information}>{info}</p>
                <p>{article}</p>
            </div>
        </div>
    );
}
