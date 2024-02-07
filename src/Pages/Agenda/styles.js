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
    },
    btnWeek: {
        borderWidth: 2,
        borderColor: '#FFF',
        width: '30%',
        height:'60%',
        borderRadius: 10,
        justifyContent: 'center',
    },
    btnTop: {
        borderRadius: 7,
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
    },
    containerModal:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#262723',
    },
    textModal:{
        color:'#FFF',
        fontSize:25,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:20,
        letterSpacing: 3
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    boxTreinos:{
        width:'90%',
        height:'10%',
        marginBottom:10,
        borderWidth:1,
        borderColor:'#FFF',
        
    },
    titleBox:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:5
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
    },
    textTreino:{
        color:'#FFF',
        fontSize:15,
    },
})

export default styles;