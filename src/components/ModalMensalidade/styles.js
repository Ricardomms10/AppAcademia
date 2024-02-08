import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerModal: {
        flex: 1,
        alignItems: 'center'
    },
    textTitle: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    containerInfo: {
        width: '100%',
        borderWidth: 1,
        borderColor: "#225",
        paddingTop: 15,
        paddingBottom: 15,
        padding: 15,
        marginBottom: 5

    },
    boxInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInfo: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    textRed: {
        color: 'red',
    },
    textGreen: {
        color: 'green',
    },
    boxModal: {
        flex: 1,
    },
    popUp: {
        padding: 10,
        backgroundColor: '#FFF',
        borderColor: '#333',
        borderWidth: 3,
        borderRadius: 8,
        paddingHorizontal: 10,
        position: 'absolute',
        top: 160,
        right: 80
    },
    boxBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:5,
        marginBottom:10

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    textModal: {
        fontSize: 16,
        fontWeight: 'bold',
    }

})

export default styles;
