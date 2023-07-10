import React from 'react'

export const Appointment = () => {
    return (
        <section className='grid grid-cols-2 items-center justify-center text-teal-900 p-16 '>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Book an Appointment</h1>
                <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
            </div>

            <div className=' pl-16'>
                <form className='bg-slate-300 p-1 opacity-90 border b-1'>
                    <table className='w-full'>
                    <tbody>
                        <tr className='rounded-lg'>
                            <td>
                                <input type="text" placeholder='Full name' className='px-3 py-1 outline-none w-full'/>
                            </td>
                            <td>
                                <select name="filter" id="filter-gender" className='w-full px-2 py-1 outline-none'>
                                    <option value="color">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder='Email address'  className='px-3 py-1 outline-none w-full'/>
                            </td>
                            <td>
                                <input type="text" placeholder='Phone number' className='px-3 py-1 outline-none w-full'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select name="filter" id="filter-gender" className='w-full px-2 py-1 outline-none'>
                                    <option value="color">Date</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                            <td>
                                <select name="filter" id="filter-gender" className='w-full px-2 py-1 outline-none'>
                                    <option value="color">Time</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select name="filter" id="filter-gender" className='w-full px-2 py-1 outline-none'>
                                    <option value="doctor">Doctor</option>
                                    <option value="doctor">Dr Robert Henry</option>
                                    <option value="doctor">Dr Harry Bird</option>
                                    <option value="doctor">Dr T.I Darkson</option>
                                    <option value="doctor">Dr Emily Rashford</option>
                                </select>
                            </td>
                            <td>
                                <select name="filter" id="filter-gender" className='w-full px-2 py-1 outline-none'>
                                    <option value="Department">Department</option>
                                    <option value="Oncology">Oncology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Gynocology">Gynocology</option>
                                    <option value="Cardiology">Cardiology</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <textarea name="text" placeholder='Leave a note' id="" cols="50" rows="" className='text-slate-900 p-3 mt-1 outline-none w-full'></textarea>
                    <button className='text-sm w-full font-semibold border border-teal-900 my-2 px-3 py-2 rounded hover:bg-teal-900 hover:text-white'>Send Request</button>
                </form>
            </div>
        </section>
    )
}
