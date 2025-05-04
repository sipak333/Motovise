import { DM_Serif_Text, Schibsted_Grotesk } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

const dmSerif = DM_Serif_Text({ weight: '400', subsets: ['latin'], variable: '--font-dm-serif' });
const grotesk = Schibsted_Grotesk({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-grotesk' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${grotesk.variable}`}>
      <body>
        <Header />
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
