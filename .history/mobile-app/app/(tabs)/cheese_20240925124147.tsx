import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
  <Text>this idddds a page about chez</Text>
  <Link href="/" asChild>
      <Pressable>
        <Text>Index</Text>
      </Pressable>
    </Link>
  </View>
  )
}