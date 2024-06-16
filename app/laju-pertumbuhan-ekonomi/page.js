"use client";

import React, { useEffect } from 'react';

const data = [
  {
    text: 'Pada saat sebelum pandemi (tahun 2019) pada Provinsi Papua laju pertumbuhan ekonomi sangat buruk sampai -15%, sedangkan provinsi lainnya mengalami pertumbuhan ekonomi.'
  },
  {
    text: 'Pada tahun 2020, hampir semua provinsi laju pertumbuhan ekonominya mengalami penurunan sampai minus. Hanya provinsi Sulawesi Tengah, Papua, dan Maluku Utara yang mengalami pertumbuhan ekonomi.'
  },
  {
    text: 'Pada tahun 2021, hampir semua provinsi laju pertumbuhan ekonominya mengalami peningkatan pertumbuhan ekonomi. Hanya provinsi Bali dan Riau yang masih minus. Hal ini mengindikasikan bahwa pada tahun 2021, Provinsi Bali dan Riau masih belum pulih dari pandemi Covid-19.'
  },
  {
    text: 'Pada tahun 2022, semua provinsi mengalami pertumbuhan ekonominya.'
  },
  {
    text: 'Pada tahun 2023, semua provinsi mengalami pertumbuhan ekonominya.'
  }
];

const TableauEmbedLajuPertumbuhanEkonomi = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1718539726396');
    const vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = '1000px';
      vizElement.style.height = '827px';
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = '1000px';
      vizElement.style.height = '827px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '900px';
    }
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div className='tableauPlaceholder' id='viz1718539726396' style={{ position: 'relative' }}>
      <noscript>
        <a href='#'>
          <img
            alt='Dashboard Laju Pertumbuhan Ekonomi'
            src='https://public.tableau.com/static/images/66/66XW8YJ4G/1_rss.png'
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className='tableauViz' style={{ display: 'none' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='path' value='shared/66XW8YJ4G' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/66/66XW8YJ4G/1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
      </object>
    </div>
  );
};

function LajuPertumbuhanEkonomi() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-5xl mx-auto">
      <TableauEmbedLajuPertumbuhanEkonomi />

      <div id='interpretasi' className='my-5 bg-white rounded-xl p-5 border-2 border-gray-200 shadow-lg'>
        <h5 className='text-warna4 text-2xl'>Interpretasi</h5>
        <ul>
          {data.map((item, index) => (
            <li className='text-warna1 list-disc ml-5 my-3' key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default LajuPertumbuhanEkonomi;
