import { useEffect, useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

import waveImg from '../assets/wave.gif';

const servicesData = [
    {
        title: "HST",
        content: "300-1500km",
        description: "Used for astronomical observations, capturing stunning images of the universe.",
        icon: <FaReact className="text-7xl" />,
        aosDelay: "300"
    },
    {
        title: "ISS",
        content: "500-1500km",
        description: "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
        icon: <FaShuttleSpace className="text-7xl" />,
        aosDelay: "500"
    },
    {
        title: "GPS",
        content: "300-1500km",
        description: "Part of the Global Positioning System (GPS) used for navigation.",
        icon: <FaSpaceAwesome className="text-7xl" />,
        aosDelay: "700"
    },
];

function Services() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(servicesData);
    }, []);

    return (
        <div className='bg-black text-white relative z-50'>
            <div className="container">
                <div className="min-h-[400px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                        {data?.length > 0 && data.map((service, i) => (
                            <div key={i} className='min-h-[180px] flex flex-col justify-center
                                items-center rounded-xl bg-sky-900/60 backdrop-blur-sm gap-2
                                text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'
                                data-aos="fade-up" data-aos-delay={service.aosDelay}>
                                {service.icon}
                                <h1>
                                    {service.title}
                                </h1>
                                <p>
                                    {service.content}
                                </p>
                                <p className='text-sm'>
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <img src={waveImg} alt="wave" className='h-[200px] w-full object-cover
                        mix-blend-screen -translate-y-24 relative z-0' />
                </div>
            </div>
        </div>
    );
}

export default Services;
