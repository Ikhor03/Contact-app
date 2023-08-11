import { useCallback, useEffect, useState } from 'react';
import {
  Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl
} from 'react-native';
import { Stack, useRouter, useSearchParams, useLocalSearchParams } from 'expo-router';

import { HeaderDetail, ContactsAbout, ContactsFooter, ContactsTabs, ScreenHeaderBtn, Specifics, OptionModal } from "../../components";
import { COLORS, icons, SIZES } from '../../constants';
import { useFetch } from '../../hook/useFetch';

const CotactDetail = () => {
  const params = useLocalSearchParams();
  const router = useRouter()

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('contact')
  const [modalVisible, setModalVisible] = useState(false);

  const tabs = ['contact', 'address', 'company']

  const { data, isLoading, error, refetch } = useFetch(`/${params.id}`)

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, [])

  const displayTabContent = () => {
    switch (activeTab) {
      case 'contact':
        return <Specifics
          title="Contact"
          points={[data.phone, data.email]}
        />

      case 'address':
        return <ContactsAbout
          title='Address'
          info={`${data.address.address}, ${data.address.city} ${data.address.state} ${data.address.postalCode}`
            ?? "No data provided"}
        />

      case 'company':
        return <Specifics
          title="Company"
          points={[data.company.name, data.company.title, data.company.department]}
        />

      default:
        break;
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStayle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.userEdit}
              dimension="60%"
              handlePress={() => setModalVisible(true)}
            />
          ),
          headerTitle: ''
        }}
      >

      </Stack.Screen>
      <OptionModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={params.id}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {
          isLoading ? (
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          ) : error ? (
            <Text>Something went Wrong</Text>
          ) : !data ? (
            <Text>No data here</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <HeaderDetail
                image={data.image}
                name={data.firstName + " " + data.lastName}
                phone={data.phone}
                address={data.address}
              />

              <ContactsTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}

            </View>
          )
        }
      </ScrollView>

      <ContactsFooter url={data.domain} />
    </SafeAreaView>
  )
}

export default CotactDetail