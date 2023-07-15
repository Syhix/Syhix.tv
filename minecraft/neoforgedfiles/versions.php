<?php
// Connexion à la base de données MySQL
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$conn = new mysqli('91.121.230.45', 'herpmn_syhixtv_db', 'w%2f417z_A-Xk*FR', 'herpmn_syhixtv_db');

// Vérification de la connexion
if ($conn->connect_error) {
    die('Erreur de connexion (' . $conn->connect_errno . ') ' . $conn->connect_error);
}

// Exécution de la requête SQL pour extraire les données de la base de données
$resultat = $conn->query('SELECT * FROM `neoforgedfiles`');

// Création d'un tableau associatif pour stocker les données
$tableau_data = array();
while ($ligne = $resultat->fetch_assoc()) {
    $tableau_data[] = $ligne;
}

// Conversion des données en format JSON
$json_data = json_encode($tableau_data, JSON_PRETTY_PRINT);

// Affichage des données en format JSON
$json_data = str_replace("\\/", "/", $json_data);
echo $json_data;

?>