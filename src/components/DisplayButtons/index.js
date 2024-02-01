import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js'

export default function DisplayButtons() {
    const navigation = useNavigation();
    return (

        <View style={styles.container}>

            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, styles.buttonGray]}
                    onPress={() => navigation.navigate('Planos')}
                >
                    <Text style={styles.buttonText} >PLANOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonBlack]}
                    onPress={() => navigation.navigate('Treinos')}
                >
                    <Text style={styles.buttonText}>TREINOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonGray]}
                    onPress={() => navigation.navigate('Agenda')}
                >
                    <Text style={styles.buttonText}>AGENDA</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, styles.buttonBlack]}>
                    <Text style={styles.buttonText}>MAIS PROXIMA </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonGray]}>
                    <Text style={styles.buttonText}>ATIVIDADES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonBlack]}>
                    <Text style={styles.buttonText}>CONTATOS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};