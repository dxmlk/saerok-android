import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SaerokWrite() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>새록 작성하기</Text>
    </SafeAreaView>
  );
}
