<?php
/**
 * recebe o usuario e realiza o cadastro na base
 */
include('Auxiliar.php');

class CadastraUsuario{
    public function run(){
        include('RespostaServidor.php');
        include('conexao.php');
        $usuario = json_decode($_POST['usuario']);
        $senha = $usuario->_senha;//inserir cripto
        $query = "SELECT matricula FROM usuario WHERE matricula = '$usuario->_matricula'";
        $row = mysqli_query($dbc,$query);
        
        if(mysqli_num_rows($row)){
            $query = "INSERT INTO usuario (nomeUsuario,matricula,senha) VALUES ('$usuario->_nome','$senha','$usuario->_matricula')";
            //mysqli_query($dbc,$query);

            $resposta = new RespostaServidor();
            $resposta->statusDaResposta = 'ok';
        
            mysqli_close($dbc);
            echo json_encode($resposta);
        return;
        }
        $resposta = new RespostaServidor();
        $resposta->statusDaResposta = 'error';
        echo json_encode($resposta);
    }
}


