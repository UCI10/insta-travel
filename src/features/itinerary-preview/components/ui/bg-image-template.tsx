import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Box from '@mui/system/Box';
import { BackGroundTemplate } from '@/types/useBackGroundTemplate';
import { useAtom } from 'jotai';
import CardMedia from '@mui/material/CardMedia';

const BgImageTemplate = ({ bgImage }: { bgImage: BackGroundTemplate }) => {

  const noneTemplate = () => {
    return <></>;
  };

  const oneTemplate = () => {
    return bgImage.bgImage[0] ? (
      <CardMedia
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        component="img"
        image={bgImage.bgImage[0] ?? ''}
        alt={bgImage.bgImage[0] ? 'placeImage' : ''}
      />
    ) : (
      <></>
    );
  };

  const twoLeftTemplate = () => {
    return (
      <>
        {bgImage.bgImage[0] ? (

          <CardMedia
            sx={{
              width: '50%',
              height: '50%',
              position: 'absolute',
            }}
            component="img"
            image={bgImage.bgImage[0] ?? ''}
            alt={bgImage.bgImage[0] ? 'placeImage' : ''}
          />
        ) : (
          <></>
        )}
        {bgImage.bgImage[1] ? (
          <CardMedia
            sx={{
              width: '50%',
              height: '50%',
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
            component="img"
            image={bgImage.bgImage[1] ?? ''}
            alt={bgImage.bgImage[1] ? 'placeImage' : ''}
          />
        ) : (
          <></>
        )}
      </>
    );
  };

  const twoRightTemplate = () => {
    return (
      <>
        {bgImage.bgImage[0] ? (
          <CardMedia
            sx={{
              width: '50%',
              height: '50%',
              right: 0,
              position: 'absolute',
            }}
            component="img"
            image={bgImage.bgImage[0] ?? ''}
            alt={bgImage.bgImage[0] ? 'placeImage' : ''}
          />
        ) : (
          <></>
        )}
        {bgImage.bgImage[1] ? (
          <CardMedia
            sx={{
              width: '50%',
              height: '50%',
              bottom: 0,
              position: 'absolute',
            }}
            component="img"
            image={bgImage.bgImage[1] ?? ''}
            alt={bgImage.bgImage[1] ? 'placeImage' : ''}
          />
        ) : (
          <></>
        )}
      </>
    );
  };

  const fourTemplate = () => {
    return (
      <>
        {bgImage.bgImage[0] ? (
          <CardMedia
            sx={{
              width: '50%',
              height: '50%',
              position: 'absolute',
            }}
            component="img"
            image={bgImage.bgImage[0] ?? ''}
            alt={bgImage.bgImage[0] ? 'placeImage' : ''}
          />
        ) : (
          <></>
        )}
        {bgImage.bgImage[1] ? (
          <CardMedia
            sx={{
              width: '50%',
              height: '50%',
              right: 0,
              position: 'absolute',
            }}
            component="img"
            image={bgImage.bgImage[1] ?? ''}
            alt={bgImage.bgImage[1] ? 'placeImage' : ''}
          />
        ) : (
          <></>
        )}
        {bgImage.bgImage[2] ? (
          <CardMedia
            sx={{
              width: '50%',
              height: '50%',
              bottom: 0,
              position: 'absolute',
            }}
            component="img"
            image={bgImage.bgImage[2] ?? ''}
            alt={bgImage.bgImage[2] ? 'placeImage' : ''}
          />
        ) : (
          <></>
        )}
        {bgImage.bgImage[3] ? (
          <CardMedia
            sx={{
              width: '50%',
              height: '50%',
              bottom: 0,
              right: 0,
              position: 'absolute',
            }}
            component="img"
            image={bgImage.bgImage[3] ?? ''}
            alt={bgImage.bgImage[3] ? 'placeImage' : ''}
          />
        ) : (
          <></>
        )}
      </>
    );
  };

  const currentComponent = () => {
    switch (bgImage.template) {
      case 'none':
        return noneTemplate();
      case 'one':
        return oneTemplate();
      case 'twoLeft':
        return twoLeftTemplate();
      case 'twoRight':
        return twoRightTemplate();
      case 'four':
        return fourTemplate();
    }
  };

  return <BgImageStyle>{currentComponent()}</BgImageStyle>;
};

const BgImageStyle = styled.div({
  zIndex: 1,
  opacity: 0.4,
  position: 'absolute',
  height: '100%',
  width: '100%',
});

export default BgImageTemplate;
