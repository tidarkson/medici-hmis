import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-teal-900 text-slate-300 px-16 py-8'>
      <div className='border-b border-slate-300 py-4'>
        <div className='grid grid-cols-4'>
          <div>
            <h1 className='font-bold text-3xl'>MEDICI</h1>
            <small>Leading the Way in Medical
              Execellence,<br /> Trusted Care.</small>
          </div>
          <div>
            <p className='font-bold text-lg mb-3'>Important Links</p>
            <ul>
              <li><small>Appointment</small></li>
              <li><small>Doctors</small></li>
              <li><small>Services</small></li>
              <li><small>About Us</small></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-lg mb-3'>Contact Us</p>
            <small>Call: +234 813 000 0000</small><br />
            <small>Email: tidarkson@gmail.com</small><br />
            <small>Address: 01234 address road</small><br />
            <small>Some Country</small>
          </div>
          <div>
            <p className='font-bold text-lg mb-3'>Subscribe to Our Newsletter</p>

            <input type="text" placeholder="Enter your email address" className='bg-slate-300 w-full px-3 py-1 rounded'/>
          </div>
        </div>
      </div>
      <div className='py-4'>
        <small>Crafted By T.I Darkson All Rights Reserved</small>
      </div>
    </footer>
  )
}
