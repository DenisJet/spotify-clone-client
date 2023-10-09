import TrackList from '@/components/trackList';
import MainLayout from '@/layouts/mainLayout';
import { ITrack } from '@/types/track';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'Трек 1',
      artist: 'Исполнитель 1',
      text: 'Какой то текст',
      listens: 5,
      audio: 'http://localhost:5000/audio/2ee244f0-68b5-4b6e-a5f3-2dfcb29b0961.mp3',
      picture: 'http://localhost:5000/image/2ff90916-b4b7-4041-89ed-b28b7772a759.jpg',
      comments: [],
    },
    {
      _id: '2',
      name: 'Трек 2',
      artist: 'Исполнитель 2',
      text: 'Какой то текст',
      listens: 5,
      audio: 'http://localhost:5000/audio/10451665-fead-4a8c-9190-ad0464504440.mp3',
      picture: 'http://localhost:5000/image/07c896fb-1d3c-4e9a-b163-77336609bed0.png',
      comments: [],
    },
    {
      _id: '3',
      name: 'Трек 3',
      artist: 'Исполнитель 3',
      text: 'Какой то текст',
      listens: 5,
      audio: 'http://localhost:5000/audio/f654b0cf-9859-493d-9ffe-c466a5aec345.mp3',
      picture: 'http://localhost:5000/image/fb13a03e-56d8-47e4-8dda-f871ee99d5a9.png',
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
}
