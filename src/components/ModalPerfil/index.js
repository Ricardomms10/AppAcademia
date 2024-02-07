import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

export default function ModalPerfil() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome"
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu email"
                keyboardType="email-address"
            />
            <Text style={styles.label}>Telefone:</Text>
            <TextInput
                style={styles.input}
                value={telefone}
                onChangeText={setTelefone}
                placeholder="Digite seu telefone"
                keyboardType="phone-pad"
            />
            <Text style={styles.label}>Altura (cm):</Text>
            <TextInput
                style={styles.input}
                value={altura}
                onChangeText={setAltura}
                placeholder="Digite sua altura"
                keyboardType="numeric"
            />
            <Text style={styles.label}>Peso (kg):</Text>
            <TextInput
                style={styles.input}
                value={peso}
                onChangeText={setPeso}
                placeholder="Digite seu peso"
                keyboardType="numeric"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "black",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});
