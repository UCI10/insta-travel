'use client';

import * as React from 'react';
import { useAtom } from 'jotai';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { currentTravelAtom, currentSpotAtom } from '@/stores/useTravel';
import { currentBackgroundTemplateAtom } from '@/stores/useBackGroundTemplate';
import { Spot } from '@/types/useSpot';
import { createRandom } from '@/features/utils/random';
import dayjs from 'dayjs';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import TrainIcon from '@mui/icons-material/Train';
import BgImageTemplate from './ui/bg-image-template';
import DownloadModal from './ui/download-modal';
import Button from '@mui/material/Button';
// import { useImageTemplateAtom } from 'stores/useImageTemplate';

const now = dayjs();

const ItineraryPreview = () => {
  const [travels] = useAtom(currentTravelAtom);
  const [, setSpot] = useAtom(currentSpotAtom);
  const [bGImage, setBGImage] = useAtom(currentBackgroundTemplateAtom);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const newSpot: Spot = {
    id: createRandom(),
    name: '',
    description: '',
    transport: 'train',
    stayTimeArrival: now,
    stayTimeleave: now.add(1, 'hour'),
    image: null,
    day: 1,
    travelId: travels.id,
  };

  const reactiveHeight = () => {
    switch (travels.spots.length) {
      case 1:
        return '80%';
      case 2:
        return '44%';
      case 3:
        return '30%';
      case 4:
        return '22%';
      case 5:
        return '18%';
      case 6:
        return '15%';
      case 7:
        return '13%';
      case 8:
        return '13%';
      default:
        return '50px';
    }
  };

  const activeTransportIcon = (transport: string) => {
    switch (transport) {
      case 'walk':
        return <DirectionsWalkIcon />;
      case 'bike':
        return <DirectionsBikeIcon />;
      case 'myCar':
        return <DirectionsCarIcon />;
      case 'bus':
        return <DirectionsBusIcon />;
      case 'taxi':
        return <LocalTaxiIcon />;
      case 'train':
        return <TrainIcon />;
      default:
        return <DirectionsWalkIcon />;
    }
  };

  const selectTravelButton = (travel: Spot) => {
    setSpot({key: 'all', value: travel});
  };

  // const addImageTemplateClick = () => {
  //   imageTemplate.push(newImageTemplate);
  //   setImageTemplate(imageTemplate);
  // };

  const unshiftTravelButton = () => {
    setSpot({key: 'all', value: newSpot});
  };

  const pushTravelButton = () => {
    setSpot({key: 'all', value: newSpot});
  };

  const openDownloadModal = () => {
    setIsModalOpen(true);
  };

  const closeDownloadModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LeftHalfWidth>
      <LeftTitle> 旅程表 </LeftTitle>
      <Box
        sx={{
          height: '90%',
          display: 'frex',
          justifyContent: 'center',
          flexDirection: 'column',
          m: 1,
        }}
      >
        <Box
          sx={{
            width: '10%',
            mr: 1,
            '& > :not(style)': {
              width: 85,
              height: 85,
            },
          }}
        >
          {/* {imageTemplate.map((template) => (
            <Box sx={{ display: 'frex', alignItems: 'center', mt: 1, mb: 1 }}>
              <Paper
                elevation={3}
                sx={{ height: '100%', width: '100%', position: 'relative' }}
              >
                <Typography
                  sx={{ position: 'absolute', left: '45%', top: '30%' }}
                  variant="h6"
                >
                  {template.day}
                </Typography>
                {BgImageTemplate({
                  imageTemplate: selectedBgImageTemplate(),
                })}
              </Paper>
            </Box>
          ))} */}
          <Box
            sx={{
              height: '100%',
              width: '100%',
              border: 'dashed 2px',
              display: 'flex',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <AddTravelButton>
              <Box>
                <Typography variant="h4">1</Typography>
              </Box>
            </AddTravelButton>
          </Box>
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: 'solid 2px #2e7d32',
            }}
            color='success'
            onClick={openDownloadModal}
          >
            <Box>
              <Typography variant="subtitle2">Download</Typography>
            </Box>
          </Button>
        </Box> 
        <Paper
          elevation={3}
          sx={{
            height: '100%',
            width: '70%',
            textAlign: 'center',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'white',
          }}
        >
          <BorderItem />
          <Timeline
            position="alternate"
            sx={{ justifyContent: 'space-between', zIndex: 2 }}
          >
            {travels.spots.length < 8 ? (
              <SelectTravelButton onClick={unshiftTravelButton}>
                <Box
                  sx={{
                    Height: '20px',
                    border: 'dashed 2px',
                    backgroundColor: 'white',
                  }}
                >
                  <Typography variant="h4">+</Typography>
                </Box>
              </SelectTravelButton>
            ) : (
              <></>
            )}
            {travels.spots.map((travel, index) => (
              <div key={travel.id}>
                {index % 2 === 0 ? (
                  <SelectTravelButton
                    onClick={() => selectTravelButton(travel)}
                  >
                    <TimelineItem
                      sx={{
                        justifyContent: 'space-between',
                        height: reactiveHeight(),
                      }}
                    >
                      <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        <Box>
                          {dayjs(travel.stayTimeArrival).format('HH:mm')}
                        </Box>
                        <Box>{dayjs(travel.stayTimeleave).format('HH:mm')}</Box>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: 'white' }} color="inherit">
                          {activeTransportIcon(travel.transport)}
                        </TimelineDot>
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="span">
                          {travel.name}
                        </Typography>
                        <Typography variant="inherit" sx={{ display: 'block' }}>
                          {travel.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </SelectTravelButton>
                ) : (
                  <SelectTravelButton
                    onClick={() => selectTravelButton(travel)}
                  >
                    <TimelineItem
                      sx={{
                        justifyContent: 'space-between',
                        height: reactiveHeight(),
                      }}
                    >
                      <TimelineContent
                        sx={{
                          py: '12px',
                          px: 2,
                          textAlign: 'right',
                          m: 'auto 0',
                        }}
                      >
                        <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="span">
                          {travel.name}
                        </Typography>
                        <Typography variant="inherit" sx={{ display: 'block' }}>
                          {travel.description}
                        </Typography>
                      </TimelineContent>
                      <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: 'white' }} color="inherit">
                          {activeTransportIcon(travel.transport)}
                        </TimelineDot>
                      </TimelineSeparator>
                      <TimelineOppositeContent
                        sx={{
                          m: 'auto 0',
                          textAlign: 'left ',
                        }}
                        variant="body2"
                        color="text.secondary"
                      >
                        <Box>
                          {dayjs(travel.stayTimeArrival).format('HH:mm')}
                        </Box>
                        <Box>{dayjs(travel.stayTimeleave).format('HH:mm')}</Box>
                      </TimelineOppositeContent>
                    </TimelineItem>
                  </SelectTravelButton>
                )}
              </div>
            ))}
            {travels.spots.length < 8 ? (
              <SelectTravelButton onClick={pushTravelButton}>
                <Box
                  sx={{
                    Height: '20px',
                    border: 'dashed 2px',
                    backgroundColor: 'white',
                  }}
                >
                  <Typography variant="h4">+</Typography>
                </Box>
              </SelectTravelButton>
            ) : (
              <></>
            )}
          </Timeline>
          <BgImageTemplate bgImage={bGImage} />
        </Paper>
        {isModalOpen && 
          <DownloadModal
            isOpen={isModalOpen}
            onClose={closeDownloadModal}
          />
        }
      </Box>
    </LeftHalfWidth>
  );
};

const LeftHalfWidth = styled.div({
  width: '65%',
  borderRight: '1px solid',
  height: 'calc(100vh - 90px)',
  padding: '5px',
  margin: '0 auto',
});

const LeftTitle = styled.h3({
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#33CCFF',
});

const SelectTravelButton = styled.button({
  cursor: 'pointer',
  display: 'contents',
});

const BorderItem = styled.div({
  position: 'absolute',
  width: '2.5px',
  height: '100%',
  backgroundColor: '#000000',
  left: '50%',
  zIndex: 0.5,
});

const AddTravelButton = styled.button({
  cursor: 'pointer',
  backgroundColor: 'white',
  height: '100%',
  width: '100%',
  border: 'unset',
  display: 'block',
});

export default ItineraryPreview;
