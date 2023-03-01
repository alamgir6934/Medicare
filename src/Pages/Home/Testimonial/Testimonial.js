import React from 'react';
import quote from '../../../Assects/icons/quote-left-solid.svg'
import people1 from '../../../Assects/services/people1.png'
import Reviews from './Reviews';
const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'Among all the private hospitals, Apollo hospital is the largest and best private hospital in Bangladesh.',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people1,
            review: 'Among all the private hospitals, Apollo hospital is the largest and best private hospital in Bangladesh.',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people1,
            review: 'Among all the private hospitals, Apollo hospital is the largest and best private hospital in Bangladesh.',
            location: 'California'
        },
    ]

    return (
        <section className='mt-10'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl mt-4'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Reviews
                        key={review.id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>

    );
};

export default Testimonial;