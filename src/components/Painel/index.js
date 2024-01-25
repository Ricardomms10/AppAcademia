import { Image, View } from "react-native";
import styles from "./styles";
import Swiper from 'react-native-swiper';

export default function Painel() {
    const slides = [
        { id: 1, image: require("../../../assets/comercial1.jpg") },
        { id: 2, image: require("../../../assets/AVALIACAO.jpg") }
    ]

    return (
        <Swiper
            showsPagination={false}
            autoplayLoop
            autoplay={true}
            autoplayTimeout={2.5}
            autoplayDirection={true}
            showsButtons={true}
        >
            {slides.map((slide) => (
                <View key={slide.id} style={styles.container}>
                    <Image
                        source={slide.image}
                        style={styles.image}
                    />
                </View>
            ))}
        </Swiper>
    );
};