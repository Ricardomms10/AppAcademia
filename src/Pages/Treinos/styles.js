import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#262723',

    },
    textPlano: {
        marginTop: 10,
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:25
    },
    BoxBtn: {
        backgroundColor: '#FFF',
        padding: 1,
        width: '80%',
        height: '20%',
        marginVertical: 10,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        ...StyleSheet.absoluteFillObject, 
        alignItems: 'center',
    },
    textBtn: {
        color: '#FFF',
        position: 'absolute',
        fontSize: 18,
        fontWeight:'bold',
        top:10,
        left:40 
    },
    containerModal:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#262723',
    },
    textModal:{
        color:'#FFF',
        fontSize:25,
        marginBottom:20
    },
    boxTreinos:{
        width:'85%',
        height:'18%',
        backgroundColor:'#5c5b5b',
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
    }

})

export default styles;