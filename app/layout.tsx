import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";

export const metadata: Metadata = {
  title: { template: "%s | Movies Dashboard", default: "로딩중.." },
  description: "연습 설명",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
