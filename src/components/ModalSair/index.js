import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "./styles";

export default function ModalSair() {


    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                JÁ VAI ?
            </Text>

            <TouchableOpacity style={styles.btnSair}>
                <Icon 
                name="door-open" 
                solid={true} 
                style={styles.icon}/>
                <Text style={styles.textTitle}>
                    SAIR
                </Text>
            </TouchableOpacity>
        </View>
    )
}