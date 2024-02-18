import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const SurahName = ({ id }) => {
    const [detail, setDetail] = useState();
    const [mp3, setMp3] = useState('');
    const recitation = useSelector(state => state.getRecitationID)
    const [play, setPlay] = useState(false);
    const audioRef = useRef()

    useEffect(() => {
        const fetchDetail = async () => {
            const response = await fetch(`https://api.quran.com/api/v4/chapters/${id}`)
            const result = await response.json()
            setDetail(result.chapter.name_arabic)
        }
        const fetchAudio = async () => {
            const response = await fetch(`https://api.quran.com/api/v4/chapter_recitations/${recitation}/${id}`)
            const result = await response.json()
            setMp3(result.audio_file.audio_url)
        }
        fetchDetail();
        fetchAudio();
    }, [id, recitation])

    return (
        <div className="text-center">
            <h2 className="quranic-text font-bold text-5xl my-4 tracking-wider">سورة {detail}</h2>
            <img src="../../assets/Basmala.svg.png" className="w-[calc(100%-150px)] mx-auto my-[1rem]" />
            {mp3 && <audio ref={audioRef}
                src={mp3}
                controls
                className="mx-auto w-full"
            />}
        </div>
    )
}
export default SurahName;