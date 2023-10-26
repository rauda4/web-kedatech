import React from 'react';
import imgAboutme from '../assets/screens-mockup.png';

export default function About() {
  return (
    <section
      className='container mt-10 px-4 mx-auto justify-between w-screen h-screen'
      id='aboutme'>
      <div className='grid grid-cols-2 gap-6 h-full'>
        <div className='mt-40'>
          <p className='font-bold text-3xl'>Tidak ada lagi integrasi rumit.</p>
          <div className='text-lg mt-6'>
            Jika Anda memiliki solusi software yang masing-masing bekerja dengan
            baik tapi tidak berkomunikasi satu sama lain, Anda harus sering
            keluar masuk software dan kemungkinan besar akan kehilangan gambaran
            komprehensif tentang apa yang sedang terjadi.
            <p className='mt-6'>
              Antara aplikasi xyz dan puluhan ribu aplikasi Komunitas, terdapat
              sesuatu yang bisa membantu Anda memenuhi seluruh kebutuhan bisnis
              Anda melalui satu solusi modular yang hemat biaya: Anda tidak
              perlu lagi membangun kerja sama antara teknologi yang berbeda.
            </p>{' '}
            <p className='mt-6'>
              Aplikasi xyz terintegrasi sempurna satu sama lain, memungkinkan
              Anda untuk mengotomatisasi seluruh proses-proses bisnis Anda dan
              menuai penghematan dan keuntungan.
            </p>
          </div>
          <p className='font-bold text-3xl mt-10'>Visi</p>
          <p className='text-lg mt-6'>
            “Menjadi pemimpin dalam inovasi dan penerapan teknologi, dengan
            mengintergrasikan praktik bisnis yang terstandardisasi, teknologi
            yang terjangkau dan mudah digunakan sehingga dapat mengubah cara
            bisnis sehari-hari menjadi lebih efisien dan berkualitas.”
          </p>
          <p className='font-bold text-3xl mt-10'>Misi</p>
          <p className='text-lg mt-6'>
            Memastikan keunggulan produk dan pelayanan kami melalui standar
            jaminan mutu yang telah terstandardisasi.
          </p>
          <p className='text-lg mt-6'>
            Menerapkan praktik bisnis terbaik di setiap industri pelanggan.
          </p>
          <p className='text-lg mt-6'>
            Menjamin kepuasan pelanggan dengan memberikan solusi bisnis yang
            sudah teruji.{' '}
          </p>
        </div>
        <div className='flex justify-end ml-20'>
          <img
            src={imgAboutme}
            alt='aboutImg'
          />
        </div>
      </div>
    </section>
  );
}
