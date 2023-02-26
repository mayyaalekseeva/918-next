import "./globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
});

export const metadata = {
  title: "9/18 бистро Нижний Новгород",
  description:
    "Официальный сайт кафе-бистро 9/18 (Нижний Новгород). Контакты: +7 (986) 769-00-99, Часы работы: Пн - Вс с 8.00 до 22.00 ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <h1>Header</h1>

        {children}
        <h1>Footer</h1>
      </body>
    </html>
  );
}
