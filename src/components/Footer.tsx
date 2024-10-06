export default function Footer(){
    return(
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 item-center px-4 md:px-6 border-t">
            <p
                className="text-xs text-gray-500 dark:text-gray-400"
            >© 2024 codeZ. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                {/* <Link className="text-xs hover:underline underline-offset-4" to="">Terms of Services</Link> */}
                {/* <Link className="text-xs hover:underline underline-offset-4" to="">Privacy Policy</Link> */}
                <div className="text-xs hover:underline underline-offset-4">
                    <a href="/">Terms of Services</a>
                </div>
                <div className="text-xs hover:underline underline-offset-4">
                    <a href="/">Privacy Policy</a>
                </div>
            </nav>
        </footer>
    );
}