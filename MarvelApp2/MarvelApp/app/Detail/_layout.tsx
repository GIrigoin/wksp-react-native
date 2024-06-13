import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red", headerShown: false }}>
      <Tabs.Screen
        name="Perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="address-card" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Comics"
        options={{
          title: "Comics",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="newspaper-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
