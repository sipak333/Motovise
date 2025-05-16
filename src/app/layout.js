import { DM_Sans, Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

const dmSans = DM_Sans({ weight: '400', subsets: ['latin'], variable: '--font-dm-sans' });
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-poppins' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main className="max-w-[1440px] mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
