import MainLayout from '@/layouts/mainLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const TrackPage = () => {
  const router = useRouter();
  const track: ITrack = {
    _id: '1',
    name: 'Трек 1',
    artist: 'Исполнитель 1',
    text: 'Какой то текст',
    listens: 5,
    audio: 'http://localhost:5000/audio/2ee244f0-68b5-4b6e-a5f3-2dfcb29b0961.mp3',
    picture: 'http://localhost:5000/image/2ff90916-b4b7-4041-89ed-b28b7772a759.jpg',
    comments: [],
  };

  return (
    <MainLayout>
      <Button onClick={() => router.push('/tracks')} variant={'outlined'} style={{ fontSize: 32 }}>
        К списку
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img src={track.picture} width={200} height={200} alt='track image' />
        <div style={{ marginLeft: 30 }}>
          <h1>Название трека - {track.name}</h1>
          <h2>Исполнитель - {track.artist}</h2>
          <h2>Прослушиваний - {track.listens}</h2>
        </div>
      </Grid>
      <h2>Слова в треке</h2>
      <p>{track.text}</p>
      <h2>Комментарии</h2>
      <Grid container>
        <TextField label='Ваше имя' fullWidth />
        <TextField label='Текст комментария' fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
