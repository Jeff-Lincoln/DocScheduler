import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';


const About = () => {
  return (
    <section>
      <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
          {/* ======about img======== */}
          <div className='relative w-3/4 lg:w-1/2 xl:w-770px z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[30%] md:right-[-7%] lg:right-[22%] ">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* ======= about content ======= */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className='heading'>Proud to be one of the nation's best</h2>
            <p className='text_para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ab, corporis veniam? Sapiente qui saepe nobis eius,
              porro adipisci pariatur dolor,
              autem sunt dolores placeat architecto mollitia error ad?
              Dolorem, voluptate.
            </p>

            <p className='text_para mt-[30px]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sit deserunt blanditiis,
              repudiandae et est dolorum voluptatibus sint vitae officia eos earum porro,
              maiores autem aliquam quis! Cum esse dicta sunt.
            </p>

            <Link to='/'>
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    
  )
};

export default About;







// import React from 'react';
// import aboutImg from '../assets/images/about.png';
// import aboutCardImg from '../assets/images/about-card.png'
// import Home from '../pages/Home';

// const About = () => {
//   return (<section>
//     <div className="contanier">
//         <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
//             {/** ======about img======== */}
//             <div className='relative w-3/4 lg:w-1/2 xl:w--770px] z-10 order-2 lg:order-1'>
//                 <img src={aboutImg} alt="" />
//                 <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[30%] md:right-[-7%] 
//                 lg:right-[22%] ">
//                     <img src={aboutCardImg} alt="" />
//                 </div>
//             </div>

//             {/**======= about content =======*/}
//             <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
//                 <h2 className='heading'>Proud to be one of the nations best</h2>
//                 <p className='text_para'>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                      Ab, corporis veniam? Sapiente qui saepe nobis eius, 
//                      porro adipisci pariatur dolor, 
//                      autem sunt dolores placeat architecto mollitia error ad? 
//                      Dolorem, voluptate.
//                 </p>

//                 <p className='text_para mt-[30px]'>
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit deserunt blanditiis, 
//                     repudiandae et est dolorum voluptatibus sint vitae officia eos earum porro, 
//                     maiores autem aliquam quis! Cum esse dicta sunt.
//                 </p>

//                 <link to='/Home'>
//                     <button className="btn">Learn More</button>
//                 </link>
//             </div>
//         </div>
//     </div>
//   </section>
 
//   )
// };

// export default About;
