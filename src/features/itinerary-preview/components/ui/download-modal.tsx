'use client';

import * as React from 'react';
import { useAtom } from 'jotai';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
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
import dayjs from 'dayjs';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import TrainIcon from '@mui/icons-material/Train';
import BgImageTemplate from './bg-image-template';
import Button from '@mui/material/Button';
import html2canvas from 'html2canvas';

const DownloadModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [travels] = useAtom(currentTravelAtom);
  const [, setSpot] = useAtom(currentSpotAtom);
  const [bGImage, setBGImage] = useAtom(currentBackgroundTemplateAtom);

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

  const clickDownloadButton = () => {
    const element = document.getElementById('download-target-element');

    html2canvas(element as HTMLElement).then(canvas => {
        // CanvasをPNGデータ（Base64）に変換
        const imgData = canvas.toDataURL('image/png');
        
        // ダウンロード用のリンクを作ってクリックさせる
        const link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = imgData;
        link.click();
    });
  };

  return (
      <Modal
        open={isOpen}
        onClose={onClose}
        sx={{
          height: '90%',
          justifyContent: 'center',
          m: 1,
          backgroundColor: 'white',
        }}
      >
        <LeftHalfWidth>
          <Paper
            id="download-target-element"
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
            </Timeline>
            <BgImageTemplate bgImage={bGImage} />
          </Paper>
          <Box
            sx={{
              width: '10%',
              display: 'flex',
              mr: 1,
            }}
          >
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: 'solid 2px #2e7d32',
              }}
              color='success'
              onClick={clickDownloadButton}
            >
              <Box>
                <Typography variant="subtitle2">Download</Typography>
              </Box>
            </Button>
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: 'solid 2px #2e7d32',
              }}
              color='error'
              onClick={onClose}
            >
              <Box>
                <Typography variant="subtitle2">Close</Typography>
              </Box>
            </Button>
          </Box>
        </LeftHalfWidth>
      </Modal>
  );
};

const LeftHalfWidth = styled.div({
  width: '100%',
  height: 'calc(100vh - 90px)',
  padding: '5px',
  margin: '0 auto',
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

export default DownloadModal;
