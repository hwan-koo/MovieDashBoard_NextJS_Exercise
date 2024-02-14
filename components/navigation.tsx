// 클라이언트에서 렌더링된다는 의미가 아니다! client에서 hydrate된다는 의미
"use client";

import styles from "../styles/navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "✔️" : ""}
        </li>
        <li>
          <Link href="/about">About Team</Link> {path === "/about" ? "✔️" : ""}
        </li>
      </ul>
    </nav>
  );
}
