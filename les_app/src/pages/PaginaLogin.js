import React from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	Button,
    Image,
	ActivityIndicator, /*Simbolo do Loading*/
	Alert,
	StatusBar,

} from "react-native";

import LinhaFormulario from "../components/LinhaFormulario";
import firebase from "firebase";

/* IMPORTANDO A FUNÇÃO DO ACTION CREATOR "tentaLogar()" */
import { tentaLogar } from "../actions";

import { connect } from "react-redux";

/* MANDANDO O "export default" LA PRA BAIXO PARA COLOCAR O COMPONENTE "connect()" */
/* export default  */
class PaginaLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			senha: "",
			estaCarregando: false,
			mensagem: "",
		}
	}

	/*componentDidMount - é um método LifeCycle do React, portanto será acionado assim que o componente for montado - equivalente ao onReady do JQuery*/
	componentDidMount() {
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyDkNY25plEQnLw-aRRQLHIILVxpFrJG-5k",
			authDomain: "series-f40c5.firebaseapp.com",
			databaseURL: "https://series-f40c5.firebaseio.com",
			projectId: "series-f40c5",
			storageBucket: "series-f40c5.appspot.com",
			messagingSenderId: "227328473985"
		};
		firebase.initializeApp(config);

	}
	fnMudouInput(referencia, valor) {
		this.setState({
			[referencia]: valor
		});
	}


	tentaLogarLocal() {
		this.setState({ estaCarregando: true, mensagem: "" });
		const { email, senha } = this.state;
       //Facilitador do login - excluir em prod
		this.props.navigation.replace("Home");
		return;

			this.props.tentaLogar({ email, senha })
				// .then(() => {
				.then(usuario => {
					if (usuario) {
						// this.props.navigation.navigate("PaginaPrincipal"); // O "replace" APAGA O HISTORICO DE NAVEGAÇÃO, ENTAO NAO TERA A "SETINHA" PARA VOLTAR A PAGINA
						return this.props.navigation.replace("PaginaCurriculo");
					}

					this.setState({
						estaCarregando: false,
						mensagem: ""
					})
				})
				.catch(erro => {
					// console.log("caiu no catch", erro.code);
					this.setState({ 
						estaCarregando: false,
						// DEVOLVE A MSG AMIGAVEL
						mensagem: this.getMensagemPeloCodigoDeErro(erro.code)
					});
		const { email, senha } = this.state;
				});
	}

	getMensagemPeloCodigoDeErro(codigoErro) {
		switch (codigoErro) {
			case "auth/wrong-password":
				return "Senha incorreta";
			case "auth/user-not-found":
				return "Usuario nao encontrado!";
			case "auth/invalid-email":
				return "Email Invalido!";
			default:
				return "Erro desconhecido";
		}
	}

	renderizarBotao() {
		if (this.state.estaCarregando)
			return <ActivityIndicator />;
		return (
			<Button 
				style={{ marginTop: 55 },{color: "#adc2eb"}}
				title="Entrar" 
				onPress={() => this.tentaLogarLocal()}
				/>
		);
	}

	renderizarMensagem() {
		const { mensagem } = this.state;

		if(!mensagem) return null;

		return (
			<View>
				<Text>
					{ mensagem }
				</Text>
			</View>
		)
	}

	render(){
		return(
			<View style={estilo.container}>
			<StatusBar hidden={true} />
				<View>
					<Image source = {require('../img/watch.png')} style={estilo.centro} />
				</View>
				<View>
					<Text style={estilo.textoknow}>clocktime</Text>
				</View>
				<View style={{flex: 1, justifyContent: "center"}} >
				<LinhaFormulario primeiro>
					<TextInput 
						style={estilo.input}
						placeholder="usuario@text.com"
						value={this.state.email}

		    			/*função de callback*/
		    			/*onChangeText = { valor => this.fn_atualiza_valor_simult(valor)}
						OU
		    			*/
						onChangeText = { valor => this.fnMudouInput("email", valor) }
					/>
				</LinhaFormulario>
				<LinhaFormulario ultimo>
					<TextInput 
						style={estilo.input}
						placeholder="******"
					/*secureTextEntry={false} - por default é false - basta por - secureTextEntry*/
					secureTextEntry={true}
					value = {this.state.senha}

					/*função de callback*/
					/*onChangeText = { valor => this.fn_atualiza_senha_simult(valor)}
					OU
					*/
					onChangeText = { valor => this.fnMudouInput("senha", valor)}
					/>
				</LinhaFormulario>

				{ this.renderizarBotao() }

			</View>	
				{ this.renderizarMensagem() }
			</View>
		)
	}
}

const estilo = StyleSheet.create ({
	container: {
		height: "100%",
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#fff",
		justifyContent: "space-evenly"
	},
	input: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
	},
	centro: {
		marginTop: 150,
		marginRight: 'auto',
		marginLeft: 'auto'
	},
	textoknow: {
		fontSize: 40,
		fontWeight: "bold",
		marginRight: 'auto',
		marginLeft: 'auto',
		color: "#7094db"
	}
});

/* export default connect(mapStateToProps, mapDispatchToProps || { actionCreator })(PaginaLogin);*/
// tentaLogar - RECEBENDO DO "import { tentaLogar } from "../actions";"
export default connect(null, { tentaLogar })(PaginaLogin);
