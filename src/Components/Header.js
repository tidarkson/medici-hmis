import React from 'react'

export const Header = () => {
    return (
        <section className='py-4 text-teal-900'>
            <navbar className="">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="" alt="" />
                        <h1 className='font-bold text-3xl text-teal-900'>MEDICI</h1>
                    </div>
                    <div >
                        <ul className="flex justify-center align-center gap-8">
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>Appointment</li>
                            <li className='cursor-pointer'>Doctors</li>
                            <li className='cursor-pointer'>Services</li>
                            <li className='cursor-pointer'>About Us</li>
                        </ul>                        
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <button className='text-sm font-semibold border border-teal-900 px-3 py-2 rounded hover:bg-teal-900 hover:text-white'>Sign in</button>
                        <button className='text-sm font-semibold bg-teal-900 px-3 py-2 rounded hover:bg-slate-300 hover:text-teal-900 text-white'>Register</button>
                    </div>
                </div>
            </navbar>
        </section>
    )
}
