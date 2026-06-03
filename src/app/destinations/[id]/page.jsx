import { DeleteAlert } from '@/components/DeleteAlert';
import { EditModal } from '@/components/EditModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const destination = await res.json()

    console.log(destination);

    const { _id, imageUrl, price, destinationName, duration, country, description } = destination;
    return (
        <div className='max-w-7xl mx-auto'>

            <div className='flex items-center gap-3 justify-end mt-5 mb-3'>
                <EditModal destination={destination}></EditModal>
            <DeleteAlert destination={destination}></DeleteAlert>
            </div>
            <Image 
                className='w-full h-100 object-cover'
                alt={destinationName}
                src={imageUrl}
                height={500}
                width={800}>

            </Image>
            <div className='p-2'>
                <div>
                    <div className="flex items-center gap-2">
                        <LuMapPin />
                        <span>{country}</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <h2 className="text-xl font-bold">
                            {destinationName}
                        </h2>

                        <h3 className="text-2xl font-bold">
                            ${price}
                        </h3>
                    </div>

                    <div className="flex items-center gap-1 mt-2">
                        <FaRegCalendar />
                        <span>{duration}</span>
                    </div>
                </div>
                <h1 className='mt-10 text-2xl font-bold'>Overview</h1>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default DestinationDetailsPage;