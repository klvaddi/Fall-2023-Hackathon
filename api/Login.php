<?php

    include 'function.php';

    if ($_SERVER['REQUEST_METHOD'] === 'POST')
    {
        $json_data = file_get_contents('php://input');
        $post_data = json_decode($json_data, true);

        $pre_login = new PreLogin();
        $result = $pre_login->login($post_data);

        echo json_encode($result, JSON_PRETTY_PRINT);
    }

?>