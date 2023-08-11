import {
  View, Text, TouchableOpacity, FlatList, ActivityIndicator
} from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import styles from './contacts.style'
import { COLORS, SIZES } from '../../../constants'
import ContactCard from '../../common/cards/contacts/ContactsCard'
import { useFetch } from '../../../hook/useFetch';

const Contacts = () => {
  const router = useRouter();
  const [selectedContact, setSelectedContact] = useState();
  
  const {data, isLoading, error} = useFetch('', {});

  const handleCardPress = (item) => {
    router.push(`/contact-details/${item.id}`);
    setSelectedContact(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Contacts</Text>
        <TouchableOpacity onPress={() => router.push('/add-contact')}>
          <Text style={styles.headerBtn} >NEW</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer} >
        {
          isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data.map((item) => (
              <ContactCard
                key={item.id}
                item={item}
                selectedContact={selectedContact}
                handleCardPress={handleCardPress}
              />
            ))
          )
        }

      </View>
    </View>
  )
}

export default Contacts