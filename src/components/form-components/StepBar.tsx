import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import { StepObjectType } from './step-Object';

interface StepBarProps {
  activeStep: number;
  steps: StepObjectType[];
}

const StepBar: React.FC<StepBarProps> = ({ activeStep, steps }) => {
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Stepper activeStep={activeStep - 1} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.id}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepBar;