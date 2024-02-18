import { getSurah } from "@/redux/Actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Surah = ({ info }) => {
    const dispatch = useDispatch()
    const [surah, setSurah] = useState('');

    useEffect(() => {
        const fetchSurah = async () => {
            const response = await fetch(`https://api.quran.com/api/v4/chapters/${info.ID}`);
            const result = await response.json();
            setSurah(result.chapter);
        }
        fetchSurah();
    }, [info])

    return (
        <main className="bg-white p-2 rounded border-[1px] mb-4">
            <Link href={`/${surah.id}`} onClick={() => dispatch(getSurah({ 'ID': surah.id, 'juz': info.juz, 'page': '' }))}>
                <div className="hover:border-[#3498db] cursor-pointer p-2 flex justify-between items-center">
                    <span className="bg-[#f4f5f6] w-8 h-8 flex items-center justify-center rotate-45"><span className="-rotate-45 text-[#028478] font-bold">{surah.id}</span></span>
                    <div>
                        <p className="font-bold text-[#1c3f39]">{surah.name_arabic}</p>
                        <p className="font-500 text-[#1c3f39]">{surah.name_simple}</p>
                    </div>
                    <p className="text-sm font-bold text-[gray]">اياتها :{surah.verses_count}</p>
                    <p className="font-bold text-[#1c3f39]">{surah.revelation_place === 'makkah' ? 'مكية ' : 'مدنية'}</p>
                </div>
            </Link>
        </main>
    )
}
export default Surah;