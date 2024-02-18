const Welcome = () => {
    return (
        <main className="h-screen">
            <img src="../../assets/welcome.webp" className="relative h-screen w-full " />
            <input type="text" placeholder="محرك البحث " className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1/2 bg-[#eee] rounded p-2 mx-auto" />
        </main>
    )
}
export default Welcome;