import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco}){
    return(
        <>
                <Texto style={estilos.nome}>{nome}</Texto>
                <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logoFazenda}/>
                {/* dessa forma conseguimos passar mais de um estilo lembra um pouco o class no html  */}
                {/* <Text style={[estilos.nomeFazenda, estilos.preco]}>Jenny Jack Farm</Text> */}
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
                </View>
                {/* também é a forma como passamos esse estilo lá dentro desse componente / no seu arquivo raiz Texto.js */}
                <Texto style={estilos.descricao}>{descricao}</Texto>
                <Texto style={estilos.preco}>{preco}</Texto>
        </>
    )
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});