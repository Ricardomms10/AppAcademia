import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#403f3d',

    },
    textTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
        marginBottom:40,
        marginTop: 20,
    },
    boxInfo: {
        backgroundColor: '#575653',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginBottom: 30
    },
    containerInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        gap:15
    },
    textInfo:{
        fontWeight:'bold',
        fontSize: 20,
        color:'#FFF'
    }


})

export default styles;