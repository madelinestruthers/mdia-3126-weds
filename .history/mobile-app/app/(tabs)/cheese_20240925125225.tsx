import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
  <Text className="border-red-700">this is a page about chez</Text>
  <Link href="/" asChild>
      <Pressable>
        <Text>Index</Text>
      </Pressable>
    </Link>
  </View>
  )
}