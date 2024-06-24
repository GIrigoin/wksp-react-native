import { useRoute } from "@react-navigation/native";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import Comic from "../components/Comic";
import { useEffect, useState } from "react";
import apiParams from "../utils/config";
import axios from "axios";

export default function Comics() {
  const route = useRoute();
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    const listComics = JSON.parse(route.params.listComics);
    const promisesArray = listComics.map((c) =>
      axios.get(c.resourceURI, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
    );

    Promise.all(promisesArray)
      .then((responses) =>
        setData(responses.map((r) => r?.data?.data?.results[0]))
      )
      .catch((error) => console.error(error));
  }, []);

  return route.params ? (
    <ScrollView horizontal={true} style={{ margin: 5 }}>
      {data.map((c) => (
        <Comic
          key={c.id}
          name={c.title}
          image={`${c?.thumbnail?.path}.${c.thumbnail.extension}`}
        />
      ))}
      {/* <Text>Comicssssssss</Text> */}
    </ScrollView>
  ) : (
    <ActivityIndicator size="large" color="#00ff00" />
  );
}
