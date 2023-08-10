import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';
import { useRouter } from 'expo-router';

const contactType = ['teman', 'keluarga', 'kolega'];

const Welcome = () => {
  const [activeContactType, setActiveContactType] = useState()
  const router = useRouter()
  return (
    <View>
      <View
        style={styles.container}
      >
        <Text style={styles.userName} >Welcome, Khor!</Text>
        <Text style={styles.welcomeMessage} > We glad you're back!</Text>
      </View>

      <View style={styles.searchContainer} >
        
        <View style={styles.searchWrapper} >
          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder="who are you looking for?"
          />
        </View>

        <TouchableOpacity 
          style={styles.searchBtn}
          onPress={() => {}}
        >
          <Image source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={contactType}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.tab(activeContactType, item)}
              onPress={() => {
                setActiveContactType(item);
                // router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeContactType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          
          keyExtractor={item => item}
          contentContainerStyle={{columnGap : SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome