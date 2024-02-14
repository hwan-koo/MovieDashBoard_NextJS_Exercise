// 클라이언트에서 렌더링된다는 의미가 아니다! client에서 hydrate된다는 의미
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "Now" : ""}
        </li>
        <li>
          <Link href="/about">About Team</Link> {path === "/about" ? "Now" : ""}
        </li>
      </ul>
    </nav>
  );
}
