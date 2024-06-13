import * as React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CharacterCard({ image, name }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Detail")}>
      <Text>{name}</Text>
      <Image source={{ uri: image }} />
    </Pressable>
  );
}