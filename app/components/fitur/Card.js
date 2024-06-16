import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Card({ imgLink, title, desc, url }) {
  return (
    <div className="card w-96 h-96 border-2 border-gray-200 shadow-xl">
      <div className='w-full h-36 relative'>
      <Image
          src={imgLink}
          fill
        //   width={100}
        //   height={100}
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
     

      <div className="card-body">
        <h2 className="card-title text-warna1">{title}</h2>
        <p className='text-gray-500 text-sm'>{desc}</p>
        <div className="card-actions justify-end">
          <Link href={url} className="btn btn-outline btn-primary">
            Lihat
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
