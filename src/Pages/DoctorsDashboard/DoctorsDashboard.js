import React from 'react'
import { FaUserCheck, FaHandHoldingUsd, FaStar, FaStarHalf, FaSearch } from 'react-icons/fa'
import { BsBookmarkStarFill } from 'react-icons/bs'

export const DoctorsDashboard = () => {
    return (
        <section className='flex'>
            <div className='w-1/7 h-screen bg-teal-900 border-r pl-10 py-4 text-slate-300'>
                <h1 className='text-3xl font-bold'>MEDICI</h1>
                <ul className='pt-28'>
                    <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 pl-4 pr-8'><small>Dashboard</small></li>
                    <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 pl-4 pr-8'><small>Appointment Requests</small></li>
                    <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 pl-4 pr-8'><small>All Patients</small></li>
                    <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 pl-4 pr-8'><small>Tables</small></li>
                    <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 pl-4 pr-8'><small>Articles</small></li>
                    <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 pl-4 pr-8 border-t mt-8 pt-8 border-slate-100'><small>Settings</small></li>
                    <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 pl-4 pr-8'><small>Log Out</small></li>
                </ul>
            </div>


            <div className='px-10 py-6 flex-grow'>

                {/* HEADER SECTION  */}
                <div className='flex items-center justify-between'>
                    <h3 className='font-bold text-xl'>Welcome, <span className='text-slate-500'>Dr. T.I Darkson</span></h3>
                    <div>
                        <div className='flex items-center justify-start border gap-2 rounded-lg px-3 py-1'>
                            <FaSearch className='text-slate-500 cursor-pointer' />
                            <input type="text" placeholder='Search here' className='outline-none' />
                        </div>
                    </div>
                </div>

                {/* STATS SECTION  */}
                <div className='flex items-center justify-start gap-8 py-8'>
                    <div className='rounded shadow-lg bg-slate-100 flex items-center justify-center gap-4 h-32 w-56 hover:bg-slate-300'>
                        <FaUserCheck className='text-3xl' />
                        <div>
                            <h5 className='font-bold text-xl'>700</h5>
                            <small>Patients Treated</small>
                        </div>
                    </div>
                    <div className='rounded shadow-lg bg-slate-100 flex items-center justify-center gap-4 h-32 w-56 hover:bg-slate-300'>
                        <BsBookmarkStarFill className='text-3xl' />
                        <div>
                            <h5 className='font-bold text-xl'>Ratings</h5>
                            <div className='flex items-center jusitfy-center text-yellow-400'>
                                <small><FaStar /></small>
                                <small><FaStar /></small>
                                <small><FaStar /></small>
                                <small><FaStar /></small>
                                <small><FaStarHalf /></small>
                            </div>
                        </div>
                    </div>
                    <div className='rounded shadow-lg bg-slate-100 flex items-center justify-center gap-4 h-32 w-56 hover:bg-slate-300'>
                        <FaHandHoldingUsd className='text-3xl' />
                        <div>
                            <h5 className='font-bold text-xl'>$40,000</h5>
                            <small>Total Earnings</small>
                        </div>
                    </div>
                </div>


                <div className='grid grid-cols-2'>
                    <div>
                        <h4 className='font-bold text-xl py-4'>Appointment Requests</h4>
                        <table className='w-full rounded shadow-lg bg-slate-100'>
                            <thead className=''>
                                <tr>
                                    <td className='font-bold text-slate-500 pl-4'>Name</td>
                                    <td className='font-bold text-slate-500 pl-4'>Disease</td>
                                    <td className='font-bold text-slate-500 pl-4'>Date</td>
                                    <td className='font-bold text-slate-500 pl-4'>Approval</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className='border-t'>
                                    <td className='pl-4'><small>Burna Boy</small></td >
                                    <td className='pl-4'><small>Singing</small></td>
                                    <td className='pl-4'><small>10th, July, 2023</small></td>
                                    <td className='pl-4 text-green-600'><small>Approved</small></td>
                                </tr>
                                <tr className='border-t py-2'>
                                    <td className='pl-4'><small>Mason Mount</small></td>
                                    <td className='pl-4'><small>Scoring</small></td>
                                    <td className='pl-4'><small>10th, July, 2023</small></td>
                                    <td className='pl-4 text-red-600'><small>Unapproved</small></td>
                                </tr>
                                <tr className='border-t py-2'>
                                    <td className='pl-4'><small>Van Vicker</small></td>
                                    <td className='pl-4'><small>Acting</small></td>
                                    <td className='pl-4'><small>10th, July, 2023</small></td>
                                    <td className='pl-4 text-green-600'><small>Approved</small></td>
                                </tr>
                                <tr className='border-t py-2'>
                                    <td className='pl-4'><small>Usain Bolt</small></td>
                                    <td className='pl-4'><small>Sprinting</small></td>
                                    <td className='pl-4'><small>10th, July, 2023</small></td>
                                    <td className='pl-4 text-red-600'><small>Unapproved</small></td>
                                </tr>
                            </tbody>
                            <small className='pl-4 cursor-pointer underline place-self-end'>See more</small>
                        </table>
                    </div>

                    <div>

                    </div>
                </div>
            </div>

        </section>
    )
}
