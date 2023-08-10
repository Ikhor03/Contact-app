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


      <View style={styles.textContainer}>
        <Text style={styles.primaryText(selectedContact, item)} numberOfLines={1}>
          {`${item.firstName} ${item.lastName}`}
        </Text>

        <Text style={styles.secondaryText}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ContactCard