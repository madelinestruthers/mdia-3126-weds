import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.pageTitle}>
  <Text className="border-red-700 border-2">this is a page about chez</Text>
  <Link href="/" asChild>
      <Pressable>
        <Text>Index</Text>
      </Pressable>
    </Link>
  </View>
  )
}

const styles = StyleSheet.create({
  pageTitle: {
    fontFamily: 'poppins',
    borderColor: 'blue',
    borderWidth: 2,
    borderStyle: 'solid'
  },
})