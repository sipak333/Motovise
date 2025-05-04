import { getMenu } from '../lib/wordpress';

export default async function Header() {
  const menuItems = await getMenu();

  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex gap-6">
        {menuItems.map(item => (
          <a key={item.uri} href={item.uri}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
