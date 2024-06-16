'use client'

import React, {useEffect} from 'react';

function PdbAdhb() {
  useEffect(() => {
    const vizDiv = document.getElementById('viz1718557245242');
    const vizElement = vizDiv.getElementsByTagName('object')[0];
    if (vizDiv.offsetWidth > 800) {
      vizElement.style.width = '1000px';
      vizElement.style.height = '827px';
    } else if (vizDiv.offsetWidth > 500) {
      vizElement.style.width = '1000px';
      vizElement.style.height = '827px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '1227px';
    }
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div className='max-w-5xl min-h-screen my-10 mx-auto'>
      <div
        id='viz1718557245242'
        style={{
          position: 'relative',
        }}
      >
        <noscript>
          <a href='#'>
            <img
              alt='PDRB Tahun 2023 '
              src='https://public.tableau.com/static/images/PD/PDRB2023_17185502497740/Dashboard1/1_rss.png'
              style={{
                border: 'none',
              }}
            />
          </a>
        </noscript>
        <object
          className='tableauViz'
          style={{
            display: 'none',
          }}
        >
          <param
            name='host_url'
            value='https://public.tableau.com/'
          />
          <param
            name='embed_code_version'
            value='3'
          />
          <param
            name='site_root'
            value=''
          />
          <param
            name='name'
            value='PDRB2023_17185502497740/Dashboard1'
          />
          <param
            name='tabs'
            value='no'
          />
          <param
            name='toolbar'
            value='yes'
          />
          <param
            name='static_image'
            value='https://public.tableau.com/static/images/PD/PDRB2023_17185502497740/Dashboard1/1.png'
          />
          <param
            name='animate_transition'
            value='yes'
          />
          <param
            name='display_static_image'
            value='yes'
          />
          <param
            name='display_spinner'
            value='yes'
          />
          <param
            name='display_overlay'
            value='yes'
          />
          <param
            name='display_count'
            value='yes'
          />
          <param
            name='language'
            value='en-US'
          />
        </object>
      </div>
    </div>
  );
}

export default PdbAdhb;
