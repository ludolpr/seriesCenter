// Je sélectionne les éléments à afficher

SELECT departement_nom, ville_departement, COUNT(*) AS Nb_Ville 
// Je sélectionne les tables concernées
FROM villes_france_free 
INNER JOIN departement 
// Je lie les deux tables avec les propriétés qu'ils ont en commun
ON departement_code = ville_departement 
// Je regroupe les données par département
GROUP BY ville_departement 
// Je classe les départements par ordre décroissant en fonction du nombre de ville dans le département
ORDER BY Nb_Ville DESC;


SELECT departement_nom, ville_departement, COUNT(*) AS Nb_Ville FROM villes_france_free INNER JOIN departement ON departement_code =ville_departement 
GROUP BY ville_departement ORDER BY Nb_Ville DESC;