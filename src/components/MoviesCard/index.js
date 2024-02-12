import { Image, StyleSheet, TouchableOpacity } from "react-native";

export function MoviesCard(props){
    return(
        <TouchableOpacity>
            <Image style={styles.img}  source={props.movieURL}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    img: {
        marginLeft: 20,
    }
});