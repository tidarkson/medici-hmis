import React from 'react'
import { Sidebar } from './Sidebar'

export const DoctorsProfile = () => {
    return (
        <>
            <section className='flex'>
                <Sidebar />

                <div>
                    <div className='bg-slate-200 text-teal-900 px-16 py-8 shadow-lg border m-4 rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <div>
                                    <h1 className='font-semibold text-3xl'>Dr. T.I Darkson</h1>
                                    <button className='py-2'>Edit Profile</button>
                                </div>

                                <div>
                                    <small className='bg-slate-200 text-teal-900 px-3 py-1 rounded'>Specialist of Skin surgery cardiology</small>
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center justify-center gap-4'>
                                    <img src="" alt="" className='rounded-full bg-teal-900 w-28 h-28' />
                                    <button className='text-sm text-teal-900 font-semibold px-3 py-1 rounded bg-slate-300 border border-teal-900 hover:bg-teal-900 hover:text-slate-300'>Change Photo</button>
                                    <button className='text-sm text-slate-300 font-semibold px-3 py-1 rounded bg-teal-900 border border-teal-900 hover:bg-slate-300 hover:text-teal-900'>Remove</button>
                                </div>
                            </div>
                        </div>

                        <div className='py-4 w-4/6'>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est dicta ducimus laborum necessitatibus a obcaecati magnam sit eius quam earum accusantium ipsam blanditiis amet fugiat, in iste voluptatibus quod?</small>

                            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iusto voluptatum illo explicabo, soluta reiciendis obcaecati esse. Amet omnis velit ad molestiae cum, nisi dicta distinctio aperiam, asperiores error sint</small>
                        </div>

                        <div>
                            <button className='text-sm text-teal-900 font-semibold px-3 py-1 rounded bg-slate-300 border border-teal-900 hover:bg-teal-900 hover:text-slate-300'>Save</button>
                        </div>
                    </div>

                    <div className='px-16 py-8 shadow-lg border m-4 rounded-lg bg-slate-200'>
                        <form action="">
                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold'>Full Name</label>
                                <input type="text" className="outline-none border px-3 py-1 rounded my-2" placeholder='Input your full name here' />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold'>Specialty</label>
                                <input type="text" className="outline-none border px-3 py-1 rounded my-2" placeholder='Input your specialty here' />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold'>Location</label>
                                <input type="text" className="outline-none border px-3 py-1 rounded my-2" placeholder='Input your location here' />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold'>Profile Description</label>
                                <input type="text" className="outline-none border px-3 py-1 rounded my-2" placeholder='Input your profile description here' />
                            </div>
                        </form>

                        <div className='flex items-center justify-between'>
                            <div></div>
                            <div>
                                <button className='px-3 py-1 rounded border border-teal-900 text-sm font-bold hover:bg-teal-900 hover:text-white'>Cancel</button>
                                <button className='px-3 py-1 bg-teal-900 rounded text-sm font-semibold text-white ml-4 hover:bg-slate-300 hover:text-teal-900'>Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
