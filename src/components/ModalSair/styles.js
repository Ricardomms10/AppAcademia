import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        marginBottom: 10,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    btnSair: {
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        
    },
    icon: {
        fontSize: 100,
        marginBottom:10,
        color:'red'
    }


})

export default styles;