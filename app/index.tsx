import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useState } from "react";
import { 
  View, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator,
  Text
} from "react-native";
import { CharacterCard } from "../components/CharacterCard";

export default function App() {
  const [page, setPage] = useState(1);
  const { isPending, error, isError, data } = useQuery({
    queryKey: ['repoData', page],
    queryFn: () =>
      fetch(`https://swapi.py4e.com/api/people/?page=${page}`).then((res) =>{
        console.log({res})
        return res.json()
      }
      ),
  })

  console.log({data, error, isError, url: `https://swapi.py4e.com/api/people/?page=${page}`})

  const handleLoadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={isPending}
        onRefresh={() => setPage(1)}
        data={data?.results}
        renderItem={({ item }) => <CharacterCard character={item} />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 16,
  },
});
