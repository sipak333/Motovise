import Link from 'next/link';

export default function PageHeader({ title, breadcrumbs = [] }) {
    return (
        <div className="breadcrumb w-full text-center bg-[#EBEEF3] py-[60px] rounded-md">
            <div className="max-w-7xl mx-auto">
              

                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                    {title}
                </h1>
                  {/* Breadcrumbs */}
                <nav className="text-sm text-gray-500 mb-2 md:mb-4 text-center">
                    <ol className="flex flex-wrap space-x-2 justify-center">
                        <li>
                            <Link href="/" className="hover:text-blue-600">Home</Link>
                        </li>
                        {breadcrumbs.map((crumb, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <span className="mx-1">/</span>
                                {crumb.href ? (
                                    <Link href={crumb.href} className="hover:text-blue-600">{crumb.label}</Link>
                                ) : (
                                    <span className="text-gray-700">{crumb.label}</span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
}