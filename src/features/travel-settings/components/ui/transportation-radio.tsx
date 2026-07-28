import Box from '@mui/system/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import TrainIcon from '@mui/icons-material/Train';

const TransportationRadio = ({
  transport,
  onChange,
}: {
  transport: string;
  onChange: (event: { target: { value: string } }) => void;
}) => {
  return (
    <FormControl>
      <FormLabel
        sx={{ display: 'frex', justifyContent: 'center' }}
        id="demo-row-radio-buttons-group-label"
      >
        交通手段
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={transport}
        sx={{ display: 'frex', justifyContent: 'center' }}
        onChange={onChange}
      >
        <Box>
          <FormControlLabel
            value="walk"
            label={<DirectionsWalkIcon />}
            control={<Radio />}
          />
          <FormControlLabel
            value="bike"
            label={<DirectionsBikeIcon />}
            control={<Radio />}
          />
          <FormControlLabel
            value="myCar"
            label={<DirectionsCarIcon />}
            control={<Radio />}
          />
        </Box>
        <Box>
          <FormControlLabel
            value="bus"
            label={<DirectionsBusIcon />}
            control={<Radio />}
          />
          <FormControlLabel
            value="taxi"
            label={<LocalTaxiIcon />}
            control={<Radio />}
          />
          <FormControlLabel
            value="train"
            label={<TrainIcon />}
            control={<Radio />}
          />
        </Box>
      </RadioGroup>
    </FormControl>
  );
};

export default TransportationRadio;
