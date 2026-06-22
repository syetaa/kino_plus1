import styles from './Navigation.module.css';
import Link from 'next/link';

import { HiHome } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { RiHeartFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";

export default function Navigation() {
    return (
        <div className={styles.container_main}>
            <div className={styles.nav_links}>
                <Link href="/"><HiHome size={20}/> Главная</Link>
                <Link href="/search"><HiSearch size={20}/>Поиск</Link>
                <Link href="/favorites"><RiHeartFill size={20}/>Избранное</Link> 
                <Link href="/profile"><BiSolidUser size={20}/>Профиль</Link>
            </div>
        </div>
    );
}