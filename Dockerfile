# Utilisation de l'image Node.js officielle en tant qu'image de base
FROM node:14

# Création du répertoire de travail dans l'image
WORKDIR /usr/src/app

# Copie des dépendances de l'application
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY . .

# Exposition du port sur lequel l'application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
