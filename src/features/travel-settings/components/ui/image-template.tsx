import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Box from '@mui/system/Box';
import { BackGroundTemplate, BackGroundTemplateType } from '@/types/useBackGroundTemplate';

const ImageTemplate = ({
  imageTemplate,
  changeTemplate,
}: {
  imageTemplate: BackGroundTemplateType;
  changeTemplate: (id: BackGroundTemplateType) => void;
}) => {
  const changeBorderStyle = (id: BackGroundTemplateType): boolean => {
    if (imageTemplate === id) {
      return true;
    }
    return false;
  };

  const noneTemplate = () => {
    return (
      <Box
        sx={{
          width: changeBorderStyle('none') ? 68 : 60,
          height: changeBorderStyle('none') ? 68 : 60,
          position: 'relative',
          border: changeBorderStyle('none') ? '5px ridge #111111' : '1px solid',
          '&:hover': {
            bgcolor: 'Highlight',
            opacity: '0.3',
          },
        }}
      >
        <></>
      </Box>
    );
  };

  const oneTemplate = () => {
    return (
      <Box
        sx={{
          width: changeBorderStyle('one') ? 68 : 60,
          height: changeBorderStyle('one') ? 68 : 60,
          position: 'relative',
          border: changeBorderStyle('one') ? '5px ridge #111111' : '1px solid',
          '&:hover': {
            bgcolor: 'Highlight',
            opacity: '0.3',
          },
        }}
      >
        <Box
          sx={{
            width: 58,
            height: 58,
            position: 'absolute',
            bgcolor: '#DDDDDD',
            zIndex: '0',
            '&:hover': {
              bgcolor: 'Highlight',
              opacity: '0.3',
            },
          }}
        />
      </Box>
    );
  };

  const twoLeftTemplate = () => {
    return (
      <Box
        sx={{
          width: changeBorderStyle('twoLeft') ? 68 : 60,
          height: changeBorderStyle('twoLeft') ? 68 : 60,
          position: 'relative',
          border: changeBorderStyle('twoLeft')
            ? '5px ridge #111111'
            : '1px solid',
          '&:hover': {
            bgcolor: 'Highlight',
            opacity: '0.3',
          },
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 30,
            position: 'absolute',
            bgcolor: '#DDDDDD',
            '&:hover': {
              bgcolor: 'Highlight',
              opacity: '0.3',
            },
          }}
        />
        <Box
          sx={{
            width: 30,
            height: 30,
            position: 'absolute',
            bgcolor: '#DDDDDD',
            right: '0',
            bottom: '0',
            '&:hover': {
              bgcolor: 'Highlight',
              opacity: '0.3',
            },
          }}
        />
      </Box>
    );
  };

  const twoRightTemplate = () => {
    return (
      <Box
        sx={{
          width: changeBorderStyle('twoRight') ? 68 : 60,
          height: changeBorderStyle('twoRight') ? 68 : 60,
          position: 'relative',
          border: changeBorderStyle('twoRight')
            ? '5px ridge #111111'
            : '1px solid',
          '&:hover': {
            bgcolor: 'Highlight',
            opacity: '0.3',
          },
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 30,
            position: 'absolute',
            bgcolor: '#DDDDDD',
            right: '0',
            '&:hover': {
              bgcolor: 'Highlight',
              opacity: '0.3',
            },
          }}
        />
        <Box
          sx={{
            width: 30,
            height: 30,
            position: 'absolute',
            bgcolor: '#DDDDDD',
            left: '0',
            bottom: '0',
            '&:hover': {
              bgcolor: 'Highlight',
              opacity: '0.3',
            },
          }}
        />
      </Box>
    );
  };

  const fourTemplate = () => {
    return (
      <Box
        sx={{
          width: changeBorderStyle('four') ? 68 : 60,
          height: changeBorderStyle('four') ? 68 : 60,
          position: 'relative',
          border: changeBorderStyle('four') ? '5px ridge #111111' : '1px solid',
          '&:hover': {
            bgcolor: 'Highlight',
            opacity: '0.3',
          },
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 30,
            position: 'absolute',
            bgcolor: '#EEEEEE',
            '&:hover': {
              bgcolor: 'Highlight',
              opacity: '0.3',
            },
          }}
        />
        <Box
          sx={{
            width: 30,
            height: 30,
            position: 'absolute',
            bgcolor: '#DDDDDD',
            right: '0',
            top: '0',
            '&:hover': {
              bgcolor: 'Highlight',
              opacity: '0.3',
            },
          }}
        />
        <Box
          sx={{
            width: 30,
            height: 30,
            position: 'absolute',
            bgcolor: '#CCCCCC',
            left: '0',
            bottom: '0',
            '&:hover': {
              bgcolor: 'Highlight',
              opacity: '0.3',
            },
          }}
        />
        <Box
          sx={{
            width: 30,
            height: 30,
            position: 'absolute',
            bgcolor: '#BBBBBB',
            right: '0',
            bottom: '0',
            '&:hover': {
              bgcolor: 'Highlight',
              opacity: '0.3',
            },
          }}
        />
      </Box>
    );
  };

  return (
    <>
      <Typography variant="subtitle2">背景画像テンプレート</Typography>
      <BgImageTemplate>
        <ImageTemplateButton onClick={() => changeTemplate(BackGroundTemplate.none)}>
          {noneTemplate()}
        </ImageTemplateButton>
        <ImageTemplateButton onClick={() => changeTemplate(BackGroundTemplate.one)}>
          {oneTemplate()}
        </ImageTemplateButton>
        <ImageTemplateButton onClick={() => changeTemplate(BackGroundTemplate.twoLeft)}>
          {twoLeftTemplate()}
        </ImageTemplateButton>
        <ImageTemplateButton onClick={() => changeTemplate(BackGroundTemplate.twoRight)}>
          {twoRightTemplate()}
        </ImageTemplateButton>
        <ImageTemplateButton onClick={() => changeTemplate(BackGroundTemplate.four)}>
          {fourTemplate()}
        </ImageTemplateButton>
      </BgImageTemplate>
    </>
  );
};

const BgImageTemplate = styled.div({
  display: 'frex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '10px',
});

const ImageTemplateButton = styled.button({
  cursor: 'pointer',
  display: 'contents',
});

export default ImageTemplate;
