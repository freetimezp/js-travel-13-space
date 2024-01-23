

function Hero() {
    return (
        <div className="bg-black/20 h-full text-white relative z-50">
            <div className="h-full flex justify-center items-center p-4">
                <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-4 lg:pr-36">
                        <h1 className="text-5xl font-normal uppercase">
                            Orbite The Earth
                        </h1>
                        <p className="opacity-70">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Est architecto iure sed, aperiam quas iusto sequi neque
                            beatae hic. Repellendus minus, laborum illum illo aperiam
                            itaque consequuntur tempora ipsa eum explicabo rem. Veritatis,
                            recusandae iusto.
                        </p>
                        <button className="bg-blue-500/70 text-white hover:bg-blue-500 px-4 py-1
                            rounded-sm transition-all duration-400">
                            Learn More
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
