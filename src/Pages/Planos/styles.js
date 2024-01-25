import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#000',
    },
    img: {
        width: '100%',
    },
    textPlanos: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
    },
    boxPlanos: {
        width: '70%',
        marginTop: 30,
        
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 50,
        backgroundColor: '#FFF',
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 0 }, 
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 5,

    },
    boxName: {
        padding: 6,
        width:'50%',
        backgroundColor: 'red',
        borderRadius: 10,
        borderRightColor: '#000',
        borderRightWidth: 5,
    },
    textName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginLeft:10,
        width: 100,
        textAlign: 'center',
        borderRadius: 20,
    },
    textValor: {
        marginRight: 20,
        fontSize:20,
        fontWeight: 'bold',
    }



})

export default styles;