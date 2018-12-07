import React from "react";
import { NavigationActions } from "react-navigation";
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	Button,
	ActivityIndicator, /*Simbolo do Loading*/
	Alert,
    Image,

} from "react-native";
import Home from "./Home";
import LinhaFormulario from "../components/LinhaFormulario";
import firebase from "firebase";

/* IMPORTANDO A FUNÇÃO DO ACTION CREATOR "tentaLogar()" */
import { tentaLogar } from "../actions";

import { connect } from "react-redux";

/* MANDANDO O "export default" LA PRA BAIXO PARA COLOCAR O COMPONENTE "connect()" */
/* export default  */
class SplashPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			senha: "",
			estaCarregando: false,
			mensagem: "",
		}
	}

	static navigationOptions = {
		title: "SplashPage",
		header: null
	}

	/* componentDidUpdate() {
		this._navigateTo()
	}
	
	_navigateTo = (routeName: string) => {
		const resetAction = NavigationActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName })]
		})
		this.props.navigation.navigate("Login")
	} */

	componentDidMount() {
		setTimeout(() => {
			// this.props.navigation.navigate("PaginaPrincipal"); // O "replace" APAGA O HISTORICO DE NAVEGAÇÃO, ENTAO NAO TERA A "SETINHA" PARA VOLTAR A PAGINA
			return this.props.navigation.replace("Login");

			/* this.props.navigation.dispatch(
				NavigationActions.reset({
					index: 0,
					actions: [NavigationActions.navigate({ routeName: "Login" })]
				})
			); */
		}, 3000)
	}	


	render(){
		return(
			<View style={estilo.container} onPress={ () => this.props.navigation.navigate("Login") }>
				<Image source={require('../img/watch.png')} style={estilo.image} />
				<View>
					<Text style={[estilo.centro, estilo.textoknow]}>clocktime</Text>
				</View>
				{/* <Button
					title="Go111 to Details"
					onPress={() => this.props.navigation.navigate("Login")}
				/> */}
			</View>
		)
	}
}

const estilo = StyleSheet.create ({
	container: {
		height: "100%",
		backgroundColor: "#fff",
		paddingLeft: 10,
		paddingRight: 10
	},
	centro: {
		marginTop: 230,
		marginRight: 'auto',
		marginLeft: 'auto'
	},
	image: {
		marginTop: 230,
		marginRight: 'auto',
		marginLeft: 'auto',
		aspectRatio: 1, // ESSA PROPRIEDADE É PARA QUE O REACT NÃO DISTORÇA A IMAGEM, OU SEJA MANTEM A PROPORÇÃO
		width: 15,
		borderRadius: 15

	},
	textoknow: {
		marginTop: 10,
		fontSize: 30,
		backgroundColor: "#fff",
		fontWeight: "bold",
		color: "#7094db"
	}
});

/* export default connect(mapStateToProps, mapDispatchToProps || { actionCreator })(PaginaLogin);*/
// tentaLogar - RECEBENDO DO "import { tentaLogar } from "../actions";"
export default connect(null, { tentaLogar })(SplashPage);
