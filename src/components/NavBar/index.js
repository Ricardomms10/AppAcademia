import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "./styles";

export default function NavBar() {
    const [show, setShow] = useState(false);

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap:10 }}>
                <Text style={styles.textTiltle}>Olá, Ricardo</Text>

                <TouchableHighlight onPress={() => setShow(!show)} style={styles.boxIcon}>
                    {show ? (
                        <Icon name="eye" solid size={20} color="black"
                            style={styles.icon}
                        />)
                        :
                        (
                            <Icon name="eye-slash" solid size={20} color="black"
                                style={styles.icon}
                            />
                        )
                    }
                </TouchableHighlight>


            </View>
            <View style={styles.containerInfo}>
                <View style={styles.boxInfo}>
                    {show ? (
                        <View>
                            <Text style={styles.textInfo}>PESO</Text>
                            <Text style={styles.textInfo}>80.5 KG</Text>
                        </View>
                    ) : (
                        <View style={styles.ocultar} />
                    )}
                </View>

                <View style={styles.boxInfo}>
                    {show ? (
                        <View>
                            <Text style={styles.textInfo}>ALTURA</Text>
                            <Text style={styles.textInfo}>171 CM</Text>
                        </View>
                    ) : (

                        <View style={styles.ocultar} />
                    )}
                </View>

                <View style={styles.boxInfo}>
                    {show ? (
                        <View>
                            <Text style={styles.textInfo}>IMC</Text>
                            <Text style={styles.textInfo}>27.53</Text>
                        </View>
                    ) : (
                        <View style={styles.ocultar} />
                    )}
                </View>
            </View>

        </View>
    )
}