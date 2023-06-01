<?php

require_once __DIR__ . '/vendor/autoload.php';

$dotenv = \Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

class CSVImporter
{
    private $database;

    public function __construct($host, $username, $password, $database)
    {
        $this->database = new mysqli($host, $username, $password, $database);
        if ($this->database->connect_error) {
            die('Falha na conexão com o banco de dados: ' . $this->database->connect_error);
        }
    }

    public function importCSVFile($csvFile)
    {
        if (($handle = fopen($csvFile, 'r'))) {
            while (($data = fgetcsv($handle, 1000, ','))) {
                $nome = $data[0];
                $idade = $data[1];
                $cpf = $data[2];
                $rg = $data[3];
                $data_nasc = $data[4];
                $sexo = $data[5];
                $signo = $data[6];
                $mae = $data[7];
                $pai = $data[8];
                $email = $data[9];
                $senha = $data[10];
                $cep = $data[11];
                $endereco = $data[12];
                $numero = $data[13];
                $bairro = $data[14];
                $cidade = $data[15];
                $estado = $data[16];
                $telefone_fixo = $data[17];
                $celular = $data[18];
                $altura = $data[19];
                $peso = $data[20];
                $tipo_sanguineo = $data[21];
                $cor = $data[22];

                $sql = 'INSERT INTO desafio (nome, idade, cpf, rg, data_nasc, sexo, signo, mae, pai, email, senha, cep, endereco, numero, bairro, cidade, estado, telefone_fixo, celular, altura, peso, tipo_sanguineo, cor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                $stmt = $this->database->prepare($sql);
                $stmt->bind_param('sisssssssssssisssssddss', $nome, $idade, $cpf, $rg, $data_nasc, $sexo, $signo, $mae, $pai, $email, $senha, $cep, $endereco, $numero, $bairro, $cidade, $estado, $telefone_fixo, $celular, $altura, $peso, $tipo_sanguineo, $cor);
                $stmt->execute();

                if ($stmt->error) {
                    echo 'Erro ao inserir os dados no banco de dados: ' . $stmt->error;
                }

                $stmt->close();
            }

            fclose($handle);
            echo 'Dados importados com sucesso!';
            $this->database->close();
        } else {
            echo 'Erro ao abrir o arquivo CSV.';
            $this->database->close();
        }
    }
}


if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_FILES['csv_file']['type'] === 'text/csv') {
    $csvFile = $_FILES['csv_file']['tmp_name'];

    $host = $_ENV['DB_HOST'];
    $username = $_ENV['DB_USERNAME'];
    $password = $_ENV['DB_PASSWORD'];
    $database = $_ENV['DB_DATABASE'];

    $fileCsvImporter = new CSVImporter($host, $username, $password, $database);
    $fileCsvImporter->importCSVFile($csvFile);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo 'Arquivo invalido' ;
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Upload de Arquivo CSV</title>
</head>
<body>
    <h1>Upload de Arquivo CSV</h1>
    <form method="POST" enctype="multipart/form-data">
        <input type="file" name="csv_file" accept=".csv">
        <input type="submit" value="Importar Arquivo CSV">
    </form>
    <br>
    <form action="dashboard.php" method="POST">
        <button type="submit">Redirecionar para a autenticação para obter o JSON</button>
    </form>
</body>
</html>
