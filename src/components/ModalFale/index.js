import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ModalFale() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [matricula, setMatricula] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviarMensagem = () => {
        console.log('Nome:', nome);
        console.log('Telefone:', telefone);
        console.log('Matrícula:', matricula);
        console.log('Email:', email);
        console.log('Mensagem:', mensagem);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Olá!</Text>
            <Text style={styles.subtitulo}>Preencha seus dados ao lado e conte-nos sobre o seu problema.</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Matrícula"
                    value={matricula}
                    onChangeText={setMatricula}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={[styles.input, { height: 100 }]}
                    placeholder="Mensagem"
                    value={mensagem}
                    onChangeText={setMensagem}
                    multiline
                />
                <TouchableOpacity
                    style={styles.botaoEnviar}
                    onPress={enviarMensagem}
                >
                    <Text style={styles.textoBotao}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
