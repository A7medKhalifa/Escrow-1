import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../values/colors";
import LottieView from "lottie-react-native";
import { LoadingLottie } from "../assets";

const CoustomButton = ({
    Title,
    style,
    loading,
    onpress
}: {
    Title?: string
    style?: any
    loading?: boolean
    onpress?: any

}) => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={.8}
                onPress={onpress}
                style={[styles.TouchableOpacity, style]}>
                {loading ?
                    <LottieView
                        resizeMode="cover"
                        loop={true}
                        autoPlay={true}
                        source={LoadingLottie}
                        style={styles.Lottie}
                    /> :
                    <Text style={styles.Title}>{Title}</Text>
                }

            </TouchableOpacity>
        </>
    )
}

export default CoustomButton;

const styles = StyleSheet.create({
    TouchableOpacity: {
        height: 75,
        width: '100%',
        backgroundColor: COLORS.green,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    },
    Title: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.white
    },
    Lottie: {
        height: 150,
        width: 150,
        alignSelf: 'center',
    }
})