<?php
/**busca informaçõs do radio na base de acorndo com o patrimonio ou serial fornecido */
include('Auxiliar.php');

class BuscaRadio{
    public function run(){
        include('RespostaServidor.php');
        include('conexao.php');
        $radio = new Radio();

        $pesquisa = $_POST['pesquisa'];

        $query = "SELECT * FROM Radio INNER JOIN Local
        ON Local.Municipio_idMunicipio = Radio.Municipio_idMunicipio
        WHERE patrimonio = '$pesquisa' OR nSerie = '$pesquisa'";
        $result = mysqli_query($dbc,$query);

        while($row = mysqli_fetch_array($result)){
            $radio->marca           = $row['marca'];
            $radio->modelo          = $row['modelo'];
            $radio->patrimonio      = $row['patrimonio'];
            $radio->serie           = $row['nSerie'];
            $radio->local           = $row['nomeLocal'];
            $radio->descricaoLocal  = $row['descricao'];
        }
        /*$radio = new Radio();
        $radio->marca = 'motorola';
        $radio->modelo = 'xtr';
        $radio->patrimonio = '1236547489';
        $radio->idRadio = '47489';
        $radio->serie = '489';
        $radio->local = 'BH';
        $radio->descricaoLocal = 'almox';
        $radio->statusDaResposta = 'ok';*/

        echo json_encode($radio);
    }

}

class Radio{
    public function run(){
        $marca;
        $modelo;
        $patrimonio;
        $serie;
        $local;
        $descricaoLocal;
        $idRadio;
        $statusDaResposta;
    }
}