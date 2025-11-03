import '../style/custom.css'; // Relative path ile CSS import
import './globals.css'; // Eğer Tailwind globals varsa

export const metadata = {
  title: 'Yazılım Firma',
  description: 'Modern yazılım çözümleri',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

