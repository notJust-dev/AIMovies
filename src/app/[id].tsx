import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { supabase } from '../lib/supabase';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) {
        return;
      }
      const { data: movie } = await supabase
        .from('movies')
        .select('*')
        .eq('id', id)
        .single();

      if (movie) {
        setMovie(movie);
      }
    };
    fetchMovie();
  }, []);

  if (!movie) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.subtitle}>{movie.tagline}</Text>

      <Text style={styles.overview}>{movie.overview}</Text>

      <Text style={styles.similar}>Similar movies</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gainsboro',
    marginVertical: 5,
  },
  subtitle: {
    color: 'gray',
    fontSize: 16,
  },
  overview: {
    color: 'gainsboro',
    marginTop: 20,
    lineHeight: 20,
    fontSize: 16,
  },

  similar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gainsboro',
    marginVertical: 5,
    marginTop: 20,
  },
});

export default MovieDetails;
