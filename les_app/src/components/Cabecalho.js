import React from "react";
import { StyleSheet, View, Text } from "react-native";


const estilo = StyleSheet.create({
	estiloContainer: {
		marginTop: 4,
		backgroundColor: "#BFB0FF",
		alignItems: "center",
		justifyContent: "center"
	},
	estiloTexto: {
		fontSize: 25,
		color: "#fff",
		alignSelf: "center",
		fontWeight: "bold"
	}

});


// utilizaremos então o stateless component
const Cabecalho = (props) => (
	<View style={estilo.estiloContainer}>
		<Text style={estilo.estiloTexto}>{props.titulo}</Text>
	</View>
);


// poderá ser importado pelo App.js
export default Cabecalho;