import Navbar from '@/components/navbar';
import { Container } from '@mui/material';

export default function MainLayout({ children }: any) {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '90px 0' }}>{children}</Container>
    </>
  );
}
