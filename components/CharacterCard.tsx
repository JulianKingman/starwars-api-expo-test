import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

interface CharacterCardProps {
  character: Character;
}

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoItem}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export const CharacterCard = ({ character }: CharacterCardProps) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.birthYear}>{character.birth_year}</Text>
    </View>
    
    <View style={styles.infoGrid}>
      <InfoItem label="Height" value={`${character.height}cm`} />
      <InfoItem label="Mass" value={`${character.mass}kg`} />
      <InfoItem label="Hair" value={character.hair_color} />
      <InfoItem label="Skin" value={character.skin_color} />
      <InfoItem label="Eyes" value={character.eye_color} />
      <InfoItem label="Gender" value={character.gender} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  birthYear: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  infoItem: {
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#95a5a6',
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    color: '#34495e',
    textTransform: 'capitalize',
  },
}); 