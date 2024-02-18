import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const BurgerBar = () => {
    const [showBurger, setShowBurger] = useState(false);

    const displayBurgerMenu = () => {
        setShowBurger(true);
    }
    const hideBurgerMenu = () => {
        setShowBurger(false);
    }
    return (
        <main className="sm:hidden z-1000">
            <div>
                {!showBurger ? <GiHamburgerMenu className="text-2xl cursor-pointer" onClick={() => displayBurgerMenu()} /> :
                    <IoIosCloseCircleOutline className="cursor-pointer text-3xl font-bold" onClick={() => hideBurgerMenu()} />
                }
                {showBurger && <div className={`transition duration-300 ease-in-out font-bold py-4 fixed top-[65px] ${showBurger ? 'h-[300px]' : 'h-0'} left-1/2 -translate-x-1/2 w-full h-[200px] bg-main-green text-[#d9edeb] flex items-center flex-col justify-center text-center`}>
                    <ul>
                        <li className="p-2">القران الكريم</li>
                        <li className="p-2">أحاديث</li>
                        <li className="p-2">أدعية</li>
                        <li className="p-2">أذكار</li>
                        <li className="p-2">صوتيات</li>
                    </ul>
                </div>}
            </div>
        </main>
    )
}
export default BurgerBar;