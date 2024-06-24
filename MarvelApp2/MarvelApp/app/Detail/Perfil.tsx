import { View, Image, ActivityIndicator, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Text, Card } from "@rneui/themed";

export default function Perfil() {
  const route = useRoute();
  return route.params ? (
    // <View style={styles.container}>
    //   <Text h1 h1Style={{ fontWeight: "bold" }}>
    //     {route?.params?.name}
    //   </Text>
    //   <Image
    //     source={{ uri: route?.params?.image }}
    //     style={{ width: 480, height: 480 }}
    //   />
    //   <Text>{route?.params?.description}</Text>
    // </View>
    <Card containerStyle={styles.container}>
      <Card.Title>{route?.params?.name}</Card.Title>
      <Card.Divider />
      <Card.Image
        source={{ uri: route?.params?.image }}
        style={{ width: 360, height: 360, borderRadius: 10 }}
      />
      <Text h5>{route?.params?.description}</Text>
    </Card>
  ) : (
    <ActivityIndicator size="large" color="#00ff00" />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 380,
    // flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ebc8c5",
    borderColor: "#ed2213",
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 15,
    marginVertical: 4,
  },
});
