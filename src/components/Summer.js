import Chapters from "./Chapters";
import { useDispatch, useSelector } from "react-redux";
import Juzs from "./Juzs";
import Pages from "./Pages";
import { setEndpoint } from "@/redux/Actions";

const Summer = ({ toggleSummer }) => {
    const endpoint = useSelector(state => state.setEndpoint);
    const dispatch = useDispatch();

    const activeBtn = (cls, endp) => {
        document.getElementsByClassName('active')[0].classList.remove('active');
        document.getElementsByClassName(cls)[0].classList.add('active');
        dispatch(setEndpoint(endp))
    }
    return (
        <main className={`summer transition md:fixed md:block hidden py-4 px-2 md:w-[300px] top-24 md:left-12 bg-[#eee] rounded-lg`}>
            <div className="bg-white p-2 flex justify-between items-center text-[#5a676f] text-[1.1rem] mb-4 rounded border border-[#d9edeb]">
                <span className="btn btn1 font-bold active cursor-pointer p-2 rounded text-[12px]" onClick={() => activeBtn('btn1', 'chapters')}>السورة</span>
                <span className="btn btn2 font-bold cursor-pointer p-2 rounded text-[12px]" onClick={() => activeBtn('btn2', 'juzs')}>الجزء</span>
                <span className="btn btn3 font-bold cursor-pointer p-2 rounded text-[12px]" onClick={() => activeBtn('btn3', 'pages')}>الصفحة</span>
            </div>
            <div className="flex items-center justify-between relative mb-8">
                <input type="text" placeholder="البحث عن السورة" className="rounded w-full px-2 py-3 border border-[#d9edeb]" />
                <div className="bg-[#d9edeb] rounded p-2 absolute flex items-center justify-between right-4">
                    <img src="../../assets/search.svg" className="w-[20px] h-[20px] " />
                </div>
            </div>
            {/* <div className="scrollbar overflow-scroll h-[calc(100vh-200px)]" onClick={() => toggleSummer()}>
                {endpoint === 'juzs' ? <Juzs style={'small-screen'} /> : endpoint === 'chapters' ? <Chapters style={'small-screen'} /> : <Pages style={'small-screen'} />}
            </div> */}

        </main>
    )
}
export default Summer;