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
            <p className="text-center my-16 p-8 text-xl leading-[2] text-[#028478] bg-[#d9edeb]">
                مرحبًا بك في واجهة صفحتنا المميزة لقراءة القرآن الكريم والاستماع للآيات الشريفة! تمتع بتجربة مميزة وملهمة لاستكشاف الكلام الإلهي من خلال قراءة نصوص القرآن والاستماع لها بأصوات مختلفة من أشهر القراء المشهورين عالميًا.
                في هذه الصفحة، يمكنك اختيار القارئ المفضل لديك والتفاعل مع القرآن بطريقة جديدة ومبتكرة. اكتشف واستمع إلى الآيات التي تلهم قلبك وتنير دربك،
                انغمس في عالم القرآن الكريم، ودعنا نرافقك في رحلتك الروحية إلى سماء العلم والإيمان.
            </p>
            <main className="container">
                <div className="flex sm:flex-row flex-col items-center justify-between mb-8">
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