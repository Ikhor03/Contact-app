import { useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

const addContact = () => {
    const {id} = useLocalSearchParams();

    return (
        <View>
            <Text>{`Add Contact id : ${id}`}</Text>
        </View>
    )
}

export default addContact