import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '25%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    icon: {
        color: '#FFF',
    },
    textTiltle: {

        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    containerInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '40%'
    },
    boxInfo: {
        width: '25%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFF',
    },
    textInfo: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ocultar: {
        backgroundColor: '#c1bec2',
        borderRadius: 2,
        width: '80%',
        height: '50%',
    }
});

export default styles;
