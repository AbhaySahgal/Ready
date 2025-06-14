// src/data/stylingwithflexbox.js

const stylingwithflexbox = {
    id: 3,
    question: "Styling with Flexbox , Implement a responsive layout with a header, footer, and three columns using StyleSheet and Flexbox properties",
    solution: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>

      {/* Main Content with 3 Columns */}
      <View style={styles.content}>
        <View style={styles.column}><Text style={styles.columnText}>Column 1</Text></View>
        <View style={styles.column}><Text style={styles.columnText}>Column 2</Text></View>
        <View style={styles.column}><Text style={styles.columnText}>Column 3</Text></View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 60,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  column: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  columnText: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    height: 50,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
});

`,
};

export default stylingwithflexbox;
