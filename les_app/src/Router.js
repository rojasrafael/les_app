//Rota das páginas
import { createStackNavigator, TabNavigator } from "react-navigation";
import PaginaLogin from "./pages/PaginaLogin";
import FuncionariosPage from "./pages/FuncionariosPage";//import SeriesPage from "./pages/SeriesPage";
import SplashPage from "./pages/SplashPage";
import PaginaCompetencias from "./pages/PaginaCompetencias";
import Home from "./pages/Home";
import CurriculoDetail from "./pages/CurriculoDetail";
import PaginaCompetenciaPessoa from "./pages/PaginaCompetenciaPessoa";
import CompetenciaPessoaDetail from "./pages/CompetenciaPessoaDetail";
import FuncionarioDetailPage from "./pages/FuncionarioDetailPage";
import maiusculaPrimLetra from "./util/maiusculaPrimeiraLetra";

export default createStackNavigator({
  "SplashPage": {
    screen: SplashPage,
    navigationOptions: {
      header: null
    }
  },
  "Login": {
    screen: PaginaLogin,
    navigationOptions: {
      header: null,
      alignSelf: "center",
    }
  },
  /* Pagina Curriculo com as Abas */
   "Home": {
    //clocktime: {
    screen: TabNavigator({
    funcionarios: {
        screen: Home,
        //screen: GerenciaHoras,
        navigationOptions: ({ navigation }) => ({
          title: 'Overview'
        }),
      },
      home: {
        screen: FuncionariosPage,
        //screen: Relogio,
        navigationOptions: ({ navigation }) => ({
          title: 'Clockar'
        }),
      },
      
      /*competencias: {
        screen: PaginaCompetencias,
        navigationOptions: ({ navigation }) => ({
          title: 'Competências',
        }),
      },*/
    }),
  },

  "DetalheCurriculo": {
    screen: CurriculoDetail,
    navigationOptions: ({navigation}) => {

      // acessando o objeto recebido da "PaginaPessoas.js" - this.props.navigation.navigate("ChaveDetalhePessoas", paginaParams) - navegacao é o objeto paginaParams
      const nomePessoa = navigation.state.params.pessoas.name.first;
      return ({
        title: maiusculaPrimLetra(nomePessoa),
        headerTitleStyle: {
          color: "#000",
          fontSize: 30,
          alignSelf: "center"
        }
      });
    }
  },
  "PaginaCompetenciaPessoa": {
    screen: PaginaCompetenciaPessoa,
    navigationOptions: ({navigation}) => {
      const habilidade = navigation.state.params.competencias.habilidade;
      return ({
        title: maiusculaPrimLetra(habilidade),
        headerTitleStyle: {
          color: "#000",
          fontSize: 30,
          alignSelf: "center"
        }
      });
    }
  },
  "DetalheCompetenciaPessoa": {
    screen: CompetenciaPessoaDetail,
    navigationOptions: ({navigation}) => {

      // acessando o objeto recebido da "PaginaPessoas.js" - this.props.navigation.navigate("ChaveDetalhePessoas", paginaParams) - navegacao é o objeto paginaParams
      const nomePessoa = navigation.state.params.pessoas.name.first;
      return ({
        title: maiusculaPrimLetra(nomePessoa),
        headerTitleStyle: {
          color: "#000",
          fontSize: 30,
          alignSelf: "center"
        }
      });
    }
  },
  DetalheFuncionario: {
    screen: FuncionarioDetailPage,
    navigationOptions: ({navigation}) => {

      // acessando o objeto recebido da "PaginaPessoas.js" - this.props.navigation.navigate("ChaveDetalhePessoas", paginaParams) - navegacao é o objeto paginaParams
      const nomePessoa = navigation.state.params.pessoas.name.first;
      return ({
        // title: maiusculaPrimLetra(nomePessoa),
        title: "Editar",
        headerTitleStyle: {
          color: "#000",
          fontSize: 20,
          alignSelf: "center"
        }
      });
    }
  },

},

);
