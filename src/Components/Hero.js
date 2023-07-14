import React from 'react'
import pose2 from '../images/pose_2.png'

export const Hero = () => {
    return (
        <>
            <hero className="flex items-center justify-between text-teal-900 py-8">
                <div className="my-5">
                    <h1 className='text-5xl font-bold text-[#172A3A]'>Digital HealthTech Platform</h1>
                    <h3 className='text-4xl font-semibold text-[#172A3A] py-3'>We care <br /> about your health</h3>
                    <p>Good health is the state of mental, physical and social well being
                        and it does not just mean absence of diseases.</p>
                    <p>Now from the confort of your home you can take care of your health.</p>
                    <button className='text-sm font-semibold border border-teal-900 px-3 py-2 rounded hover:bg-teal-900 hover:text-white mt-12'>Explore our Services</button>
                </div>

                <div className="pr-8 relative">
                    <div className="circle rounded-full border border-slate-300">
                        <div className="h-96 w-96 bg-teal-900 rounded-full m-4">
                        </div>
                        <img src={pose2} alt="" className='w-96 absolute top-0 r-10' />
                        <div className='absolute top-5 -right-8 bg-white opacity-90 border b-1 rounded-lg px-3 py-2'>
                            <h5 className='font-semibold'>Well Qualified Doctors</h5>
                            <small >Get treated with care</small>
                        </div>
                        <div className='absolute bottom-10 -left-8 bg-white opacity-90 border b-1 rounded-lg px-3 py-2'>
                            <h5 className='font-semibold'>Book An Appointment</h5>
                            <small>Online apppointment</small>
                        </div>
                    </div>
                </div>
            </hero>
        </>
    )
}
