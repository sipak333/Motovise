import { getMenu } from '../lib/wordpress';
import Image from 'next/image';

export default async function Header() {
  const menuItems = await getMenu();

  return (
    <header className="max-w-[1440px] mx-auto bg-white flex items-center justify-between p-4">
      <div className=''><Image src="/images/Motovise_Logo.svg" alt="Motovise Logo" width={200} height={100} /></div>
      <nav className="flex gap-6">
        {/* {menuItems.map(item => (
          <a key={item.uri} href={item.uri}>
            {item.label}
          </a>
        ))} */}
        {menuItems.map((item, index) => (
          <a key={`${item.label}-${index}`} href={item.uri}>
            {item.label}
          </a>
        ))}
      </nav>
     
    </header>
   
  );
}
