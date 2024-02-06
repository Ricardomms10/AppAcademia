import React, { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";


export default function Agenda() {
    const bottomSheetRef = useRef(null);
    const [diaSelecionado, setDiaSelecionado] = useState(null);

    const expandBottomSheet = (Dia) => { 
        setDiaSelecionado(Dia);
        bottomSheetRef.current?.expand();
    }

    return (
        <View style={styles.container}>

            <Text style={styles.txtTile}> VEJA AS AULAS DO DIA </Text>
            <View style={styles.boxBtns}>
                <TouchableOpacity style={styles.btnWeek}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>SEG</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnWeek}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>TER</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnWeek}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>QUA</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxBtns}>
                <TouchableOpacity style={styles.btnWeek}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>QUI</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnWeek}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>SEX</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnWeek}>
                    <View style={styles.btnTop} />
                    <Text style={styles.txtBtn}>SAB</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}