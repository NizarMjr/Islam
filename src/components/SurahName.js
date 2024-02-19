import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { LuDownload } from "react-icons/lu";
import { LuPlayCircle } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";

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

    const playSurah = () => {
        const audioPlay = document.getElementsByClassName('play-surah')[0];
        audioPlay.classList.remove('hide');
        setPlay(true)
        audioRef.current.src = mp3;
        audioRef.current.play()
    }

    const stopPlayingSurah = () => {
        const audioPlay = document.getElementsByClassName('play-surah')[0];
        audioPlay.classList.add('hide');
        setPlay(false);
        audioRef.current.src = ''
    }

    return (
        <div className="rtl mb-8 px-4">
            <div className="flex sm:flex-row flex-col items-center justify-between gap-8">
                <p className="max-sm:text-center sm:text-xl text-lg tracking-wider w-fit-content"> قراءة وإستماع لسورة {detail} بالخط العثماني - نسخة المدينة المنورة برواية حفص عن عاصم</p>
                <div className="flex items-center justify-between w-fit-content ">
                    <div className="flex items-center cursor-pointer text-[#028478]" onClick={() => playSurah()}>
                        <span className="mx-2 font-bold">إستماع</span>
                        <LuPlayCircle />
                    </div>
                    <div className="flex items-center cursor-pointer text-[#028478]">
                        <span className="mx-2 font-bold">التحميل</span>
                        <a href={mp3} download={id}><LuDownload /></a>
                    </div>
                </div>
            </div>
            <div className="play-surah hide fixed bottom-0 left-0 w-full">
                {mp3 && <audio ref={audioRef}
                    src={mp3}
                    controls={play}
                    className="mx-auto w-full"
                />}
                <IoIosCloseCircle className="absolute bottom-0 left-1/2 text-2xl cursor-pointer" onClick={() => stopPlayingSurah()} />
            </div>
        </div>
    )
}
export default SurahName;