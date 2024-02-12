import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MoviesCard } from "../../components/MoviesCard";

export function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo}/>
                <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
            </View>
            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.movieImagemMain}>
                <Image source={MovieTheWhell} />
            </TouchableOpacity>
            <FlatList 
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL}/>}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
    },
    header: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },
    amazonLogoImg: {
        width: 200,
        marginTop: -32,
        marginLeft: 30,
    },
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30, 
        marginBottom: 15,
    },
    categoryText:{
        color: "#fff",
        fontSize: 14,
        fontWeight: "700",
    },
    movieImagemMain: {
        width: "100%",
        alignItems: "center",
    },
});