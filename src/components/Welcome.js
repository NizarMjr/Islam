const Welcome = () => {
    return (
        <main className="h-dvh">
            <div className="text-center p-8 text-xl leading-[2] bg-[#028478] text-[#d9edeb] h-auto">
                <h2 className="text-4xl my-8 font-bold tracking-[1px]">موقع إقرأ وارتقي  </h2>
                <p className="sm:my-8 max-sm:text:md">
                    مرحبًا بك في واجهة صفحتنا المميزة لقراءة القرآن الكريم والاستماع للآيات الشريفة! تمتع بتجربة مميزة من خلال قراءة نصوص القرآن والاستماع لها بأصوات مختلفة من أشهر القراء المشهورين عالميًا.
                    في هذه الصفحة، يمكنك اختيار القارئ المفضل لديك والتفاعل مع القرآن بطريقة جديدة ومبتكرة،
                </p>
                <div className="relative sm:w-[calc(100%-100px)] mx-auto sm:mt-[8rem] mb-16">
                    <input type="text" placeholder="البحث في الموقع" className="rounded p-2 my-4 w-full" />
                    <button className="absolute right-8 top-1/2 -translate-y-1/2 rounded px-2 font-bold text-white bg-[#028478]">البحث</button>
                </div>
            </div>
        </main>
    )
}
export default Welcome;