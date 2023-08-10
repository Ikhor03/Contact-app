import { 
  View, Text, TouchableOpacity, Image 
} from 'react-native';


import styles from './contactsCard.style'

const ContactCard = ({item, selectedContact, handleCardPress}) => {

  return (
    <TouchableOpacity
      style={styles.container(selectedContact, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity 
        style={styles.logoContainer(selectedContact, item)}
      >
        <Image 
          source={{ uri: item.image}}
          alt='profile image'
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.firstName} numberOfLines={1}>{item.phone}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.name(selectedContact, item)}>
          {`${item.firstName} ${item.lastName}`}
        </Text>
      </View>

      <Text style={styles.location}>{item.address.city}</Text>
    </TouchableOpacity>
  )
}

export default ContactCard