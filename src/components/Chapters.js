import { useEffect, useState } from "react";
import Surah from "./Surah";

const Chapters = ({ style }) => {
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        const fetchChapters = async () => {
            const response = await fetch(`https://api.quran.com/api/v4/chapters`);
            const result = await response.json()
            setChapters(result.chapters);
        }
        fetchChapters();
    }, [])

    return (
        <main className={`${style} gap-4 max-w-full`}>
            {chapters?.map((ch, index) => {
                return <Surah info={{ 'ID': index + 1, 'juz': '' }} key={index} />
            })}
        </main>
    )
}
export default Chapters;