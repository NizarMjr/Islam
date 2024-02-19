import { setEndpoint } from "@/redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Juzs from "./Juzs";
import Chapters from "./Chapters";
import Pages from "./Pages";

const Content = () => {
    const endpoint = useSelector(state => state.setEndpoint);

    const dispatch = useDispatch();

    const activeBtn = (cls, endp) => {
        document.getElementsByClassName('active')[0].classList.remove('active');
        document.getElementsByClassName(cls)[0].classList.add('active');
        dispatch(setEndpoint(endp));
    }
    return (
        <main>
            <main className="container">
                <div className="flex sm:flex-row flex-col items-center justify-between my-8">
                    <h2 className="sm:mb-0 mb-8 font-bold text-3xl h-full quranic-text">القرآن الكريم</h2>
                    <div className="p-2 flex justify-between items-center text-[#5a676f] text-[1.1rem] mb-4 rounded border border-[#d9edeb]">
                        <span className="btn btn1 font-bold active cursor-pointer p-2 rounded text-[12px]" onClick={() => activeBtn('btn1', 'chapters')}>السورة</span>
                        <span className="btn btn2 font-bold cursor-pointer p-2 rounded text-[12px]" onClick={() => activeBtn('btn2', 'juzs')}>الجزء</span>
                        <span className="btn btn3 font-bold cursor-pointer p-2 rounded text-[12px]" onClick={() => activeBtn('btn3', 'pages')}>الصفحة</span>
                    </div>
                </div>
                {endpoint === 'juzs' ? <Juzs style={'large-screen'} /> : endpoint === 'chapters' ? <Chapters style={'large-screen'} /> : <Pages style={'large-screen'} />}
            </main>
        </main>

    )
}
export default Content;