import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function ColorSlider({ onValueChange }) {
    const [value, setValue] = React.useState(50); // Initialize value state with 50

    const handleChange = (event, newValue) => {
        setValue(newValue); // Update value state
        onValueChange(newValue); // Notify parent component of value change
      };
    
  return (
    <Box sx={{ width: 200 }}>
      <Slider
        aria-label="val"
        value={value} // Use value state
        getAriaValueText={valuetext}
        color={value > 50 ? "#71B659" : "#25321A"} // Change color based on value
        onChange={handleChange}
        sx={{
            '& .MuiSlider-thumb': {
                backgroundColor: value > 50 ? "#71B659" : "#25321A", // Set thumb color based on value
                border: value > 50 ? "#71B659" : "#25321A", // Set thumb color based on value
              },
            '& .MuiSlider-track': {
              height: 8, // Adjust the height of the track
              borderRadius: 4, // Adjust the border radius of the track
              backgroundColor: value > 50 ? "#71B659" : "#25321A", // Change track color based on value
              border: 'none', // Remove border from the track
            },
            '& .MuiSlider-rail': {
              height: 8, // Adjust the height of the rail
              borderRadius: 4, // Adjust the border radius of the rail
              backgroundColor: '#D9D9D9',
            },
          }}
      />
    </Box>
  );
}