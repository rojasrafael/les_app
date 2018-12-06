import React from "react";
import { StyleSheet, View, Text } from "react-native";

const estilo = StyleSheet.create({
	estiloContainer: {
		marginTop: 24,
		backgroundColor: "#BFB0FF",

		alignItems: "center",
		justifyContent: "center"
	},
	estiloTexto: {
		fontSize: 25,
		color: "#fff",
		alignSelf: "center"
	}

});


// utilizaremos então o stateless component
const Cabecalho = (props) => (
	<View style={estilo.estiloContainer}>
	<StatusBar hidden={route.statusBarHidden}/>
		<Text style={estilo.estiloTexto}>{props.titulo}</Text>
	</View>
);

export default Cabecalho;