import "./globals.css";

export const metadata = {
  // title: "KM APP",
  // description: "KM APP - PREMIUM VERSION 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
