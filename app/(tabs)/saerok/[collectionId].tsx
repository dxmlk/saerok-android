import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SaerokDetail() {
  const { postId } = useLocalSearchParams();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>새록 상세 페이지: {postId}</Text>
    </SafeAreaView>
  );
}
