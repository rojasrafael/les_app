import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";

import { maiusculaPrimLetra } from "../util";

class CompetenciaItem extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            starCount: 3.5
        };
    }

    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
    }

    render () {
        
        const {competencias, irParaDetalhes} = this.props;
        
        return (
            <TouchableOpacity onPress={() => {
                    irParaDetalhes({ competencias });
                    
                }}>
                <View style={estilo.linha}>
                    <Text style={estilo.linhaText}>{ competencias.habilidade }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const estilo = StyleSheet.create ({
	linha:{
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: "#e6fbff",
		alignItems: "center",
		flexDirection: "row"
	},
	linhaText:{
		fontSize: 20,
		paddingLeft: 15,
		flex: 7
	},
})

export default CompetenciaItem;