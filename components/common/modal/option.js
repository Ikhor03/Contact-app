import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";
import { router } from 'expo-router';

const OptionModal = ({ modalVisible, setModalVisible, id }) => {

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <Modal
            animationType="None"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                closeModal();
            }}>
            <TouchableOpacity
                style={styles.modalOverlay}
                activeOpacity={1}
                onPress={closeModal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => router.push(`/edit-contact/${id}`)}>
                            <Text style={styles.modalText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert(`should be delete contact with id : ${id}`)} >
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        top: "2%",
        right: '10%',
    },
    // to make modal close when user touch screen
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    deleteText: {
        color: 'red',
        fontFamily: FONT.medium,
        textAlign: 'center',
        margin: 5
    },
    modalText: {
        margin: 5,
        textAlign: 'center',
        fontFamily: FONT.medium,
    },
});

export default OptionModal;
