import { React, useState } from 'react'
import data from '../../appointment.json'
import { FaEye } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import { Sidebar } from './Sidebar'



export const Appointment = () => {

    const [tabs] = useState(data)

    return (
        <section className='text-teal-900 flex'>

            <Sidebar/>

            <div className='flex-grow px-10'>
                <h4 className='font-semibold text-xl py-4'>Appointments</h4>
                <table className='w-full rounded shadow-lg bg-slate-100'>
                    <thead className=''>
                        <tr>
                            <td className='font-semibold text-slate-500 pl-4'>Name</td>
                            <td className='font-semibold text-slate-500 pl-4'>Disease</td>
                            <td className='font-semibold text-slate-500 pl-4'>Date</td>
                            <td className='font-semibold text-slate-500 pl-4'>Time</td>
                            <td className='font-semibold text-slate-500 pl-4'>Status</td>
                            <td className='font-semibold text-slate-500 pl-4'>Action</td>

                        </tr>
                    </thead>

                    {tabs.data.map((tab, index) => {
                        const { name, disease, date, time, status, action } = tab

                        return (
                            <>
                                <tbody key={index}>
                                    <tr className='border-t hover:bg-slate-300'>
                                        <td className='pl-4'><small>{name}</small></td >
                                        <td className='pl-4'><small>{disease}</small></td>
                                        <td className='pl-4'><small>{date}</small></td>
                                        <td className='pl-4'><small>{time}</small></td>
                                        <td className='pl-4'><small>{status}</small></td>
                                        <td className='pl-4'><small>{action}</small></td>
                                        <td className='flex items-center justify-center gap-4'><FaEye /><AiOutlineDelete className='text-red-500' /></td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })}
                </table>
                <div className='flex justify-between items-center p-4'>
                    <small className='pl-4 cursor-pointer underline place-self-end font-semibold'> Prev</small>
                    <small className='pl-4 cursor-pointer underline place-self-end font-semibold'> Next</small>
                </div>
            </div>

        </section>
    )
}
