import React from 'react'
import { FaUserCheck, FaHandHoldingUsd, FaStar, FaStarHalf } from 'react-icons/fa'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { ImBooks } from 'react-icons/im'
import { Publications } from '../../Components/Publications'
import { Sidebar } from './Sidebar';


export const DoctorsDashboard = () => {
    return (
        <section className='flex'>
            <Sidebar />

            <div className='px-10 py-6 flex-grow text-teal-900'>

                {/* HEADER SECTION  */}
                <div className='flex items-center justify-between'>
                    <h3 className='font-semibold text-2xl'>Welcome, <span className='text-slate-500'>Dr. T.I Darkson</span></h3>
                    <div>
                        <div className='flex items-center justify-start border gap-2 rounded-lg px-2 py-1'>
                            <input type="text" placeholder='Search here' className='outline-none text-sm' />
                            <button className='bg-teal-900 text-sm text-slate-300 px-3 p-1 rounded-lg'>Search</button>
                        </div>
                    </div>
                </div>

                {/* STATS SECTION  */}
                <div className='flex items-center justify-center gap-8 py-8'>
                    <div className='rounded shadow-lg bg-slate-100 flex items-center justify-center gap-4 h-32 w-56 hover:bg-slate-300'>
                        <FaUserCheck className='text-3xl' />
                        <div>
                            <h5 className='font-semibold text-2xl'>700</h5>
                            <small>Patients Treated</small>
                        </div>
                    </div>
                    <div className='rounded shadow-lg bg-slate-100 flex items-center justify-center gap-4 h-32 w-56 hover:bg-slate-300'>
                        <BsBookmarkStarFill className='text-3xl' />
                        <div>
                            <h5 className='font-semibold text-2xl'>Ratings</h5>
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
                            <h5 className='font-semibold text-2xl'>$40,000</h5>
                            <small>Total Earnings</small>
                        </div>
                    </div>
                    <div className='rounded shadow-lg bg-slate-100 flex items-center justify-center gap-4 h-32 w-56 hover:bg-slate-300'>
                        <ImBooks className='text-3xl' />
                        <div>
                            <h5 className='font-semibold text-2xl'>50</h5>
                            <small>Publications</small>
                        </div>
                    </div>
                </div>

                {/* TABLES  */}
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <h4 className='font-semibold text-xl py-4'>Appointment Requests</h4>
                        <table className='w-full rounded shadow-lg bg-slate-100'>
                            <thead className=''>
                                <tr>
                                    <td className='font-semibold text-slate-500 pl-4'>Name</td>
                                    <td className='font-semibold text-slate-500 pl-4'>Disease</td>
                                    <td className='font-semibold text-slate-500 pl-4'>Date</td>
                                    <td className='font-semibold text-slate-500 pl-4'>Approval</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className='border-t hover:bg-slate-300'>
                                    <td className='pl-4'><small>Burna Boy</small></td >
                                    <td className='pl-4'><small>Singing</small></td>
                                    <td className='pl-4'><small>7/23</small></td>
                                    <td className='pl-4 text-green-600'><small>Approved</small></td>
                                </tr>
                                <tr className='border-t hover:bg-slate-300 py-2'>
                                    <td className='pl-4'><small>Mason Mount</small></td>
                                    <td className='pl-4'><small>Scoring</small></td>
                                    <td className='pl-4'><small>7/23</small></td>
                                    <td className='pl-4 text-red-600'><small>Unapproved</small></td>
                                </tr>
                                <tr className='border-t hover:bg-slate-300 py-2'>
                                    <td className='pl-4'><small>Van Vicker</small></td>
                                    <td className='pl-4'><small>Acting</small></td>
                                    <td className='pl-4'><small>7/23</small></td>
                                    <td className='pl-4 text-green-600'><small>Approved</small></td>
                                </tr>
                                <tr className='border-t hover:bg-slate-300 py-2'>
                                    <td className='pl-4'><small>Usain Bolt</small></td>
                                    <td className='pl-4'><small>Sprinting</small></td>
                                    <td className='pl-4'><small>7/23</small></td>
                                    <td className='pl-4 text-red-600'><small>Unapproved</small></td>
                                </tr>
                            </tbody>
                            <small className='pl-4 cursor-pointer underline place-self-end'>See more</small>
                        </table>
                    </div>

                    <div>
                        <h4 className='font-semibold text-xl py-4'>Recent Patients</h4>
                        <table className='w-full rounded shadow-lg bg-slate-100'>
                            <thead className=''>
                                <tr>
                                    <td className='font-semibold text-slate-500 pl-4'>Name</td>
                                    <td className='font-semibold text-slate-500 pl-4'>Disease</td>
                                    <td className='font-semibold text-slate-500 pl-4'>Date</td>
                                    <td className='font-semibold text-slate-500 pl-4'>Status</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className='border-t hover:bg-slate-300'>
                                    <td className='pl-4'><small>Burna Boy</small></td >
                                    <td className='pl-4'><small>Singing</small></td>
                                    <td className='pl-4'><small>7/23</small></td>
                                    <td className='pl-4'><small>Discharged</small></td>
                                </tr>
                                <tr className='border-t hover:bg-slate-300 py-2'>
                                    <td className='pl-4'><small>Mason Mount</small></td>
                                    <td className='pl-4'><small>Scoring</small></td>
                                    <td className='pl-4'><small>7/23</small></td>
                                    <td className='pl-4'><small>Admitted</small></td>
                                </tr>
                                <tr className='border-t hover:bg-slate-300 py-2'>
                                    <td className='pl-4'><small>Van Vicker</small></td>
                                    <td className='pl-4'><small>Acting</small></td>
                                    <td className='pl-4'><small>7/23</small></td>
                                    <td className='pl-4'><small>Admitted</small></td>
                                </tr>
                                <tr className='border-t hover:bg-slate-300 py-2'>
                                    <td className='pl-4'><small>Usain Bolt</small></td>
                                    <td className='pl-4'><small>Sprinting</small></td>
                                    <td className='pl-4'><small>7/23</small></td>
                                    <td className='pl-4'><small>Discharged</small></td>
                                </tr>
                            </tbody>
                            <small className='pl-4 cursor-pointer underline place-self-end'>See more</small>
                        </table>
                    </div>
                </div>

                {/* CHARTS  */}
                <div className='pt-8'>
                    <Publications />
                </div>

            </div>

        </section>
    )
}
