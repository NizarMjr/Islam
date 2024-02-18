import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-4 text-[#d9edeb] bg-[#028478] h-auto p-4 text-center">
            <p className="text-2xl mb-8"> 2024 جميع الحقوق محفوظه </p>
            <div className="flex items-center justify-between w-[200px] mx-auto">
                <FaFacebookF className="text-2xl" />
                <FaLinkedinIn className="text-2xl" />
                <FaGithub className="text-2xl" />
            </div>
        </footer>
    )
}
export default Footer;