import React from 'react';

export default function Register() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'></div>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body my-5'>
            <form>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>First Name</span>
                </label>
                <input
                  type='text'
                  placeholder='First Name'
                  className='input input-bordered'
                  name='First Name'
                  required
                />
              </div>
              <div className='form-control mt-2'>
                <label className='label'>
                  <span className='label-text'>Last Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Last Name'
                  className='input input-bordered'
                  name='First Name'
                  required
                />
              </div>
              <div className='form-control mt-2'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='text'
                  placeholder='Email'
                  className='input input-bordered'
                  name='First Name'
                  required
                />
              </div>
              <div className='form-control mt-2'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  name='username'
                  required
                />
              </div>
              <div className='form-control mt-4'>
                <button className='btn btn-primary'>Login</button>
                <label className='label flex justify-center'>
                  {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                  <a
                    href='/login'
                    className='label-text-alt link link-hover text-blue-800'>
                    Have an Account ? Login Now
                  </a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
