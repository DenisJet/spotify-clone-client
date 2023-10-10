import FileUpload from '@/components/fileUpload';
import StepWrapper from '@/components/stepWrapper';
import MainLayout from '@/layouts/mainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
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
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept='image/*'>
            <Button>Загрузите обложку</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept='audio/*'>
            <Button>Загрузите аудио</Button>
          </FileUpload>
        )}
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
