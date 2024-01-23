
import sateliteImg from '../assets/satelite2.jpg';

function BannerR() {
    return (
        <div className="bg-black/80 text-white pb-12 relative z-50 py-12 sm:py-36">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div className='space-y-3 xl:pr-24 p-4 border-l-2 border-b-2 
                        border-l-sky-800 border-b-sky-800 shadow-md sm:mr-24 order-2 sm:order-1'>
                        <p className='text-sky-700 uppercase'
                            data-aos="fade-up" data-aos-delay="300">
                            Our Mission
                        </p>
                        <h1 className='uppercase text-5xl'
                            data-aos="fade-up" data-aos-delay="500">
                            Rapidcast
                        </h1>
                        <p className='opacity-70 text-justify opacity-70 text-[13px]'
                            data-aos="fade-up" data-aos-delay="700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsa cupiditate rerum molestias voluptas, praesentium assumenda
                            iusto voluptate numquam amet animi quisquam dolor veritatis,
                            deleniti dolores accusantium, voluptatum debitis vitae obcaecati
                            dicta totam nihil hic voluptates distinctio alias! Aut et ab quaerat
                            a porro possimus, maxime officiis quas voluptatem nihil aspernatur
                            iure ecessitatibus ullam molestiae tempore.
                        </p>
                        <button className='primary-btn' data-aos="fade-up" data-aos-delay="900">
                            Learn More
                        </button>
                    </div>
                    <div className='mt-10 sm:mt-0 order-1 sm:order-2'>
                        <img src={sateliteImg} alt="banner" data-aos="zoom-in"
                            className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerR;
