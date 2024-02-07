import React, { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Text, TouchableOpacity, View, ScrollView, ImageBackground } from "react-native";
import styles from "./styles";
import { dataAgenda } from "./dataAgenda";
import Capa from "../../../assets/capinha.jpg";

export default function Agenda() {
    const bottomSheetRef = useRef(null);
    const [diaSelecionado, setDiaSelecionado] = useState(null);

    const expandBottomSheet = (dia) => {
        setDiaSelecionado(dataAgenda[dia]);
        bottomSheetRef.current?.expand();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.txtTile}> VEJA AS AULAS DO DIA </Text>
            <View style={styles.boxBtns}>
                <TouchableOpacity style={styles.btnWeek} onPress={() => expandBottomSheet('SEGUNDA')}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>SEG</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnWeek} onPress={() => expandBottomSheet('TERÇA')}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>TER</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnWeek} onPress={() => expandBottomSheet('QUARTA')}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>QUA</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxBtns}>
                <TouchableOpacity style={styles.btnWeek} onPress={() => expandBottomSheet('QUINTA')}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>QUI</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnWeek} onPress={() => expandBottomSheet('SEXTA')}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>SEX</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnWeek} onPress={() => expandBottomSheet('SÁBADO')}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>SAB</Text>
                </TouchableOpacity>
            </View>

            <BottomSheet ref={bottomSheetRef} snapPoints={[1, '80%']}>
                {diaSelecionado && (
                    <ScrollView contentContainerStyle={styles.containerModal}>
                        <Text style={styles.textModal}>Aulas</Text>
                        {Object.values(diaSelecionado).map((aula, index) => (
                            
                                <View key={index} style={styles.boxTreinos}>
                                    <ImageBackground source={Capa} >
                                    <Text style={styles.titleBox}>{aula.horario}</Text>
                                    <View style={styles.row}>
                                        <Text style={styles.textTreino}>{aula.treino}</Text>
                                        <Text style={styles.textTreino}>{aula.local}</Text>
                                    </View>
                                    </ImageBackground>
                                </View>
                            
                        ))}
                    </ScrollView>
                )}
            </BottomSheet>
        </View>
    );
}
