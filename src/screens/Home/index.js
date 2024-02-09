import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import MovieWhell from "../../assets/movies/wheel_of_time.png";
import MovieInception from "../../assets/movies/inception.png";

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
            <View>
                <Text style={styles.watchingText}>Continue Watching</Text>
                <View style={styles.movieWatching}>
                    <TouchableOpacity>
                        <Image source={MovieWhell}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={MovieInception}/>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
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
    watchingText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        marginTop: 10,
        marginLeft: 10,
    },
    movieWatching: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 10,
    }
});