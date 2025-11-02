import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { pilots } from './pilots';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏁 Super Trunfo F1 🏁</Text>
      {pilots.map((pilot) => (
        <View key={pilot.id} style={styles.card}>
          <Image source={{ uri: pilot.image }} style={styles.image} />
          <Text style={styles.name}>{pilot.name}</Text>
          <Text style={styles.team}>Equipe: {pilot.team}</Text>
          <Text style={styles.country}>País: {pilot.country}</Text>
          <Text style={styles.desc}>{pilot.description}</Text>
          <Text style={styles.stars}>{"⭐".repeat(pilot.stars)}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#111',
    paddingVertical: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    width: '90%',
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  team: {
    fontSize: 16,
    color: '#ccc',
  },
  country: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 8,
  },
  desc: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 8,
  },
  stars: {
    fontSize: 20,
    color: '#ffdd00',
  },
});
