import "./globals.css";

export const metadata = {
  title: "Tayyaba Yaseen — Creative Designer & Digital Content Creator",
  description: "Creative Designer & Digital Content Creator portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
