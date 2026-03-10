<?php

$token = "5096006721:AAHxxLW7-YbuZ8EalR4wTqCTzJtAOXU_49A";
$chat_id = "-1001619683520";
$type = $_POST['form_type'];
$name = $_POST['form_name'];
$soc = $_POST['form_soc'];
$tel = $_POST['form_tel'];
$text = $_POST['form_text'];




if($_SERVER['REQUEST_METHOD'] == 'POST'){

    if($type == "min") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Связаться через: ' => $soc,
            'Тариф:' => 'Минимум'
        );

    } elseif ($type == "base") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Связаться через: ' => $soc,
            'Тариф:' => 'Базовый'
        );

    } elseif ($type == "prem") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Связаться через: ' => $soc,
            'Тариф:' => 'Премиум'
        );

    } elseif ($type == "market") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Связаться через: ' => $soc,
            'Тариф:' => 'Интернет-магазин'
        );

    } elseif ($type == "digital") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Связаться через: ' => $soc,
            'Тариф:' => 'Digital-поддержка'
        );

    } elseif ($type == "corp") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Связаться через: ' => $soc,
            'Тариф:' => 'Корпоративный сайт'
        );

    } elseif ($type == "mobapp") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Связаться через: ' => $soc,
            'Тариф:' => 'Мобильное приложение'
        );

    } elseif ($type == "sale") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Связаться через: ' => $soc,
            'Тариф:' => 'Скидка'
        );

    }  elseif ($type == "same") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Связаться через: ' => $soc,
            'Тариф:' => 'Хочу так же'
        );

    } elseif ($type == "middle") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Тариф:' => 'Новая заявка через среднюю форму'
        );

    } elseif ($type == "last") {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Комментарий: ' => $text,
            'Тариф:' => 'Новая заявка через последнюю форму'
        );

    } else {
        $arr = array(
            'Имя пользователя: ' => $name,
            'Телефон: ' => $tel,
            'Связаться через: ' => $soc,
            'Тариф:' => 'Новая заявка'
        );

    }


    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


    $to = "deykun.studio@gmail.com";
    if(isset($_POST['form_type'])) {
        if($type == "min") {
            $subject = "Минимум";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nСвязаться через: " . $soc;
        
        } elseif ($type == "base") {
            $subject = "Базовый";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nСвязаться через: " . $soc;
        
        } elseif ($type == "prem") {
            $subject = "Премиум";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nСвязаться через: " . $soc;
        
        } elseif ($type == "market") {
            $subject = "Интернет-магазин";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nСвязаться через: " . $soc;
        
        } elseif ($type == "digital") {
            $subject = "Digital-поддержка";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nСвязаться через: " . $soc;
        
        } elseif ($type == "corp") {
            $subject = "Корпоративный сайт";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nСвязаться через: " . $soc;
        
        } elseif ($type == "mobapp") {
            $subject = "Мобильное приложение";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nСвязаться через: " . $soc;
        
        } elseif ($type == "sale") {
            $subject = "Скидка";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nСвязаться через: " . $soc;
        
        } elseif ($type == "same") {
            $subject = "Хочу так же";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nСвязаться через: " . $soc;
        
        } elseif ($type == "middle") {
            $subject = "Новая заявка через среднюю форму";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
        
        } elseif ($type == "last") {
            $subject = "Новая заявка через последнюю форму";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nКомментарий: " . $text;
        
        } else {
            $subject = "Новая заявка";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nСвязаться через: " . $soc;
        
        }
        mail($to,$subject,$message);
    } 
}
?>