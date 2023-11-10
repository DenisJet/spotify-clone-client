import { BASEURL } from '@/consts';
import { useInput } from '@/hooks/useInput';
import MainLayout from '@/layouts/mainLayout';
import { ITrack } from '@/types/track';
import { Box, Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const TrackPage = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const username = useInput('');
  const text = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post(`${BASEURL}tracks/comment`, {
        username: username.value,
        text: text.value,
        trackId: track._id,
      });
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout
      title={'Музыкальная площадка - ' + track.name + ' - ' + track.artist}
      keywords={'Музыка, артисты, ' + track.name + ' - ' + track.artist}
    >
      <Button onClick={() => router.push('/tracks')} variant={'outlined'} style={{ fontSize: 32 }}>
        К списку
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img src={`${BASEURL}${track.picture}`} width={200} height={200} alt='track image' />
        <div style={{ marginLeft: 30 }}>
          <h1>Название трека - {track.name}</h1>
          <h2>Исполнитель - {track.artist}</h2>
          <h2>Прослушиваний - {track.listens}</h2>
        </div>
      </Grid>
      <h2>Слова в треке</h2>
      <p>{track.text}</p>
      <h2>Комментарии</h2>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Автор - {comment?.username}</div>
            <div>Комментарий - {comment?.text}</div>
          </div>
        ))}
      </div>
      <h2>Добавить комментарий</h2>
      <Grid container style={{ marginBottom: 35 }}>
        <TextField
          style={{ marginBottom: 20 }}
          {...username}
          label='Ваше имя'
          fullWidth
          placeholder=''
        />
        <TextField
          style={{ marginBottom: 10 }}
          {...text}
          label='Текст комментария'
          fullWidth
          multiline
          rows={4}
        />
        <Button onClick={addComment}>Отправить</Button>
      </Grid>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get(`${BASEURL}tracks/${params?.id}`);
  return {
    props: {
      serverTrack: response.data,
    },
  };
};
