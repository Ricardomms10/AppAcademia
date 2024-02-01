import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',

    },
    txtTile: {
        marginTop:50,
        marginBottom:30,
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center'
    },
    boxBtns: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position:'relative',
    },
    btnWeek: {
        borderWidth: 2,
        borderColor: '#FFF',
        width: '30%',
        height:'60%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTop: {
        position:'absolute',
        backgroundColor: 'red',
        top:0,
        height: '25%',
        width: '100%',
    },
    txtBtn:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        alignContent:'center',
        textAlign:'center'
    }



})

export default styles;