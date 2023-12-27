# SAE S5

## Résumer :

    Le service web sera développé en utilisant JavaScript classique avec Express. Ce service récupérera les données de la Base de données MADA et effectuera diverses opérations en fonction de l'URL, notamment le tri selon des critères tels que la catégorie, l'envoi, l'état, le nom, la date, les périodes, etc. Il sera également capable de créer de nouveaux événements et de générer des statistiques, le tout en JavaScript standard.
    Des tests seront élaborés à l'aide de JEST, un Framework de test JavaScript, afin de garantir la fiabilité du code. Envisagée est la création éventuelle d'une interface graphique en REACT qui servira à des démonstrations et à des essais.
    L'ensemble du développement sera soumis à un processus d'intégration continue (CI-CD et DOCKER). Chaque envoi de code sera automatiquement testé dès sa soumission sur Etulab. Seuls les codes passant avec succès ces tests seront déployés sur PedaWeb.

## Service :

    - Express : Utilisé pour développer le service web en JavaScript.
    - MySQL : Base de données utilisée pour stocker les données récupérées par le service web.
    - CI-CD : Méthode d'intégration continue et de déploiement continu pour garantir la qualité du code avant le déploiement.
    - PedaWeb : Déploiement sur PedaWeb uniquement après des tests réussis via CI-CD.

## Fonctionnalités :

    Tri :
        - Tri par catégorie, envoi, état, nom, date, périodes, etc.
        
    Statistiques :
        - Génération de statistiques sur le nombre d'événements, par catégorie, par dates, état, etc.

    Récupération de données :
        - Extraction des données depuis la base de données MySQL.

    Interface graphique :
        - Développement d'une interface utilisateur en React pour les démonstrations et les tests.

## Technologies :

    - JavaScript : Langage principal pour le développement.
    - JEST : Framework de test pour JavaScript.
    - React : Bibliothèque JavaScript pour la création d'interfaces utilisateur.
    - Docker : Plateforme pour la gestion et le déploiement des applications.
    - SQL (MySQL) : Langage et système de gestion de base de données pour stocker et manipuler les données.