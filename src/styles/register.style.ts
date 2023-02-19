import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua'
    },
    view:{
        width: "85%",
    },
    headding: {
        fontSize: 20,
        color: "orangered",
        fontWeight: "700",
    },
    button:{
        marginBottom: 4,
        marginTop: 4,
    }
})