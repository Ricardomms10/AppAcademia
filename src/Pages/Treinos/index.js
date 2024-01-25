import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import styles from "./styles";
import { DataTreinos } from "./dataTreinos";

export default function Treinos() {
    const bottomSheetRef = useRef(null);
    const [treinoSelecionado, setTreinoSelecionado] = useState(null);

    const expandBottomSheet = (treino) => {
        setTreinoSelecionado(treino);
        bottomSheetRef.current?.expand();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textPlano}>PLANOS DE TREINOS</Text>

            <TouchableOpacity onPress={() => expandBottomSheet(DataTreinos.treinoA)} style={styles.BoxBtn}>
                <Image source={require('../../../assets/planoa.jpg')} style={styles.imageStyle} />
                <View style={styles.overlayContainer}>
                    <Text style={styles.textBtn}>TREINO A</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => expandBottomSheet(DataTreinos.treinoB)} style={styles.BoxBtn}>
                <Image source={require('../../../assets/planoC.jpg')} style={styles.imageStyle} />
                <View style={styles.overlayContainer}>
                    <Text style={styles.textBtn}>TREINO B</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => expandBottomSheet(DataTreinos.treinoC)} style={styles.BoxBtn}>
                <Image source={require('../../../assets/planob.jpg')} style={styles.imageStyle} />
                <View style={styles.overlayContainer}>
                    <Text style={styles.textBtn}>TREINO C</Text>
                </View>
            </TouchableOpacity>

            <BottomSheet ref={bottomSheetRef} snapPoints={[1, '80%']}>
                {treinoSelecionado && (
                    <View style={styles.containerModal}>
                        <Text style={styles.textModal}>{treinoSelecionado.title}</Text>

                        {Object.values(treinoSelecionado.exercicios).map((exercicio, index) => (
                            <View key={index} style={styles.boxTreinos}>
                                <Text style={styles.titleBox}>{exercicio.name}</Text>
                                <View style={styles.row}>
                                    <Text style={styles.textTreino}>Séries:</Text>
                                    <Text style={styles.textTreino}>{exercicio.series}</Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.textTreino}>Repetições: </Text>
                                    <Text style={styles.textTreino}>{exercicio?.repeticoes}</Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.textTreino}>Peso/Tempo: </Text>
                                    <Text style={styles.textTreino}>{exercicio.pesoTempo}</Text>
                                </View>


                            </View>
                        ))}
                    </View>
                )}
            </BottomSheet>
        </View>
    )
}
