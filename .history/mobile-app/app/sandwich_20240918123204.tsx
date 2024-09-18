import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View>
            <h2>hello</h2>
            <Text>this is a page about sandwiches</Text>
            <Link href="/">index page</Link>
            <Link href="/cheese">my cheez page</Link>
        </View>
    )
}