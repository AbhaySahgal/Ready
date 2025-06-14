// src/data/apifetchlist.js

const apifetchlist = {
    id: 2,
    question: "Fetch and Display API Data, Use the Fetch API to retrieve data (e.g., from https://reactnative.dev/movies.json) and render a list of items in a FlatList",
    solution: `import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // should start as true

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.movies);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>Release Year: {item.releaseYear}</Text>
          </View>
        )}
      />
    </View>
  );
}
`,
};

export default apifetchlist;
