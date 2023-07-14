import { React, useState } from 'react'
import data from '../../src/services.json'


export const Services = () => {
    const [tabs] = useState(data)
    const [value, setValue] = useState(0)
    const details = tabs.data[value].details


    return (
        <section className='py-4 text-center text-teal-900 border border-top shadow-xl'>
            <div className='py-4'>
                <h3 className='text-4xl font-bold'>Medical Services</h3>
                <p>Check your health conditions regularly to minimize the incidence of diseases in the future </p>
            </div>

            <div className='flex justify-between'>
                <ul>
                    {tabs.data.map((tab, index) => {
                        const { id, button } = tab

                        return (
                            <>
                                <li key={id} className={`${index === value && "border-b-4 bg-teal-900 text-white"} shadow shadow-slate-300`}><button className='font-semibold text-lg text-center px-12 py-2' onClick={() => setValue(index)}>{button}</button></li>
                            </>
                        )
                    })}
                </ul>

                {details.map((detail) => {
                const { id, image, name, specialty, CTA, desc } = detail

                return (
                 <div key={id} className='flex items-center justify-center gap-16 pb-5'>
                    <div className='border shadow-xl rounded px-5 flex flex-col items-center justify-center w-64 h-80 bg-slate-200'>
                        <p className='font-semibold'>{name}</p>
                        <small className='font-semibold text-slate-500'>{specialty}</small>
                        <icon className="pt-2">
                            <img src={image} alt="" />
                        </icon>
                        {desc && <small className='py-4'>{desc}</small>}
                        {CTA && <button className='text-sm w-full font-semibold border border-teal-900 px-3 py-2 rounded hover:bg-teal-900 hover:text-white'>{CTA}</button>}
                    </div>
                </div> 
                )
              })}
            </div>
        </section>
    )
}
