/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import logo from './logo.svg';
import './App.css';

const teachers = [
  {
    name: 'Mr. Francis Nlemchi',
    title: 'Director- Business Development',
    src: 'https://res.cloudinary.com/event-manager-2018/image/upload/v1691852911/manager.jpg'
  },
  {
    name: 'Mrs Nlemchi Lilian Akunna',
    title: 'Head of School',
    src: 'https://res.cloudinary.com/event-manager-2018/image/upload/v1691853609/school_head.jpg'
  },
  {
    name: 'Janet Augustine',
    title: 'Facilitator',
    src: 'https://res.cloudinary.com/event-manager-2018/image/upload/v1691854159/pix1.jpg'
  },
  {
    name: 'Miss Precious Nlemchi',
    title: 'Facilitator Preschool',
    src: 'https://res.cloudinary.com/event-manager-2018/image/upload/v1691855711/precious.jpg'
  },
  {
    name: 'Miss Bridget Nlemchi',
    title: 'Facilitator Preschool',
    src: 'https://res.cloudinary.com/event-manager-2018/image/upload/v1691855919/bridget.jpg'
  },
]

const galleries =[
  "https://res.cloudinary.com/event-manager-2018/image/upload/v1691857529/child2.jpg",
  "https://res.cloudinary.com/event-manager-2018/image/upload/v1691857529/child1.jpg",
  "https://res.cloudinary.com/event-manager-2018/image/upload/v1691841697/cover.jpg",
  "https://res.cloudinary.com/event-manager-2018/image/upload/v1691859998/sampe1.jpg",
  "https://res.cloudinary.com/event-manager-2018/image/upload/v1691859998/sample6.jpg",
  "https://res.cloudinary.com/event-manager-2018/image/upload/v1691859998/sample2.jpg",
  "https://res.cloudinary.com/event-manager-2018/image/upload/v1691859998/sample4.jpg",
  "https://res.cloudinary.com/event-manager-2018/image/upload/v1691859998/sample3.jpg",
  "https://res.cloudinary.com/event-manager-2018/image/upload/v1691859999/sample5.jpg",
  "https://res.cloudinary.com/event-manager-2018/image/upload/v1691859999/sample7.jpg"
]

