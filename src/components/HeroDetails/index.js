import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import { styles } from './style';

const HeroDetails = (item) => {
    const image = item.thumbnail.path + '.' + item.thumbnail.extension
    const [isModalVisible, setIsVisibleModal] = React.useState(false)

    return (
        <View>
            <View style={styles.listItem}>
                <TouchableOpacity onPress={()=> setIsVisibleModal(true)}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: image }} />
                    </View>
                </TouchableOpacity>
                <View style={styles.infoContainer}>
                    <Text style={styles.bold}>{item.name}</Text>
                    <Text style={styles.normalText}>{item.description.substring(0, 125) + '...'}</Text>
                </View>
            </View>
            <Modal
                hideModalContentWhileAnimating={true}
                animationIn="fadeIn"
                isVisible={isModalVisible}
                onBackdropPress={() => setIsVisibleModal(false)}
                onBackButtonPress={() => setIsVisibleModal(false)}>
                <Image style={styles.largeImage} source={{ uri: image }} />
            </Modal>
        </View>
    );
}

export { HeroDetails };