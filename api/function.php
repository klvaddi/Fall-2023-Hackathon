<?php

    include "connectDB.php";

    class PreLogin
    {
        private $connect;

        function _construct()
        {
            $this->connect = connectDb();
            echo "connected";
        }

        // function login($data)
        function login($data)
        {
            $connect = connectDb();
            $result_array = array();

            $user_name = $data['user_name'];
            $password = $data['password'];
            // $user_name = "something";
            // $password = "something";
            
            $sql = "SELECT * FROM users U WHERE U.user_name='$user_name' and U.user_password='$password'";
            $sql_result = mysqli_query($connect, $sql);
            // echo "working..";
            $result = mysqli_num_rows($sql_result);

            if ($result <= 0)
            {
                // echo "wrong info";
                $result_array["message"] = "Wrong info";
                return $result_array;
                
            }

            $info = mysqli_fetch_array($sql_result);
            $result_array["firstName"] = $info["first_name"];
            $result_array["lastName"] = $info["last_name"];
            $result_array["id"] = $info["user_id"];

            return $result_array;
        }

        // function register_user($data)
        function register_user($data)
        {
            $connect = connectDb();
            $result_array = array();

            $first_name = $data['first_name'];
            $last_name = $data['last_name'];
            $email = $data['email'];
            $user_name = $data['user_name'];
            $user_password = $data['user_password'];

            // $first_name = "testing11";
            // $last_name = "wokring";
            // $email = "something112@example.com";
            // $user_name = "something112";
            // $user_password = "something";

            // check if the email is already being used
            $sql = "SELECT * FROM users U WHERE U.email='$email'";
            $sql_result = mysqli_query($connect, $sql);
            $result = mysqli_num_rows($sql_result);
            if ($result > 0)
            {
                $result_array["message"] = "Email already used";
                return $result_array;
            }

            // check if the user_name is already taken
            $sql = "SELECT * FROM users U WHERE U.user_name='$user_name'";
            $sql_result = mysqli_query($connect, $sql);
            $result = mysqli_num_rows($sql_result);
            if ($result > 0)
            {
                $result_array["message"] = "Username already taken";
                return $result_array;
            }

            // insert the users info
            $sql = "INSERT INTO users('first_name', 'last_name', 'email', 'user_name', 'user_password')
                    VALUES ('$first_name', '$last_name', '$email', '$user_name', '$user_password')";
            $sql = "INSERT INTO users(`first_name`, `last_name`, `email`, `user_name`, `user_password`)
                    VALUES ('$first_name','$last_name','$email','$user_name','$user_password')";
            $sql_result = mysqli_query($connect, $sql);

            // get the users user_id
            $sql = "SELECT * FROM users U 
                        WHERE U.first_name='$first_name' 
                        AND U.last_name='$last_name' 
                        AND U.email='$email'
                        AND U.user_name='$user_name'";
            $sql_result = mysqli_query($connect, $sql);
            $info = mysqli_fetch_array($sql_result);
            $user_id = $info['user_id'];

            // insert the user into the normal_user
            $sql = "INSERT INTO normal_user(`user_id`) VALUES ('$user_id')";
            $sql_result = mysqli_query($connect, $sql);

            if (!$sql_result)
            {
                echo "Couldn't create an account";
                $result_array["message"] = "Couldn't create an account";
                return $result_array;
            }
            else
            {
                echo "user account created...";
                $result_array["message"] = "user account created...";
                return $result_array;
            }
        }

    }

    // $testing = new PreLogin();
    // $testing->register_user();
    // $connect = connectDb();
    // if (!$connect)
    // {
    //     die();
    // }
    // else
    // {
    //     echo "working...";
    // }

?>
