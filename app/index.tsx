import { Link } from "expo-router";
import "../global.css"
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="font-bold text-light-200 text-5xl">
        Assalamu Alaikum!
      </Text>
      <Link href='./onboarding'>On Boarding!</Link>
      <Link href='./movie/avengers'>Avengers Movie</Link>
    </View>
  );
}