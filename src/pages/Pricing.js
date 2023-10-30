import React from 'react';

export default function Pricing() {
  return (
    <div>
      <section
        className='container md:mt-60 md:px-4 mx-auto justify-between w-screen'
        id='pricing'>
        <div className='text-center text-4xl py-20'>
          Ada <b>aplikasi</b> untuk setiap kebutuhan Anda
        </div>
        <div className='grid lg:grid-cols-3 gap-4'>
          <div className='p-6 border-1 border-2 border-indigo-600 rounded-xl bg-indigo-600 text-white glass'>
            <div className='text-2xl'>Basic</div>
            <hr className='md:min-w-full h-px border-1 border-white-600 my-4' />
            <div className=' h-36'>
              <p>1. Mencatat barang masuk</p> <p>2. Mencatat barang keluar</p>{' '}
              <p>3. Mencatat hasil keuntungan</p>{' '}
            </div>
            <div className='card-actions justify-between mt-4'>
              <p className='text-2xl mt-2'>
                Rp 150.000 / <span className='text-base '>Bulan</span>
              </p>
              <button className='btn bg-white'>Buy Now</button>
            </div>
          </div>
          <div className='p-6 border-1 border-2 border-indigo-600 rounded-xl bg-indigo-600 text-white glass'>
            <div className='text-2xl'>Business</div>
            <hr className='md:min-w-full h-px border-1 border-white-600 my-4' />
            <div className='h-36'>
              <p>1. Mencatat barang masuk dan keluar</p>{' '}
              <p>2. Mencatat Keuntungan</p>{' '}
              <p>3. Dapat menganalisa hasil penjualan dengan CHART</p>{' '}
              <p>d. Support 7x24 Jam</p>{' '}
            </div>
            <div className='card-actions justify-between mt-4'>
              <p className='text-2xl mt-2'>
                Rp 200.000 / <span className='text-base '>Bulan</span>
              </p>
              <button className='btn bg-white'>Buy Now</button>
            </div>
          </div>
          <div className='p-6 border-1 border-2 border-indigo-600 rounded-xl bg-indigo-600 text-white glass'>
            <div className='text-2xl'>Entrepreneur</div>
            <hr className='md:min-w-full h-px border-1 border-white-600 my-4' />
            <div className='h-36'>
              <p>1. Mencatat barang masuk dan keluar</p>{' '}
              <p>2. Mencatat Keuntungan</p>{' '}
              <p>3. Dapat menganalisa hasil penjualan dengan CHART</p>{' '}
              <p>4. Support 7x24 Jam</p>
              <p>5. Export data ke Excel</p>
              <p>6. AI Prediksi penghasilan</p>
            </div>
            <div className='card-actions justify-between mt-4'>
              <p className='text-2xl mt-2'>
                Rp 250.000 / <span className='text-base '>Bulan</span>
              </p>
              <button className='btn bg-white'>Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
