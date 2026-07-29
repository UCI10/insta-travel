'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
// import Hokkaido from '@@/01_hokkaido.png';
// import Aomori from '@@/02_aomori.png';
// import Akita from '@@/03_akita.png';
// import Iwate from '@@/04_iwate.png';
// import Yamagata from '@@/05_yamagata.png';
// import Miyagi from '@@/06_miyagi.png';

const Home = () => {
  const [value, setValue] = React.useState('domestic');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <header>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <Tab sx={{ fontSize: '18px', px: 10 }} value="domestic" label="国内" wrapped/>
          {/* <Tab sx={{ fontSize: '15px' }} value="overseas" label="海外" wrapped/> */}
        </Tabs>
      </header>
      <main>
        <Paper elevation={3} className="mt-10 relative">
          <div>
            {/* <div className="h-40 w-40 absolute top-0 right-0">
              <Image
                src={Hokkaido}
                alt="hokkaido"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="h-20 w-14 absolute top-28 right-22">
              <Image
                src={Aomori}
                alt="aomori"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="h-21 w-18 absolute top-38 right-23">
              <Image
                src={Akita}
                alt="akita"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="h-20 w-18 absolute top-38 right-15.5">
              <Image
                src={Iwate}
                alt="iwate"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="h-26 w-21 absolute top-52 right-24">
              <Image
                src={Yamagata}
                alt="yamagata"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="h-18 w-15 absolute top-53 right-18">
              <Image
                src={Miyagi}
                alt="miyagi"
                layout="responsive"
                width={100}
                height={100}
              />
            </div> */}
          </div>
        </Paper>
      </main>
    </div>
  );
}

export default Home;
