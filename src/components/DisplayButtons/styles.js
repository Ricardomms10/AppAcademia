import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: '#FFF',
        height:'15%'
    },
    row: {
        flexDirection: 'row',
        height:'100%'
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