function App() {
  return (
    <div>
      <section className="h-[892px] bg-section-cover bg-no-repeat bg-cover bg-center">
        <div className="bg-section-1 py-[52px] px-[72px] h-full">
        <div className="flex items-center justify-between">
          <p className="font-bold text-4xl text-white">Kidzone</p>
          <div className="hidden md:flex md:items-center md:gap-3">
            <a href="#home" className="text-white font-mulish">Home</a>
            <a href="#gallery" className="text-white font-mulish">Gallery</a>
            <a href="#aboutus" className="text-white font-mulish">About Us</a>
            <a href="#contact-us" className="text-white font-mulish bg-067 py-2 px-4 rounded-[7px]">Contact</a>
          </div>
        </div>
          <div className="h-full flex items-center justify-center flex-col">
            <img height={300} width={300} src="https://res.cloudinary.com/event-manager-2018/image/upload/v1691841980/preview.png" alt="pix" />
            {/* <button className="text-white bg-067 rounded-full px-[43px] py-[15px] mt-[22px] font-bold text-2xl">Enroll Now</button> */}
          </div>
        </div>

      </section>
      <section id="aboutus" className="px-10 text-justify md:px-16 text-base md:text-xl py-12">
        <p className=" text-3xl md:text-[50px] mb-6 font-bold font-nunito text-center">About</p>
        <p className="font-medium">KidsZone Montessori was established on 15th February 2021 out of concern for providing quality early years education that is all encompassing for young children. Our services include- Creche, Pres-School, Lower Grade and After School.</p>
        <p className="font-medium my-6">Our vision is to develop well rounded, confident and responsible kids who aspire to achieve their full potential. We do this by providing a welcoming, happy, safe, and supportive learning environment in which each child is equal and all achievements are celebrated.</p>
        <p className="my-3 font-bold">Our Core Values include:</p>
        <ul>
          <li>- CARE</li>
          <li>- VIGILANCE</li>
          <li>- COURTESY  </li>
          <li>- HYGIENE</li>
          <li>- LOVE</li>
        </ul>
        <p className="mt-6 font-bold">Our Facilities Include:</p>
        <ul>
          <li>- Air-Conditioned Classroom</li>
          <li>- Spacious Artificial Turf grass Playground</li>
          <li>- Toys, Tablets , Puzzle and games  </li>
          <li>- Swing and Trampolin</li>
          <li>- Etc</li>
        </ul>
      </section>
      <section className="bg-CC7 min-h-[700px] px-16 text-xl py-12">
      <p className="text-3xl md:text-[50px] mb-12 font-bold font-nunito text-center">Our Programs</p>
      <div className="flex items-start gap-7">
        <div className="hidden md:flex md:flex-col">
          <img style={{ borderRadius: "18px", width:"300px"}} className='mb-6' src="https://res.cloudinary.com/event-manager-2018/image/upload/v1691859999/sample7.jpg" alt="pix" />
          <img style={{ borderRadius: "18px", width:"300px"}} src="https://res.cloudinary.com/event-manager-2018/image/upload/v1691859998/sample3.jpg" alt="pix" />
        </div>
        <ul className="ml-20 flex flex-col gap-7 font-mulish">
          <li className="font-bold text-2xl">- Creche</li>
          <li className="font-bold text-2xl">- Playgroup</li>
          <li className="font-bold text-2xl">- Nursery</li>
          <li className="font-bold text-2xl">- Pre-School</li>
          <li className="font-bold text-2xl">- After-School</li>
        </ul>
      </div>
      </section>
      <section id="gallery" className="min-h-[700px] px-16 text-xl py-12">
      <p className="text-3xl md:text-[50px] mb-10 font-bold font-nunito text-center">Our Gallery</p>
      <div className="hidden md:flex items-center gap-5 flex-wrap">
        {
          React.Children.toArray(
            galleries?.map((x) => (
              <img style={{ borderRadius: "18px", width: "30%"}} src={x} alt="img" />
            ))
          )
        }
      </div>
      <div className="flex md:hidden items-center gap-5 flex-wrap">
        {
          React.Children.toArray(
            galleries?.map((x) => (
              <img style={{ borderRadius: "18px", width: "100%"}} src={x} alt="img" />
            ))
          )
        }
      </div>
      </section>
      <section className="bg-CC7 min-h-[700px] px-6 md:px-16 text-xl py-12">
      <p className="text-3xl md:text-[50px] mb-12 font-bold font-nunito text-center">Our Services</p>
      <div className="flex items-start gap-7 justify-between">
        <ul className="ml-3 md:ml-20 flex flex-col gap-4 font-mulish">
          <li className="font-bold text-2xl">- Early child education</li>
          <li className="font-bold text-2xl">- Speech and Language Skill</li>
          <li className="font-bold text-2xl">- Walking skill</li>
          <li className="font-bold text-2xl">- Potty Training Assessment</li>
          <li className="font-bold text-2xl">- Self-care skill</li>
          <li className="font-bold text-2xl">- Social skills</li>
          <li className="font-bold text-2xl">- Advisory</li>
          <li className="font-bold text-2xl">- Consulting</li>
          <li className="font-bold text-2xl">- We Adopt Montessori</li>
          <li className="font-bold text-2xl">- Helping to develop milestone</li>
          <li className="font-bold text-2xl">- and Lot more</li>
        </ul>
        <div className="hidden md:flex md:flex-col">
          <img style={{ borderRadius: "18px", width:"300px"}} className='mb-6' src="https://res.cloudinary.com/event-manager-2018/image/upload/v1691859999/sample5.jpg" alt="pix" />
          <img style={{ borderRadius: "18px", width:"300px"}} src="https://res.cloudinary.com/event-manager-2018/image/upload/v1691859998/sample2.jpg" alt="pix" />
        </div>
      </div>
      </section>
      <section className="px-10 bg-FF3 min-h-[700px] md:px-16 text-xl py-12">
      <p className="text-3xl md:text-[50px] mb-6 font-bold font-nunito text-center">Our Teachers</p>
      <div className="flex justify-center md:justify-normal items-center gap-3 flex-wrap">
        {
          React.Children.toArray(
            teachers?.map((x) =>(
              <div className="shadow-md h-[440px] w-[280px] bg-white p-1 rounded-md">
        <img  style={{ height: "80%", width: "100%"}} src={x.src} alt="tea" />
        <div className="p-3">
        <p className="font-bold mt-3 text-sm">{x.name}</p>
        <p className="text-xs font-medium">{x.title}</p>
        </div>
        </div>
            ))
          )
        }
      </div>
      </section>
      <section id="contact-us" className="min-h-[700px] px-6 md:px-16 text-xl py-12 flex items-center justify-center flex-col">
      <p className="text-2xl md:text-[50px] mb-6 font-bold font-nunito text-center">HarmonyLand Kidzone Montessori</p>
      <p className="font-bold my-4">Address: <span className="font-medium">18 Ayinke Williams Street, Banku Estate, Warewa, Ogun state</span></p>
      <p className="font-bold my-4">Phone: <span className="font-medium">07085309484, 08094423166, 08033339545</span></p>
      <p className="my-4 font-bold">Time: <span className="font-medium">(Mon-Fri) 6AM - 6PM, (Saturday) 8AM-6PM</span></p>
      </section>
    </div>
  );
}

export default App;
