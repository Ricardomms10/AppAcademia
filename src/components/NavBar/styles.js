import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#000',
        marginTop: 40,
        marginBottom: 2,
        position: 'relative'
    },
    boxIcon: {
        position: 'absolute',
        top: 15,
        right: 20,
    },
    icon: {
        color: '#FFF',

    },
    textTiltle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    containerInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '60%',
    },
    boxInfo: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFF',
    },
    textInfo: {
        fontWeight: 'bold',
        textAlign:'center'
    },
    ocultar: {
        backgroundColor: '#c1bec2',
        borderRadius: 2,
        width: '80%',
        height: '70%',
    }
});

export default styles;
