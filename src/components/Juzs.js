import { useEffect, useState } from "react";
import Surah from "./Surah";

const Juzs = ({ style }) => {

    const [data, setData] = useState();

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
                {data?.map((juz) => {
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
        </main >
    )
}
export default Juzs;