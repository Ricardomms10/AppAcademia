import React, { useState } from "react";
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import dataMensalidade from "./DataMensalidade";
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function ModalMnsalidade() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedMonth, setSelectedMonth] = useState(null);

    return (

        <View style={styles.containerModal}>
            <Text style={styles.textTitle}>
                MINHAS CONTAS
            </Text>
            {Object.keys(dataMensalidade).map((mes, index) => (

                <TouchableOpacity
                    key={index}
                    style={styles.containerInfo}
                    onPress={() => {
                        setSelectedMonth(mes);
                        setModalVisible(true);
                    }} >
                    <View style={styles.boxInfo}>
                        <Text style={styles.textInfo}>
                            {mes}, ({dataMensalidade[mes].data})
                        </Text>
                        <Text style={[
                            styles.textInfo,
                            dataMensalidade[mes].status === 'À vencer' ? styles.textRed : styles.textGreen
                        ]}>
                            {dataMensalidade[mes].valor}
                        </Text>
                    </View>
                    <Text style={[
                        styles.textInfo,
                        dataMensalidade[mes].status === 'À vencer' ? styles.textRed : styles.textGreen
                    ]}>
                        {dataMensalidade[mes].status}</Text>
                </TouchableOpacity>
            ))}

            <Modal transparent={true}
            animationType="slide"
            visible={modalVisible} >
                <SafeAreaView
                    style={styles.boxModal}
                    onTouchStart={() => setModalVisible(false)}>

                    <View style={styles.popUp}>
                        {selectedMonth && (
                            <View >
                                <TouchableOpacity style={styles.boxBtn}>
                                    <Icon name="landmark" solid />
                                    <Text style={styles.textModal}> Pagar com PIX</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.boxBtn}>
                                    <Icon name="money-bill" solid={false} />
                                    <Text style={styles.textModal}> Pagar com código de Barras</Text>
                                </TouchableOpacity>
                            </View>

                        )}
                    </View>
                </SafeAreaView>
            </Modal>

        </View>
    )
}