"use client"
import React, { useEffect } from 'react';

const TableauEmbed = () => {

  useEffect(() => {
    const divElement = document.getElementById('viz1718539319361');
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
    <div className='tableauPlaceholder' id='viz1718539319361' style={{ position: 'relative' }}>
      <noscript>
        <a href='#'>
          <img
            alt='PDRB perKapita Non Migas'
            src='https://public.tableau.com/static/images/GY/GYZMXZ865/1_rss.png'
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className='tableauViz' style={{ display: 'none' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='path' value='shared/GYZMXZ865' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/GY/GYZMXZ865/1.png' />
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

function PdrbPengeluaran() {

  const data = [
    {
      text: 'Kondisi PDRB non migas pada saat sebelum pandemi maupun pasca pandemi cenderung tidak berubah yang posisinya, Provinsi DKI Jakarta merupakan yang tertinggi di Indonesia, sedangkan Provinsi Nusa Tenggara Timur merupakan yang terendah di Indonesia.'
    },
    {
      text: 'Secara Umum PDRB per kapita pada tahun 2020 mengalami penurunan, tetapi setelah itu PDRB per Kapita cenderung mengalami peningkatan.'
    },
    
  ];


  return (
    <main className="flex flex-col items-center justify-between max-w-5xl mx-auto h-min">
      <TableauEmbed />

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

export default PdrbPengeluaran;
