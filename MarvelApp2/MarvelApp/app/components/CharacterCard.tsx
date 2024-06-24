import * as React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Avatar } from "@rneui/themed";

export default function CharacterCard({ id, image, name }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { id })}
    >
      {/* <Image
        source={{ uri: image }}
        style={{ width: 128, height: 128, margin: 10, borderRadius: 10 }}
      /> */}
      <Avatar
        source={{ uri: image }}
        size={128}
        rounded
        containerStyle={{ margin: 10 }}
      />
      <Text h3 style={{ flex: 1 }}>
        {name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ebc8c5",
    borderColor: "#ed2213",
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 15,
    marginVertical: 4,
  },
});
