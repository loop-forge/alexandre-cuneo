FROM node:22-alpine

WORKDIR /app

# Copier package.json + package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Builder l'app Next.js
RUN npm run build

# Exposer le port sur lequel Next.js va tourner
EXPOSE 8080

# Commande pour démarrer l'app en mode SSR classique
CMD ["npm", "start"]
