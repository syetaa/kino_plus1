'use client';

import { useState, useMemo } from 'react';
import Categories from '../categories/Categories';
import MoviesSlider from '../movie_slider/Movie_slider';
import styles from './Home_trends.module.css';

// Тестовые данные фильмов с жанрами
const ALL_MOVIES = [
    { id: 1, title: 'Интерстеллар', year: 2014, genre: 'Sci-Fi', rating: 8.4 },
    { id: 2, title: 'Дюна', year: 2021, genre: 'Фантастика', rating: 7.9 },
    { id: 3, title: 'Оппенгеймер', year: 2023, genre: 'Драмы', rating: 8.1 },
    { id: 4, title: 'Джон Уик', year: 2014, genre: 'Боевики', rating: 8.2 },
    { id: 5, title: 'Джентльмены', year: 2019, genre: 'Комедии', rating: 8.5 },
];

export default function Home_trends() {
    const [selectedGenre, setSelectedGenre] = useState('Все');

    // Автоматическая фильтрация при изменении таба
    const filteredMovies = useMemo(() => {
        if (selectedGenre === 'Все') return ALL_MOVIES;
        return ALL_MOVIES.filter(movie => movie.genre === selectedGenre);
    }, [selectedGenre]);

    return (
        <div className={styles.container}>
            {/* Передаем стейт и функцию его изменения в табы */}
            <Categories 
                activeCategory={selectedGenre} 
                onCategoryChange={setSelectedGenre} 
            />
            
            
            <div className={styles.slider_container}>
                <h2 className={styles.title}>В ТРЕНДЕ</h2>
                <MoviesSlider movies={filteredMovies} />
            </div>
            
        </div>
    );
}