import { View, Text, Image } from "react-native";

export default function Comic({ name, image }) {
  return (
    <View>
      <Text>{name}</Text>
      <Image source={{ uri: image }} style={{ width: 360, height: 520 }} />
    </View>
  );
}
