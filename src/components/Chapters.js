import { useEffect, useState } from "react";
import Surah from "./Surah";

const Chapters = ({ style }) => {
    const [chapters, setChapters] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchChapters = async () => {
            const response = await fetch(`https://api.quran.com/api/v4/chapters`);
            const result = await response.json()
            setChapters(result.chapters);
        }
        fetchChapters();
    }, [chapters])

    return (
        <main>
            <main className={`${style} gap-4 max-w-full`}>
                {show ?
                    chapters?.map((ch, index) => {
                        return <>
                            <Surah info={{ 'ID': index + 1, 'juz': '' }} key={index} />
                        </>
                    }) : chapters.slice(0, 10)?.map((ch, index) => {
                        return <>
                            <Surah info={{ 'ID': index + 1, 'juz': '' }} key={index} />
                        </>
                    })
                }
            </main>
            {!show && <button className="block mx-auto my-8 rounded bg-[#028478] p-2 text-[#d9edeb] font-bold w-[150px]" onClick={() => setShow(true)}>عرض المزيد </button>
            }
        </main>

    )
}
export default Chapters;