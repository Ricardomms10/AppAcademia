import { View } from "react-native";
import styles from "./styles";
import NavBar from "../../components/NavBar";
import Painel from "../../components/Painel";
import DisplayButtons from "../../components/DisplayButtons";


export default function Home() {

    return(
        <View style={styles.container}>
            <NavBar />
            <Painel/>
            <DisplayButtons />
        </View>
    )
}