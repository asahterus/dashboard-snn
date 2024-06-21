import React from 'react';
import Card from './Card';

function Fitur() {
  return (
    <div id='fitur' className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-warna4">Fitur</h2>
        <p className="font-light text-gray-400 sm:text-lg">
          Kami menyediakan 4 dashboard yang dapat membantu untuk melakukan analisis terkait Laju Pertumbuhan Ekonomi dan PDRB Menurut Pengeluaran
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

        <Card
          imgLink={'/pdrb_2023.jpg'}
          url={'/pdrb-2023'}
          title={'Dashboard PDRB Tahun 2023'}
          desc={
            'Visualisasi jumlah nilai tambah bruto yang timbul dari seluruh sektor perekonomian di Indonesia.'
          }
        />

        <Card
          imgLink={'/indikator_perekonomian.jpg'}
          url={'/indikator-perekonomian'}
          title={'Dashboard Indikator Perekonomian Indonesia'}
          desc={
            'Visualisasi data statistik yang menunjukkan kinerja ekonomi suatu negara.'
          }
        />
      </div>
    </div>
  );
}

export default Fitur;
