import Link from 'next/link';
import { getMenu } from '../lib/wordpress';
import Image from 'next/image';

export default async function Header() {
  const menuItems = await getMenu();

  return (
    <header className="max-w-[1440px] mx-auto bg-white flex items-center justify-between p-4">
      <div className=''><Link href='/'><Image src="/images/Motovise_Logo.svg" alt="Motovise Logo" width={200} height={100} /></Link></div>
      <nav className="flex gap-6">
        {/* {menuItems.map(item => (
          <a key={item.uri} href={item.uri}>
            {item.label}
          </a>
        ))} */}
        {menuItems.map((item, index) => (
          <Link key={`${item.label}-${index}`} href={item.uri}>
            {item.label}
          </Link>
        ))}
      </nav>
     
    </header>
   
  );
}
