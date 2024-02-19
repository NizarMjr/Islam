import BurgerBar from "./BurgerBar";

const Navbar = () => {
    return (
        <main className="text-[#028478] bg-[#d9edeb]">
            <nav className="container h-[70px] flex items-center justify-between font-bold py-2">
                <BurgerBar />
                <ul className="sm:flex hidden items-center justify-between basis-1/2 cursor-pointer">
                    <li>القران الكريم</li>
                    <li>أحاديث</li>
                    <li>أدعية</li>
                    <li>أذكار</li>
                    <li>صوتيات</li>
                </ul>
                <img className="h-full" src="../../assets/Quran.png" alt="logo" />
            </nav>
        </main>
    )
}
export default Navbar;