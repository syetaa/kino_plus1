import Image from "next/image";
import styles from "./page.module.css";
import Home_search from "@/components/home_search/Home_search";
import Home_trends from "@/components/home_trends/Home_trends";
import Home_rec from "@/components/home_rec/Home_rec";

export default function Home() {
  return (
    <div className={styles.page}>
      <Home_search/>
      <Home_trends/>
      <Home_rec/>
    </div>
  );
}
