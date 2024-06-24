import { View, Text, Image } from "react-native";
import { Card } from "@rneui/themed";

export default function Comic({ name, image }) {
  return (
    <Card
      containerStyle={{
        backgroundColor: "#ebc8c5",
        borderColor: "#ed2213",
        borderStyle: "solid",
        borderWidth: 5,
        borderRadius: 15,
        height: "auto",
        width: 380,
      }}
    >
      <Card.Title>{name}</Card.Title>
      <Card.Image source={{ uri: image }} style={{ width: 360, height: 540 }} />
    </Card>
  );
}
