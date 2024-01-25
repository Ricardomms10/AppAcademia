import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Planos = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/logo.png')}
                alt='logo'
                style={styles.img}
            />

            <Text style={styles.textPlanos}>NOVOS PLANOS:</Text>

            <View style={styles.boxPlanos}>
                <View style={styles.card}>
                    <View style={styles.boxName}>
                        <Text style={styles.textName}>
                            PLANO{'\n'}
                            MENSAL
                        </Text>
                    </View>
                    <Text style={styles.textValor}>R$ 69,99</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.boxName}>
                        <Text style={styles.textName}>
                            PLANO{'\n'}
                            TRIMESTRAL
                        </Text>
                        <View />
                    </View>
                    <Text style={styles.textValor}>R$ 149,99</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.boxName}>
                        <Text style={styles.textName}>
                            PLANO{'\n'}
                            ANUAL
                        </Text>
                    </View>
                    <Text style={styles.textValor}>R$ 499,99</Text>
                </View>
            </View>
        </View>
    );
};

export default Planos;
