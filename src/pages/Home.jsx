import React from 'react';
import heroImage from '../assets/images/hero-img01.png';
import heroImage02 from '../assets/images/hero-img02.png';
import heroImage03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className='hero_section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[36px] md:leading-[70px]'>
                  We help patients live a healthy, longer life.
                </h1>
                <p className='text_para'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ad, voluptates consectetur.
                  Reiciendis doloremque nesciunt eligendi numquam tempore neque esse, commodi hic quos inventore voluptatibus magnam animi, modi perferendis. Maxime, quos!
                </p>
                <button className='btn'>Request an Appointment</button>
              </div>

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Years of Experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Clinic Location</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* Hero content */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className="w-full" src={heroImage} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img src={heroImage02} alt="" className='w-full mb-[30px]' />
                <img src={heroImage03} alt="" className='w-full' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections */}
      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Providing the best medical services
            </h2>
            <p className='text_para text-center'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
          </div>

          <div className='flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]'>
              <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                  <img src={icon01} alt="" />
                </div>
                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center '>
                    Find a Doctor
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the Clinic.
                  </p>
                  <div>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5' />
                    </Link>
                  </div>
                </div>
              </div>

              <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                  <img src={icon02} alt="" />
                </div>
                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center '>
                    Find a Location
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the Clinic.
                  </p>
                  <div>
                    <Link to='/locations' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5' />
                    </Link>
                  </div>
                </div>
              </div>

              <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                  <img src={icon03} alt="" />
                </div>
                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center '>
                    Book an Appointment
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the Clinic.
                  </p>
                  <div>
                    <Link to='/appointments' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section>
        <About />
      </section>

      {/* Services section */}
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Our Medical Services
            </h2>
            <p className='text_para text-center'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* Feature section */}
      <section>
        <div className="container">
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            {/* Feature content */}
            <div className='xl:w-[670px]'>
              <h2 className='heading'>
                Get virtual treatment <br />anytime.
              </h2>
              <ul className='pl-4'>
                <li className='text_para'>
                  1. Schedule the appointment directly.
                </li>
                <li className='text_para'>
                  2. Search for your physician here  and contact their office .
                </li>
                <li className='text_para'>
                  3. View our physicians who are accepting new patients, use the online scheduling tool to select
                   an appointment.
                </li>
                <Link to="/">
                  <button className='btn'>Learn more</button>
                </Link>
              </ul>
            </div>

            {/** ========feature img ====== */}
            <div className='relative 2-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} className='w=3/4' alt="" />
              
              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
              md:left-5 z-20 pb-3 lg:pl-4 lg:px-4 lg:pb-[26px] rounded-[10px] '>
                <div className='flex itmes-center justify-between'>
                  <div className='flex items-center-gap-[6px] '></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;




