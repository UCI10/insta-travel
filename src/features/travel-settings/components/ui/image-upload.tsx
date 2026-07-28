import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Box from '@mui/system/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ChangeEvent } from 'react';

const ImageUpload = ({
  index,
  image,
  imageChange,
}: {
  index: number;
  image: string | null;
  imageChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
}) => {
  return (
    <>
      {image === null ? (
        <>
          <Button
            sx={{
              mt: '10px',
              display: 'inline-table',
            }}
            component="label"
            role={undefined}
            variant="text"
            tabIndex={-1}
            color="success"
          >
            <Box
              height={130}
              width={130}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{
                border: '1px dashed grey',
                margin: '0 auto',
                justifyContent: 'center',
                color: 'grey',
              }}
            >
              <Typography variant="subtitle2">
                画像<p>アップロード</p>
              </Typography>
            </Box>
            <CloudUploadIcon />
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => imageChange(event, index)}
            />
          </Button>
        </>
      ) : (
        <>
          <Button
            sx={{
              mt: '10px',
              display: 'inline-table',
            }}
            component="label"
            role={undefined}
            variant="text"
            tabIndex={-1}
            color="success"
          >
            {image === '' ? 
            (
              <Box                  
                sx={{
                  minWidth: 130,
                  minHeight: 130,
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  border: '1px dashed grey',
                }}
              >
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => imageChange(event, index)}
                />
                <CloudUploadIcon />
              </Box>
            ): (
              <>
                <CardMedia
                  sx={{
                    maxWidth: 130,
                    maxHeight: 130,
                    margin: '0 auto',
                  }}
                  component="img"
                  image={image || ''}
                  alt="placeImage"
                />
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => imageChange(event, index)}
                />
                <CloudUploadIcon sx={{ margin: '0 auto', display: 'block' }} />
              </>
            )}
          </Button>
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => imageChange(event, index)}
          />
        </>
      )}
    </>
  );
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default ImageUpload;
