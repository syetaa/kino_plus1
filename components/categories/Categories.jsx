'use client';

import styles from './Categories.module.css';

// Список жанров, соответствующих вашему массиву фильмов
const CATEGORIES = ['Все', 'Боевики', 'Драмы', 'Комедии', 'Фантастика', 'Sci-Fi'];

export default function Categories({ activeCategory, onCategoryChange }) {
    return (
        <div className={styles.scroll_container}>
            <div className={styles.categories_list}>
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={`${styles.category_btn} ${
                            activeCategory === category ? styles.active : ''
                        }`}
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
