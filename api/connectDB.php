<?php
    function connectDb()
    {
        $host = "localhost";
        $user = "root";
        $password = "password";
        $db = "knights_hack";

        $connect = new mysqli($host, $user, $password, $db);
        if (!$connect)
        {
            echo "not working...";
            die();
        }

        // echo "working...";
        return $connect;
    }

    connectDb();
?>