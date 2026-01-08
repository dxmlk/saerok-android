import { Tabs } from "expo-router";
import React from "react";

import FloatingTabBar from "@/components/FloatingTabBar";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="nest" // 기본 탭: 둥지
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <FloatingTabBar {...props} />}
    >
      <Tabs.Screen name="saerok" options={{ title: "새록" }} />
      <Tabs.Screen name="dex" options={{ title: "도감" }} />
      <Tabs.Screen name="nest" options={{ title: "둥지" }} />
      <Tabs.Screen name="map" options={{ title: "지도" }} />
      <Tabs.Screen name="my" options={{ title: "마이" }} />
    </Tabs>
  );
}
