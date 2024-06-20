import { View, Text, Image, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Perfil() {
  const route = useRoute();
  return route.params ? (
    <View>
      <Text>{route?.params?.name}</Text>
      <Image
        source={{ uri: route?.params?.image }}
        style={{ width: 480, height: 480 }}
      />
      <Text>{route?.params?.description}</Text>
    </View>
  ) : (
    <ActivityIndicator size="large" color="#00ff00" />
  );
}
