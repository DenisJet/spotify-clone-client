import TrackList from '@/components/trackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/mainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks, searchTracks } from '@/store/action-creators/track';
import { ITrack } from '@/types/track';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Index() {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.track);
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch() as NextThunkDispatch;
  const [timer, setTimer] = useState<number>();

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      window.setTimeout(async () => {
        await dispatch(await searchTracks(e.target.value));
      }, 1000)
    );
  };

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={'Список треков - музыкальная площадка'}>
      <Grid container justifyContent='center'>
        <Card style={{ width: 900 }}>
          <Box p={2}>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')} sx={{ fontWeight: 600 }}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <Box p={2}>
            <TextField
              fullWidth
              value={query}
              onChange={search}
              placeholder='введите название трека...'
            />
            <TrackList tracks={tracks} />
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchTracks());

  return { props: {} };
});
