'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './MoviesSlider.module.css';

// Импорт обязательных базовых стилей Swiper
import 'swiper/css';

export default function MoviesSlider({ movies }) {
    const swiperRef = useRef(null);

    // Сброс скролла карусели на первый слайд при обновлении списка фильмов
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(0, 0); 
        }
    }, [movies]);

    return (
        <div className={styles.slider_container}>
            <Swiper
                ref={swiperRef}
                spaceBetween={16}        /* Отступ между карточками */
                slidesPerView={'auto'}   /* Размеры карточек берутся из CSS */
                grabCursor={true}        /* Курсор-рука при перетаскивании мышкой */
                className={styles.swiper_wrapper}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className={styles.movie_slide}>
                        <div className={styles.card}>
                            {/* Постер с градиентом */}
                            <div className={styles.poster_placeholder}>
                                <span className={styles.rating}>🔳 {movie.rating}</span>
                            </div>
                            <h3 className={styles.movie_title}>{movie.title}</h3>
                            <p className={styles.movie_info}>{movie.year} · {movie.genre}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
