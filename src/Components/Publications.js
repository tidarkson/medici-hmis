import { React, useState } from 'react'
import data from '../../src/publications.json'

export const Publications = () => {
    const [tabs] = useState(data)

    return (
        <section className='mb-16 text-teal-900'>
            <div className='text-center py-4'>
                <h3 className='text-4xl font-bold'> Latest Publications</h3>
                <p>Written by our experts</p>
            </div>

            <div className='grid grid-cols-2 gap-4'>

                {tabs.data.map((tab) => {
                    const { id, title, image, desc, CTA, date, author } = tab

                    return (
                        <>
                            <div key={id} className='flex justify-center gap-2 w-5/6 border-t border-1 p-4 shadow-xl rounded-lg hover:bg-slate-300'>
                                <img src={image} alt="" className='pb-4 w-1/2' />

                                <div >
                                    <h6 className='font-semibold'>{title}</h6>
                                    <p className='text-xs'>{date}</p><br />
                                    <small>{desc}</small><br />
                                    <div className='flex justify-between mt-2'>
                                        <small className='font-bold text-slate-500'>{author}</small><br />
                                        <small className='font-semibold underline cursor-pointer'>{CTA}</small>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}
            </div>
        </section>
    )
}
