import { ITrack } from '@/types/track';
import { Card, Grid, IconButton } from '@mui/material';
import styles from '../styles/trackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { playTrack, pauseTrack, setActiveTrack } from '../store/action-creators/player';
import { useAction } from '@/hooks/useActions';
import { BASEURL } from '../consts';
import axios from 'axios';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useAction();

  const play = (e: any) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };

  const handleClick = () => {
    setActiveTrack(track);
    router.push('/tracks/' + track._id);
  };

  const handleDeleteClick = (evt: any) => {
    evt.stopPropagation();
    console.log(track._id);
    if (window.confirm('Вы действительно хотите удалить трек?')) {
      axios.delete(`${BASEURL}tracks/${track._id}`).then((resp) => router.push('/tracks'));
    }
  };

  return (
    <Card className={styles.track} onClick={handleClick}>
      <IconButton onClick={play}>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <img width={70} height={70} src={`${BASEURL}${track.picture}`} />
      <Grid container direction='column' style={{ width: 200, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton onClick={handleDeleteClick} style={{ marginLeft: 'auto' }}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
