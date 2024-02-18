import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CiPause1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";

const BtnAyah = ({ ayah }) => {
    const [audioAyah, setAudioAyah] = useState('');
    const recitation = useSelector(state => state.getRecitationID)
    const [play, setPlay] = useState(false)
    const audioRef = useRef();
    const [url, setUrl] = useState('');

    useEffect(() => {
        const fetchAudioOfAyah = async () => {
            try {
                const response = await fetch(`https://api.quran.com/api/v4/recitations/${recitation}/by_ayah/${ayah}`);
                const result = await response.json();
                setAudioAyah(result.audio_files[0].url);
            }
            catch (error) {
                console.error('Error fetching audio of ayah:', error);
            }
        }
        fetchAudioOfAyah();
    }, [recitation, ayah])

    useEffect(() => {
        audioAyah?.includes('quranicaudio') ? setUrl(audioAyah) : setUrl(`https://verses.quran.com/${audioAyah}`)
    }, [audioAyah])

    const playAyah = () => {
        if (audioAyah) play ? audioRef.current.pause() : audioRef.current.play();
        setPlay(!play)
    }

    return (
        <div className="basis-[50px] flex flex-col items-center gap-4">
            <span className="cursor-pointer" onClick={() => playAyah()}>
                {!play ?
                    <CiPlay1 className='text-[#028478] text-xl' />
                    : <CiPause1 className='text-[#028478] text-xl' />}
                {audioAyah &&
                    <audio ref={audioRef}
                        src={url}
                        onEnded={() => setPlay(false)}
                    />}
            </span>
            <span className="cursor-pointer ">
                <IoMdBook className='text-[#028478] text-xl' />
            </span>
        </div>
    )
}
export default BtnAyah;