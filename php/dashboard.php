<?php
require_once __DIR__ . '/vendor/autoload.php';

use GuzzleHttp\Client;

$dotenv = \Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$name = '';


if (isset($_SESSION['user_info'])) {
    $name = $_SESSION['user_info']['name'];
} else {
    if (isset($_GET['code'])) {
        $tokenUrl = 'https://github.com/login/oauth/access_token';

        $params = [
            'client_id' => GITHUB['client_id'],
            'client_secret' => GITHUB['client_secret'],
            'code' => $_GET['code'],
        ];

        $client = new Client();

        $response = $client->post($tokenUrl, [
            'headers' => ['Accept' => 'application/json'],
            'form_params' => $params,
        ]);
        $data = json_decode($response->getBody(), true);
        $accessToken = $data['access_token'];


        $apiUrl = 'https://api.github.com/user';
        $response = $client->get($apiUrl, [
            'headers' => ['Authorization' => "token $accessToken"],
        ]);

        $userData = json_decode($response->getBody(), true);

        $name = $userData['name'];


        $_SESSION['user_info'] = [
            'name' => $name,
        ];

        header('Location: dashboard.php');
        exit();
    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $authorizationUrl = 'https://github.com/login/oauth/authorize';
        $params = [
            'client_id' => GITHUB['client_id'],
            'redirect_uri' => GITHUB['callback_url'],
            'scope' => 'user',
        ];
        $authorizationUrl .= '?' . http_build_query($params);
        header("Location: $authorizationUrl");
        exit();
    }
}

function getDesafioData()
{
    $host = $_ENV['DB_HOST'];
    $username = $_ENV['DB_USERNAME'];
    $password = $_ENV['DB_PASSWORD'];
    $database = $_ENV['DB_DATABASE'];

    $conn = new mysqli($host, $username, $password, $database);


    if ($conn->connect_error) {
        die('Erro na conexão com o banco de dados: ' . $conn->connect_error);
    }

    $result = $conn->query('SELECT * FROM desafio');


    if (!$result) {
        die('Erro na consulta ao banco de dados: ' . $conn->error);
    }

    $data = [];

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    $conn->close();


    $jsonData = json_encode($data);
    header('Content-Type: application/json');
    echo $jsonData;
}


if (isset($_GET['getData'])) {
    getDesafioData();
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login com GitHub</title>
</head>
<body>

    
<?php if (!isset($_SESSION['user_info']) && !isset($_GET['code'])) : ?>
    <h1>Login com GitHub</h1>
    <form action="" method="POST">
        <button type="submit">Login com GitHub</button>
    </form>
<?php endif ?>

<?php if (isset($_SESSION['user_info'])) : ?>
    <h1>Bem vindo , <?php echo $name; ?></h1>
    <form action="" method="GET">
        <button type="submit" name="getData">Obter Dados</button>
    </form>
    <form action="logout.php" method="POST">
        <button type="submit">Logout</button>
    </form>
<?php endif ?>

</body>
</html>
