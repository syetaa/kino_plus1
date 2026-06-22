import styles from './Home_search.module.css';

import { HiSearch } from "react-icons/hi";

export default function Home_search() {
    return (
        <div className={styles.home_search}>
            <div className={styles.logo}>
                Kino+
            </div>
            <form className={styles.search_field}>
                <input type="text" placeholder="Поиск..." name="search" />
                <button type="submit"><HiSearch/></button>
            </form>
        </div>
    );
}