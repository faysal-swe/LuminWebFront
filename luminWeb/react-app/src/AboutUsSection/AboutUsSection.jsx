import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUsSection = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <div className='max-w-7xl mx-auto my-5'>
            <div data-aos="fade-up-right" className="">
                <h1 style={{ color: "#BED62F" }} className='text-3xl md:text-7xl'>Who “Lumen Corporation” are?
                </h1>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
                <div data-aos="zoom-in-down" className="">
                    <img className='h-72' src="https://cdn.pixabay.com/photo/2015/03/03/07/21/fabric-657038_640.jpg" alt="" />
                </div>
                <div className="">
                    <p>Lumen Corporation is the unique international one stop service center for textile raw material, footwear raw material sourcing and textile & footwear machineries. Lumen Corporation is chastely a service company offering all types of required raw materials and machineries at competitive price, withib required stipulated lead time and guranteed quality assurance, sustainable innovative products and proving a complete solution for supply chain managemnet in textile industry and footwear  industry.</p>
                </div>
            </div>

            <div data-aos="fade-up-right" className="">
                <h1 style={{ color: "#BED62F" }} className='text-3xl md:text-7xl'>What “Lumen Corporation” do?
                </h1>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
                <div data-aos="zoom-in-down" className="">
                    <img className='h-72' src="https://cdn.pixabay.com/photo/2015/03/03/07/21/fabric-657038_640.jpg" alt="" />
                </div>
                <div className="">
                    <p>We are profoundly working to enhance your company growth and to grow mutually faster. Lumen Corporation believes in continuous sustainable win-win partnership business and works as your international sourcing and supply chain management partner or team. We ensure effective and efficient raw material, machineries sourcing for your company and smooth out your business process and maximize your profitability.</p>
                </div>
            </div>

            <div data-aos="fade-up-right" className="">
                <h1 style={{ color: "#BED62F" }} className='text-3xl md:text-7xl'>Why “Lumen Corporation”?
                </h1>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
                <div data-aos="zoom-in-down" className="">
                    <img className='h-72' src="https://cdn.pixabay.com/photo/2015/03/03/07/21/fabric-657038_640.jpg" alt="" />
                </div>
                <div className="">
                    <p>We are enthusiastic to a partnership business further than trading or agent-ship actions. We are working for your company’s sustainable continuous development and ensuring your cost-effectiveness and maximizing profitability by introducing technologically sophisticated sustainable machines technology and synchronized sustainable raw materials to meet the demand of universe to make it a better place to live on.</p>
                </div>
            </div>

            
        </div>
    )
}

export default AboutUsSection;
