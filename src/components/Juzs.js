import { useEffect, useState } from "react";
import Surah from "./Surah";

const Juzs = ({ style }) => {

    const [data, setData] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.quran.com/api/v4/juzs`);
            const result = await response.json();
            setData(result.juzs);
        }
        fetchData();
    }, [])

    return (
        <main className="container">
            <div className={`${style}`}>
                {show ? data?.map((juz) => {
                    return (
                        <div key={juz.id} className={`bg-[#f4f5f6] rounded p-4 h-[fit-content]`}>
                            <h2 className="font-bold">الجزء {juz.juz_number}</h2>
                            <div className="">
                                {Object.entries(juz.verse_mapping).map((ele, index) => {
                                    return <Surah info={{ 'juz': juz.id, 'ID': [ele] }} key={index} />
                                })}

                            </div>
                        </div>
                    )
                }) : data?.slice(0, 10).map((juz) => {
                    return (
                        <div key={juz.id} className={`bg-[#f4f5f6] rounded p-4 h-[fit-content]`}>
                            <h2 className="font-bold">الجزء {juz.juz_number}</h2>
                            <div className="">
                                {Object.entries(juz.verse_mapping).map((ele, index) => {
                                    return <Surah info={{ 'juz': juz.id, 'ID': [ele] }} key={index} />
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            {!show && <button className="block mx-auto my-8 rounded bg-[#028478] p-2 text-[#d9edeb] font-bold w-[150px]" onClick={() => setShow(true)}>عرض المزيد </button>}
        </main >
    )
}
export default Juzs;