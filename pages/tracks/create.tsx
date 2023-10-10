import StepWrapper from '@/components/stepWrapper';
import MainLayout from '@/layouts/mainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction='column' style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label={'Название трека'}></TextField>
            <TextField style={{ marginTop: 10 }} label={'Имя исполнителя'}></TextField>
            <TextField
              style={{ marginTop: 10 }}
              label={'Слова в треке'}
              multiline
              rows={3}
            ></TextField>
          </Grid>
        )}
        {activeStep === 1 && <h1 style={{ paddingLeft: 20 }}>Step 2</h1>}
        {activeStep === 2 && <h1 style={{ paddingLeft: 20 }}>Step 3</h1>}
      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep === 0} onClick={back}>
          Назад
        </Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
