const today = new Date();
const currentYear = today.getFullYear();

const Footer = () => {

    return(
        <>
            <footer className="flex items-center h-[60px] justify-between p-4 max-w-[1440px] mx-auto">
                <ul className="flex gap-2">
                    <li><a href="www.facebook.com"><img src="/images/facebook.svg" className="w-[40px]"/></a></li>
                    <li><a href="www.instagram.com"><img src="/images/instagram.svg" className="w-[40px]"/></a></li>
                    <li><a href="www.twitter.com"><img src="/images/twitter.svg" className="w-[40px]"/></a></li>
                </ul>
                <p> &copy; {currentYear} blog.com | All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer;