import React from 'react';
import bgHome from '../assets/bgHome.png';
import Navbar from '../components/Navbar';
import logoErp from '../assets/logoErp.png';
import Pricing from './Pricing';
import About from './About';
import ContactUs from './ContactUs';

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        style={{ backgroundImage: `url(${bgHome})` }}
        className='bg-cover bg-fixed '>
        <section
          className='container px-4 mx-auto flex flex-wrap items-center justify-between w-screen pt-72 pb-20'
          id='home'>
          <div className='grid grid-cols-2 w-full'>
            <div className='w-full -mt-16'>
              <img
                src={logoErp}
                alt='logoErp'
              />
            </div>
            <div className='w-full text-right'>
              <p className='text-xl font-semibold'>
                Karyawan yang luar biasa layak
              </p>
              <p className='text-4xl font-bold mt-2'>
                mendapatkan software luar biasa
              </p>
              <p className='text-md mt-5'>
                Satu-satunya platform yang Anda butuhkan untuk menjalankan
                bisnis Anda:
              </p>
              <p>
                aplikasi yang terintegrasi, sederhana, dan dicintai oleh jutaan
                pengguna berbahagia.
              </p>
              <button className='btn bg-blue-600 text-white hover:bg-blue-900 mt-12'>
                mulai sekarang juga
              </button>
            </div>
          </div>
        </section>
        <About />
        <Pricing />
        <ContactUs />
      </main>
    </>
  );
}
