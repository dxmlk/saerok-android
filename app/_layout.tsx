import "@/global.css";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)", // 앱 진입 시 (tabs) 그룹부터 시작
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        {/* 메인 탭 그룹 */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" />
      </Stack>
    </SafeAreaProvider>
  );
}
