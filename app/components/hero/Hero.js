import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div className="hero h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <Image src="/hero.jpg" width={500} height={500}/>
            <div>
                <h1 className="text-5xl text-warna1 font-bold">Dashboard Laju Pertumbuhan Ekonomi</h1>
                <p className="py-6">Sebelum dan sesudah pandemi berdasarkan data PDRB pengeluaran</p>
                <Link href={'#fitur'} className="btn btn-outline btn-primary">Jelajahi Sekarang</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
