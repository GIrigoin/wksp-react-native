import * as React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CharacterCard({ id, image, name }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Detail", { id })}>
      <Text>{name}</Text>
      <Image source={{ uri: image }} style={{ width: 128, height: 128 }} />
    </Pressable>
  );
}
