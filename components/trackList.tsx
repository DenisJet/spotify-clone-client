import { ITrack } from '@/types/track';
import { Box, Grid } from '@mui/material';
import TrackItem from './trackItem';

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction='column'>
      <Box p={1}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
