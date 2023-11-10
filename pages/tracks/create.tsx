import FileUpload from '@/components/fileUpload';
import StepWrapper from '@/components/stepWrapper';
import { BASEURL } from '@/consts';
import { useInput } from '@/hooks/useInput';
import MainLayout from '@/layouts/mainLayout';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState('');
  const [audio, setAudio] = useState('');
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const router = useRouter();

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('text', text.value);
      formData.append('artist', artist.value);
      formData.append('picture', picture);
      formData.append('audio', audio);
      axios
        .post(`${BASEURL}tracks`, formData)
        .then((resp) => router.push('/tracks'))
        .catch((e) => console.log(e));
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
            <TextField {...name} style={{ marginTop: 10 }} label={'Название трека'}></TextField>
            <TextField {...artist} style={{ marginTop: 10 }} label={'Имя исполнителя'}></TextField>
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label={'Слова в треке'}
              multiline
              rows={3}
            ></TextField>
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept='image/*'>
            <Button sx={{ fontWeight: 600 }}>Загрузите обложку</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept='audio/*'>
            <Button sx={{ fontWeight: 600 }}>Загрузите аудио</Button>
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
