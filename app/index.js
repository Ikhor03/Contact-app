import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from '../constants'
import {
  Contacts, ScreenHeaderBtn, Welcome
} from '../components'

const Home = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.lightWhite }
      }>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.add} dimension={"60%"} handlePress={() => router.push('/add-contact')}/>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension={"100%"} />
          ),
          headerTitle: "",
          
        }}
      />

      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          <Contacts />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

export default Home;