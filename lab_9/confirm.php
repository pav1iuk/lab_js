<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Підтвердження замовлення</title>
</head>
<body>
  <h1>Ваше замовлення прийнято</h1>
  <p>Замовлено виріб - <?php echo htmlspecialchars($_POST["item"]); ?></p>
  <p>Матеріал - <?php echo htmlspecialchars($_POST["material"]); ?></p>
  <p>Кількість - <?php echo htmlspecialchars($_POST["quantity"]); ?></p>
</body>
</html>
