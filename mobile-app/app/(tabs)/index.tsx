import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return(
    <View>
      <Link href="/sandwich">sandwich page</Link>
      <Link href="/cheese">cheese page</Link>
    </View>
  )
}