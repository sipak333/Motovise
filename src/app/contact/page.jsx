export default function Contact(){
    return(
        <>
            <h1 className="mb-4 text-4xl">Contact Us</h1>
            <p className="mb-4">If you would like to get in touch, Please dont hesitate to reach out to us using below information</p>
            <div className="flex flex-col md:flex-row justify-center w-full mb-6">
                <div className="w-full md:w-1/3 mb-4">
                    <h2 className="text-lg mb-2">Address</h2>
                    <p>123 Hyderabad, TS, IN</p>
                </div>
                <div className="w-full md:w-1/3 mb-4">
                    <h2 className="text-lg mb-2">Phone</h2>
                    <a href="tel:+919999999999">+91 9999 999 999</a>
                </div>
                <div className="w-full md:w-1/3 mb-4">
                    <h2 className="text-lg mb-2">E-mail</h2>
                    <a href="mailto:example@example.com">example@example.com</a>
                </div>
            </div>
        </>
    )

}