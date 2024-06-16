import React from 'react';
import Card from './Card';

function Fitur() {
  return (
    <div id='fitur' className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-warna4">Fitur</h2>
        <p className="font-light text-gray-400 sm:text-lg">
          Kami menyediakan 2 dashboard yang dapat membantu untuk melakukan analisis terkait Laju Pertumbuhan Ekonomi dan PDRB Menurut Pengeluaran
        </p>
      </div>

      <div className="flex items-center gap-20 justify-center">
        <Card
          imgLink={'/pdb_pengeluaran.jpeg'}
          url={'/pdrb-pengeluaran'}
          title={'Dashboard PDRB Perkapita'}
          desc={
            'Analisis dan visualisasi data PDRB perkapita untuk memantau pertumbuhan ekonomi dan kesejahteraan masyarakat.'
          }
        />

        <Card
          imgLink={'/pertumbuhan_eko.jpeg'}
          url={'/laju-pertumbuhan-ekonomi'}
          title={'Dashboard Laju Pertumbuhan Ekonomi'}
          desc={
            'Visualisasi data laju pertumbuhan ekonomi untuk membantu analisis faktor-faktor yang mempengaruhi pertumbuhan ekonomi.'
          }
        />
      </div>
    </div>
  );
}

export default Fitur;
