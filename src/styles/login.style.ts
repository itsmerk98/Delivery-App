import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua'
    },
    view:{
        width: "90%",
    },
    headding: {
        fontSize: 20,
        color: "orangered",
        fontWeight: "700",
    },
    button:{
        margin: 1,
        marginBottom: 20,
        marginTop: 20,
    }
})