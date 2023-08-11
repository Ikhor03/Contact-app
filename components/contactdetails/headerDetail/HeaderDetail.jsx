import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './headerDetail.style'
import { icons } from '../../../constants';

const HeaderDetail = ({ image, name, phone, address }) => {
  // console.log({image, name, phone, address})
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{ uri: image }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.contactsTitle} >
        <Text>{name}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{`${phone} `}</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{address?.city}</Text>
        </View>
      </View>
    </View>
  )
}

export default HeaderDetail