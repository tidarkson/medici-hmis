import React from 'react'
import { FaMailBulk, FaHospitalUser, FaChartBar } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { AiFillHome, AiOutlinePullRequest, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <>
            <section>
                <div className='w-1/7 h-screen bg-teal-900 border-r py-4 text-slate-300 sticky top-0'>
                    <h1 className='text-3xl font-bold px-8'>MEDICI</h1>
                    <ul className='pt-28'>
                        <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 px-4 flex items-center justify-start gap-2'><AiFillHome /><small><Link to="/doctors-dashboard">Dashboard</Link></small></li>
                        <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 px-4 flex items-center justify-start gap-2'><AiOutlinePullRequest /><small><Link to="/appointments">Appointments</Link>
                        </small></li>
                        <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 px-4 flex items-center justify-start gap-2'><FaHospitalUser /><small>All Patients</small></li>
                        <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 px-4 flex items-center justify-start gap-2'><FaMailBulk /><small>Messages</small></li>
                        <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 px-4 flex items-center justify-start gap-2'><FaChartBar /><small>Tables and Charts</small></li>
                        <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 px-4 flex items-center justify-start gap-2'><ImBooks /><small>Articles</small></li>
                        <li className='border-t mt-8 pt-8 border-slate-100'></li>
                        <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 px-4 flex items-center justify-start gap-2'><AiFillSetting /><small><Link to="/doctors-profile">Profile</Link></small></li>
                        <li className='py-2 cursor-pointer font-semibold hover:bg-slate-300 hover:text-teal-900 px-4 flex items-center justify-start gap-2'><AiOutlineLogout /><small>Log Out</small></li>
                    </ul>
                </div>
            </section>
        </>
    )
}
