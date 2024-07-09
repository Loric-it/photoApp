FROM node:20

# Créer le répertoire de travail de l'application dans le conteneur
WORKDIR /usr/src/app
# Copier le package.json et installer les dépendances
COPY package.json .
RUN npm install
# Copier tous les fichiers de l'application dans le conteneur
COPY . .
# Exposer le port sur lequel l'application s'exécute
EXPOSE 3003

# Commande par défaut pour démarrer l'application
CMD ["npm", "start"]
