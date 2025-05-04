import Link from "next/link";

export default function page(){
    return(
        <>
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-4xl font-bold ">404</h1>
                <p className="text-2xl text-gray-800 mt-4">Oops! Page not found.</p>
                <p className=" text-gray-600 mt-4">The page you are looking for doesn't exist.</p>
                <Link href="/" className="mt-6 px-4 py-2 bg-black text-white rounded">Go Back Home</Link>
            </div>
           
        </>
    )
}