import { recitationID } from "@/redux/Actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Reciters = () => {
    const [reciters, setReciters] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchReciters = async () => {
            const response = await fetch(`https://api.quran.com/api/v4/resources/recitations?language=ar`);
            const result = await response.json();
            setReciters(result.recitations);
        }
        fetchReciters();
    }, [])

    const getRecitationID = (e) => {
        dispatch(recitationID(e));
    }

    return (
        <main className="rtl flex items-center justify-between w-full p-4">
            <p className="flex-1 sm:text-2xl font-bold text-[#028478]">قائمة القراء المتوفرين </p>
            <select onChange={(e) => getRecitationID(e.target.value)} className="sm:w-72 p-2 bg-[#d9edeb] text-[#028478]">
                {reciters?.map((rec, index) => {
                    if (rec.id !== 8)
                        return <option key={index} value={rec.id} className="font-bold p-4">{rec.translated_name.name}</option>
                })}
            </select>
        </main>
    )
}
export default Reciters;