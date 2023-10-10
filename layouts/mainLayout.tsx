import Navbar from '@/components/navbar';
import Player from '@/components/player';
import { Container } from '@mui/material';

export default function MainLayout({ children }: any) {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '90px auto' }}>{children}</Container>
      <Player />
    </>
  );
}
