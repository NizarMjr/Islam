import { getSurah } from "@/redux/Actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Pages = ({ style }) => {
    const [pages, setPages] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const arr = [];
        for (let i = 1; i <= 604; i++) arr.push({ 'id': i });
        setPages(arr)
    }, [])

    return (
        <main className={`${style} gap-4 max-w-full`}>
            {pages?.map((p, index) => {
                return (
                    <Link href={`/${p.id}`} onClick={() => dispatch(getSurah({ 'ID': '', 'juz': '', 'page': p.id }))} key={index}>
                        <div className="bg-white p-2 rounded border-[1px] mt-4">
                            <div className="hover:border-[#3498db] cursor-pointer p-2 flex justify-between items-center">
                                <span className="bg-[#f4f5f6] w-8 h-8 flex items-center justify-center rotate-45"><span className="-rotate-45 text-[#028478] font-bold">{p.id}</span></span>
                                <div>
                                    <p className="font-bold text-[#1c3f39]">الصفحة {p.id}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </main>
    )
}
export default Pages;