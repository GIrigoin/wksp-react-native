import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import apiParams from "../utils/config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

export default function TabLayout() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;
  const route = useRoute();

  useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters/${route.params.id}`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setData(response.data.data.results[0]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return isLoading ? (
    <ActivityIndicator size="large" color="#00ff00" />
  ) : (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red", headerShown: false }}>
      <Tabs.Screen
        name="Perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="address-card" color={color} />
          ),
          href: {
            pathname: "/Detail/Perfil",
            params: {
              image: `${data?.thumbnail?.path}.${data.thumbnail.extension}`,
              name: data.name,
              description: data.description,
            },
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Comics"
        options={{
          title: "Comics",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="newspaper-o" color={color} />
          ),
          href: {
            pathname: "/Detail/Comics",
            params: {
              listComics: JSON.stringify(data?.comics?.items),
            },
          },
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
