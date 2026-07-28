"use client"

import { useState, ChangeEvent } from 'react';
import { currentSpotAtom, currentTravelAtom } from '@/stores/useTravel';
import { currentBackgroundTemplateAtom } from '@/stores/useBackGroundTemplate';
import { BackGroundTemplateType, BackGroundTemplate } from '@/types/useBackGroundTemplate';
import { useAtom } from 'jotai';
import TransportationRadio from './ui/transportation-radio';
import ImageTemplate from './ui/image-template';
import ImageUpload from './ui/image-upload';
import styled from '@emotion/styled';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';

const now = dayjs();
  
const TravelSettings = () => {
  const [travel, setTravels] = useAtom(currentTravelAtom);
  const [spot, setSpot] = useAtom(currentSpotAtom);
  const [bGImage, setBGImage] = useAtom(currentBackgroundTemplateAtom);

  const [tab, setTab] = useState('travelInfo');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const resetSpot = () => {
    setSpot({key: 'all', value: {
      id: '',
      name: '',
      description: '',
      transport: 'walk',
      stayTimeArrival: now,
      stayTimeleave: now.add(1, 'hour'),
      image: null,
      day: 1,
      travelId: travel.id,
    }});
  };

  const handleResetChange = () => {
    resetSpot();
  };

  const handleSaveChange = () => {
    if (travel.spots.length === 0) {
      setTravels({key: 'spots', value: [spot]});
      return;
    }
    if (travel.spots.some((s) => s.id === spot.id)) {
      setTravels({key: 'spots', value: travel.spots.map(s => s.id === spot.id ? spot : s)})
      return;
    }
    setTravels({key: 'spots', value: [...travel.spots, spot]})
  };

  const radioChange = (event: {target: { value: string }}) => {
    setSpot({key: 'transport', value: event.target.value});
  };

  const inputChange = (key: string, event: {target: { value: string }}) => {
    setSpot({key, value: event.target.value});
  };

  const timeChange = (key: string, value: Dayjs ) => {
    setSpot({key, value});
  };

  const bGImageChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const newImages = [...bGImage.bgImage];
    newImages[index] = url;
    setBGImage({key: 'bgImage', value: newImages}); 
  };

  const changeImageTemplate = (id: BackGroundTemplateType) => {
    setBGImage({key: 'template', value: id});
    switch (id) {
      case BackGroundTemplate.none:
        setBGImage({key: 'bgImage', value: []});
        break;
      case BackGroundTemplate.one:
        setBGImage({key: 'bgImage', value: ['']});
        break;
      case BackGroundTemplate.twoLeft:
      case BackGroundTemplate.twoRight:
        setBGImage({key: 'bgImage', value: ['', '']});
        break;
      case BackGroundTemplate.four:
        setBGImage({key: 'bgImage', value: ['', '', '', '']});
        break;
    }
  };

  return (
    <RightHalfWidth>
      <RightTitle> 旅行情報入力 </RightTitle>
      <Box sx={{ typography: 'body1', mt: '20px'}}>
        <TabContext value={tab}>
          <Box>
            <Box sx={{ display: 'frex', justifyContent: 'center' }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
                sx={{ width: '100%' }}
              >
                <Tab
                  label="旅行情報"
                  value="travelInfo"
                  sx={{ width: '50%' }}
                />
                <Tab label="背景画像" value="backImage" sx={{ width: '50%' }} />
              </TabList>
            </Box>
            <TabPanel value="travelInfo">
              <TopPlaceField>
                <TransportationRadio
                  transport={spot.transport}
                  onChange={radioChange}
                />
              </TopPlaceField>
              <PlaceField>
                <p>観光地</p>
                <TextField
                  sx={{
                    '& input': {
                      textAlign: 'center',
                    },
                  }}
                  size="small"
                  id="place-name"
                  value={spot.name}
                  onChange={(e) => inputChange('name', e)}
                />
              </PlaceField>
              <PlaceField>
                <p>滞在時間</p>
                <Box sx={{ display: 'frex', justifyContent: 'center' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      ampm={false}
                      defaultValue={dayjs(now)}
                      value={spot.stayTimeArrival ? dayjs(spot.stayTimeArrival): dayjs(now)}
                      sx={{ width: '150px' }}
                      views={['hours', 'minutes']}
                      format="HH:mm"
                      onChange={(newValue: Dayjs | null) => {
                        if (newValue !== null) {
                          timeChange('stayTimeArrival', newValue);
                        }
                      }}
                    />
                  </LocalizationProvider>
                  <Box sx={{ margin: 'auto 10px' }}>〜</Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      ampm={false}
                      defaultValue={dayjs(now.add(1, 'hour'))}
                      value={spot.stayTimeleave ? dayjs(spot.stayTimeleave) : dayjs(now.add(1, 'hour'))}
                      sx={{ width: '150px' }}
                      format="HH:mm"
                      views={['hours', 'minutes']}
                      onChange={(newValue: Dayjs | null) => {
                        if (newValue !== null) {
                          timeChange('stayTimeleave', newValue);
                        }
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </PlaceField>
              <PlaceField>
                <p>観光地の説明</p>
                <PlaceDescription>
                  <TextField
                    sx={{
                      '& input': {
                        textAlign: 'center',
                      },
                    }}
                    rows={2}
                    id="outlined-multiline-static"
                    size="small"
                    multiline
                    fullWidth
                    value={spot.description}
                    onChange={(e) => inputChange('description', e)}
                  />
                </PlaceDescription>
              </PlaceField>
            </TabPanel>
            <TabPanel value="backImage">
              <TopPlaceField>
                <ImageTemplate
                  imageTemplate={bGImage.template}
                  changeTemplate={changeImageTemplate}
                />
              </TopPlaceField>
              <BGImagePlaceField>
                {bGImage.bgImage.map((image, index) => (
                  <ImageUpload
                    key={index}
                    index={index}
                    image={image}
                    imageChange={(e) => bGImageChange(e, index)}
                  />
                ))}
              </BGImagePlaceField>
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
      <ButtonArea>
        <Button variant="outlined" color="info" sx={{ mr: 5, width: '100px' }} onClick={handleResetChange}>リセット</Button>
        <Button variant="contained" color="primary" sx={{ width: '100px' }} onClick={handleSaveChange}>保存</Button>
      </ButtonArea>
    </RightHalfWidth>
  );
};

const RightHalfWidth = styled.div({
  height: 'calc(100vh - 90px)',
  width: '35%',
  padding: '5px',
  margin: '0 auto',
  position: 'relative',
});

const RightTitle = styled.h3({
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#33CCFF',
});

const TopPlaceField = styled.div({
  marginTop: '10px',
  textAlign: 'center',
});

const BGImagePlaceField = styled.div({
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const PlaceField = styled.div({
  marginTop: '30px',
  textAlign: 'center',
});

const PlaceDescription = styled.div({
  padding: '0 50px',
});

const ButtonArea = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: '10%',
  margin: '0 auto',
  left: '50%',
  transform: 'translateX(-50%)',
});

export default TravelSettings;
