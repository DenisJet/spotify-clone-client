import Navbar from '@/components/navbar';
import Player from '@/components/player';
import { Container } from '@mui/material';
import Head from 'next/head';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function MainLayout({ children, title, description, keywords }: any) {
  return (
    <>
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
        <meta
          name='description'
          content={`Музыкальная площадка. Здесь каждый может оставить свой трек ${
            description ? description : ''
          }.`}
        />
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content={keywords || 'Музыка, треки, артисты'} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <Container style={{ margin: '90px auto' }}>{children}</Container>
      <Player />
    </>
  );
}
