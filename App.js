import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet } from 'react-native';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { RECIPES } from './data/recipes';

export default function App() {
  const [selected, setSelected] = useState(null);
  const [recipes] = useState(RECIPES);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kitchen Guide</Text>
      </View>

      {selected ? (
        <RecipeDetail recipe={selected} onBack={() => setSelected(null)} />
      ) : (
        <RecipeList recipes={recipes} onSelect={(r) => setSelected(r)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f3f4f6' },
  header: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  headerTitle: { fontSize: 20, fontWeight: '700' }
});
