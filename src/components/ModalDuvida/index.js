import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styles from './styles';

const ModalDuvida = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState('');

    const perguntas = [
        { pergunta: 'Como faço para me inscrever na academia?', resposta: 'Você pode se inscrever diretamente na recepção da academia.' },
        { pergunta: 'Quais são os horários de funcionamento?', resposta: 'A academia abre de segunda a sexta-feira das 6h às 22h, e aos sábados das 8h às 18h.' },
        { pergunta: 'Posso cancelar minha inscrição a qualquer momento?', resposta: 'Sim, você pode cancelar sua inscrição a qualquer momento.' },
        { pergunta: 'Quais tipos de atividades estão disponíveis?', resposta: 'Oferecemos uma variedade de atividades, incluindo musculação, aulas de grupo e treinamento funcional.' },
        { pergunta: 'Como posso pagar minha mensalidade?', resposta: 'Você pode pagar sua mensalidade através de boleto bancário ou cartão de crédito.' },
        { pergunta: 'É necessário agendar as aulas?', resposta: 'Não, você pode participar das aulas de acordo com a disponibilidade do seu horário.' },
    ];

    const toggleModal = (pergunta) => {
        setSelectedQuestion(pergunta);
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            {perguntas.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => toggleModal(item)} style={styles.questionContainer}>
                    <Text style={styles.questionText}>{item.pergunta}</Text>
                </TouchableOpacity>
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.questionText}>{selectedQuestion.pergunta}</Text>
                        <Text style={styles.answerText}>{selectedQuestion.resposta}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};



export default ModalDuvida;
