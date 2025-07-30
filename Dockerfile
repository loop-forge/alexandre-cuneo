# 1. Choisir une image Node officielle
FROM node:22

# 2. Définir le répertoire de travail dans le container
WORKDIR /app

# 3. Copier package.json + package-lock.json (si présent)
COPY package*.json ./

# 4. Installer les dépendances
RUN npm install

# 5. Copier tout le reste des fichiers dans le container
COPY . .

# 6. Builder l'app (pour Next.js)
RUN npm run build

# 7. Exposer le port sur lequel l'app tourne (exemple 3000)
EXPOSE 8181

# 8. Commande pour démarrer l'app
CMD ["npm", "start"]
