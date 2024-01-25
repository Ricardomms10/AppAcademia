import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFF'
    },
    buttonBlack: {
        backgroundColor: 'black',
    },
    buttonGray: {
        backgroundColor: '#56585c',
    },
});

export default styles;