import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beybars Oto Servis',
  description:
    'Beybars Oto Servis в Кестеле: диагностика, автоэлектрика и комплексный ремонт автомобиля.',
  robots: { index: true, follow: true },
  icons: { icon: '/logo_1.jpg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
