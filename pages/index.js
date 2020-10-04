import { List, Heading } from '@chakra-ui/core';
import { songs as songList } from './api/songs'

import Song from '../components/Song';

export async function getStaticProps() {
  const songs = await songList({});

  return {
    props: {
      songs
    }
  };
}

export default ({ songs }) => (
  <>
    <Heading mt={8} mb={4} fontWeight="800">
      My Songs
    </Heading>
    <List>
      {songs.map((song) => (
        <Song key={song.id} {...song} />
      ))}
    </List>
  </>
);
