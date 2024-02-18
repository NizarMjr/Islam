import Navbar from "@/components/Navbar";
import Summer from "@/components/Summer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CodeVerseKey from "@/components/CodeVerseKey";
import BtnAyah from "@/components/BtnAyah";
import SurahName from "@/components/SurahName";
import Reciters from "@/components/Reciters";
import Footer from "@/components/Footer";

const Detail = () => {

    const info = useSelector(state => state.getSurah);
    const [surah, setSurah] = useState();

    useEffect(() => {
        const fetchSurah = async () => {
            const response = await fetch(`https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=${info.ID}&juz_number=${info.juz}&page_number=${info.page}`);
            const result = await response.json();
            setSurah(result.verses);
        }
        fetchSurah();
    }, [info])

    const toggleSummer = () => {
        const className = document.getElementsByClassName('summer')[0];
        className.classList.contains('hidden') ? className.classList.remove('hidden') : className.classList.add('hidden')
    }
    return (
        <main className="bg-[#eee] h-auto mb-8">
            <Navbar />
            <Summer toggleSummer={toggleSummer} />
            <main className="md:w-[calc(100%-400px)] h-full md:absolute top-24 rounded left-96 bg-[#eee] flex flex-col items-center justify-center h-screen">
                <Reciters />
                <SurahName id={info.ID} />
                <div className="rtl p-2 h-full scrollbar overflow-scroll w-full">
                    <img src="../../assets/Basmala.svg.png" className="w-[200px] mx-auto my-[1rem]" />
                    {surah?.map((sur) => {
                        return (
                            <div key={sur.id} className="bg-white my-4 rounded h-auto flex items-center justify-between font-400 quranic-text p-2">
                                <div className="">
                                    <span role="button" className="flex leading-[2] tracking-wide text-2xl"><CodeVerseKey id={info.ID} verseKey={sur.verse_key} text={sur.text_imlaei} /></span>
                                </div>
                                <BtnAyah ayah={sur.verse_key} />
                            </div>
                        )
                    })}
                </div>
            </main>
        </main>
    )
}
export default Detail;