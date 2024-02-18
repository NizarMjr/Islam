import { useEffect, useState } from "react";

const CodeVerseKey = ({ id, verseKey, text }) => {

    const [code, setCode] = useState();

    useEffect(() => {
        const fetchCodeKey = async () => {
            const response = await fetch(`https://api.quran.com/api/v4/quran/verses/code_v2?chapter_number=${id}&verse_key=${verseKey}`)
            const result = await response.json();
            setCode(result.verses)
        }
        fetchCodeKey();
    }, [id, verseKey])

    return (
        <div>
            {code?.map((c) => {
                return <span role="button" className="text-2xl" key={c.id}>{text} {c.code_v2[0]}</span>
            })}
        </div>
    )
}
export default CodeVerseKey;