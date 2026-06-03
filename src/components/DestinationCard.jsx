import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuExternalLink, LuMapPin } from 'react-icons/lu';

const DestinationCard = ({ destination }) => {
    const { _id, imageUrl, price, destinationName, duration, country } = destination;

    return (
        <div className='border'>
            <Image 
                className=''
                alt={destinationName}
                src={imageUrl}
                height={400}
                width={400}
                >
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
                    <Link href={`/destinations/${_id}`}>
                    <Button variant='ghost' className={'mt-1 text-cyan-500'}><LuExternalLink /> 
                    Book Now
                    </Button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default DestinationCard;