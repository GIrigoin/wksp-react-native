import * as React from "react";
import { Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "@rneui/themed";

export default function CharacterCard({ id, image, name }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Detail", { id })}>
      <Text h1>{name}</Text>
      <Image source={{ uri: image }} style={{ width: 128, height: 128 }} />
    </Pressable>
  );
}
