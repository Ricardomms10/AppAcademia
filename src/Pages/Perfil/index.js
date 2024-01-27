import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Perfil() {

    return (
        <View style={styles.container} >
            <Text style={styles.textTitle}>MEU PERFIL</Text>

            <TouchableOpacity style={styles.boxInfo}>

                <View style={styles.containerInfo}>

                    <Icon name="user" solid style={styles.textInfo} />

                    <View>
                        <Text style={styles.textInfo}>Ola, Ricardo</Text>
                        <Text style={styles.textInfo}>Ricardomms10</Text>
                        <Text style={styles.textInfo}>(13)98119-9007</Text>
                    </View>
                </View>
                <Icon name="angle-right" solid style={styles.textInfo} />
            </TouchableOpacity>

            <View></View>

            <TouchableOpacity style={styles.boxInfo}>

                <View style={styles.containerInfo}>
                    <Icon name="money-check" solid style={styles.textInfo} />
                    <Text style={styles.textInfo}>MENSALIDADE</Text>
                </View>
                <Icon name="angle-right" solid style={styles.textInfo} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxInfo}>

                <View style={styles.containerInfo}>
                    <Icon name="question" solid style={styles.textInfo} />
                    <Text style={styles.textInfo}>DÚVIDAS FRENQUENTES</Text>
                </View>
                <Icon name="angle-right" solid style={styles.textInfo} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxInfo}>

                <View style={styles.containerInfo}>
                    <Icon name="headset" solid style={styles.textInfo} />
                    <Text style={styles.textInfo}>FALE COM A GENTE</Text>
                </View>
                <Icon name="angle-right" solid style={styles.textInfo} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxInfo}>

                <View style={styles.containerInfo}>
                    <Icon name="door-open" solid style={styles.textInfo} />
                    <Text style={styles.textInfo}>SAIR</Text>
                </View>
                <Icon name="angle-right" solid style={styles.textInfo} />
            </TouchableOpacity>
        </View >

    )

}