import styles from './Home_rec.module.css';

export default function Home_rec() {
    return (
        <section className={styles.section_container}>
            <h2 className={styles.section_title}>Рекомендуем</h2>
            <div className={styles.card}>
                <div className={styles.poster}>
                    <div className={styles.icon_placeholder}></div>
                </div>
                <div className={styles.content}>
                    <span className={styles.meta}>ФАНТАСТИКА · 2H 49M</span>
                    <h3 className={styles.title}>Бегущий по лезвию 2049</h3>
                    <p className={styles.description}>
                        Детектив раскрывает тайну, которая ставит под угрозу существование человечества
                    </p>
                </div>
            </div>
        </section>
    );
}