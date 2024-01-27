import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Perfil() {

    return (
        <View style={styles.container} >
            <Text style={styles.textTitle}>MEU PERFIL</Text>

            <TouchableOpacity>
                <Icon name="user" solid />
                <View>
                    <Text>Ola, Ricardo</Text>
                    <Text>Ricardomms10</Text>
                    <Text>(13)98119-9007</Text>
                </View>
                <Icon name="angle-right" solid />
            </TouchableOpacity>

            <View></View>

            <View>
                <Text>MENSALIDADE</Text>
            </View>

            <View>
                <Text>DÚVIDAS FRENQUENTES</Text>
            </View>

            <View>
                <Text>FALE COM A GENTE</Text>
            </View>



            <View>
                <Text>SAIR</Text>
            </View>
        </View>

    )

}