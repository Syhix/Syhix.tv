<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
// Connexion à la base de données MySQL
$conn = new mysqli('91.121.230.45', 'mcvanilla-canary', 'syhixmcvanillacanary', 'mcvanilla-canary');

// Vérification de la connexion
if ($conn->connect_error) {
    die('Erreur de connexion (' . $conn->connect_errno . ') ' . $conn->connect_error);
}

// Exécution de la requête SQL pour extraire les données de la base de données
$resultat = $conn->query('SELECT * FROM `mcversions` order by timeRelease desc');

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