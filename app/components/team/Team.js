import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';

function Team() {
  return (
    <section id='tim' className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-warna4">Tim Kami</h2>
          <p className="font-light text-gray-500 sm:text-lg">Bertemu dengan orang-orang dibalik website ini</p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 justify-center">
          <TeamMember
            imgSrc="/cowo.jpg"
            name="Agus Riyanto"
            role="222111855"
            
          />
          <TeamMember
            imgSrc="/cowo.jpg"
            name="Muhammad Nur Alfian Syarif"
            role="222112218"
            
          />
          <TeamMember
            imgSrc="/cewe.png"
            name="Ni Putu Sancita M.A"
            role="222112258"
          />
          <TeamMember
            imgSrc="/cowo.jpg"
            name="Nur Shifa Dani"
            role="222112272"
          />
          <TeamMember
            imgSrc="/cewe.png"
            name="Silvie Kristya Ardearista"
            role="222112369"
          />
          <TeamMember
            imgSrc="/cewe.png"
            name="Syakira Rizky Andini"
            role="222112388"
          />
        </div>
      </div>
    </section>
  );
}

function TeamMember({ imgSrc, name, role, socialLinks }) {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400 h-72 w-64 rounded border-2 border-gray-200 p-2">
      <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={imgSrc} alt={`${name} Avatar`} />
      <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900">
        <a href="#">{name}</a>
      </h3>
      <p>{role}</p>

    </div>
  );
}

export default Team;
