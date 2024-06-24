import { useState, useEffect } from "react";
import apiParams from "../utils/config";
import axios from "axios";
import { View, FlatList, ActivityIndicator } from "react-native";
import CharacterCard from "./CharacterCard";
import { SearchBar, Button } from "@rneui/themed";

export default function Home() {
  const offset = 20;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const updateSearch = (search) => {
    setSearch(search);
  };
  function searchCharacter() {
    if (search) {
      setLoading(true);
      axios
        .get(`${baseURL}/v1/public/characters`, {
          params: {
            ts,
            apikey,
            hash,
            nameStartsWith: search,
          },
        })
        .then((response) => setData(response.data.data.results))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }
  const handleReset = () => {
    setLoading(true);
    axios
      .get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          limit: 20,
          offset: 0,
        },
      })
      .then((response) => setData(response.data.data.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    setSearch("");
  };

  const handlePagination = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          limit: 20,
          offset: page * 20,
        },
      })
      .then((response) => {
        setData([...data, ...response.data.data.results]);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
            }}
          >
            <SearchBar
              onChangeText={updateSearch}
              value={search}
              platform="android"
              containerStyle={{ flex: 3 }}
            />
            <Button
              onPress={searchCharacter}
              size="xl"
              color="error"
              containerStyle={{ flex: 1 }}
              titleStyle={{ fontSize: 9 }}
            >
              Buscar
            </Button>
            <Button
              onPress={handleReset}
              size="xl"
              containerStyle={{ flex: 1 }}
              titleStyle={{ fontSize: 9 }}
            >
              Reset
            </Button>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 5,
              paddingHorizontal: 5,
              height: "90%",
            }}
          >
            <FlatList
              contentContainerStyle={{
                flexDirection: "column",
                alignItems: "center",
              }}
              data={data}
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item }) => (
                <CharacterCard
                  id={item.id}
                  image={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  name={item.name}
                />
              )}
              onEndReachedThreshold={0.5}
              onEndReached={handlePagination}
            />
          </View>
        </View>
      )}
    </View>
  );
}
