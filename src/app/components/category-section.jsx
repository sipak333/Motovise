import Image from "next/image";
import { getCategory } from "../lib/wordpress";

export default async function Category() {
    const categoryItems = await getCategory();

    return (
        <section className="py-[80px]">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryItems.slice(0, 4).map((item, index) => (
                    <div
                        key={index}
                        className={`flex ${
                            index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'
                        } gap-4 items-center`}
                    >
                        <div className="category__title w-full h-full flex items-center justify-center text-center py-4 bg-[#f2f2f2] rounded">
                            <h2 className="text-4xl max-w-[270px]">
                                {item.name}
                            </h2>
                        </div>

                        {item.categoryImage && (
                            <Image
                                src={item.categoryImage}
                                alt={item.name}
                                width={400}
                                height={300}
                                className="rounded w-full h-auto"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
