# Site vitrine Nuxt 4

Site vitrine Nuxt 4 pour une agence web.

## Variables d'environnement

Le projet peut etre personnalise via un fichier `.env` a la racine.

Exemple :

```env
NUXT_PUBLIC_AGENCY_NAME="Exemple"
NUXT_PUBLIC_AGENCY_LOGO="/logo.png"
NUXT_PUBLIC_AGENCY_EMAIL="contact@exemple.fr"
NUXT_PUBLIC_AGENCY_PHONE="+33 (0)1 89 71 24 60"
```

Notes :

- `NUXT_PUBLIC_AGENCY_LOGO` doit pointer vers un fichier place dans `public/`
- si `NUXT_PUBLIC_AGENCY_LOGO` est vide, le site affiche un placeholder avec l'initiale de l'agence
- les valeurs publiques sont exposees au frontend, donc ne mets rien de sensible dedans

## Developpement local

Installer les dependances :

```bash
npm install
```

Lancer le serveur de developpement :

```bash
npm run dev
```

Build de production :

```bash
npm run build
```

Lancer le build en local :

```bash
node .output/server/index.mjs
```

## Deploiement sur un VPS avec Nginx et PM2

Ce guide suppose :

- un VPS Linux (Ubuntu par exemple)
- un nom de domaine deja achete
- un acces sudo
- Node.js installe sur le serveur

### 1. Pointer le nom de domaine vers le VPS

Chez ton registraire DNS :

- ajoute un enregistrement `A` pour `@` vers l'IP publique du VPS
- ajoute un enregistrement `A` pour `www` vers la meme IP

Exemple :

```txt
@    A      203.0.113.10
www  A      203.0.113.10
```

### 2. Installer les prerequis sur le VPS

Connexion :

```bash
ssh root@TON_IP
```

Installer Nginx :

```bash
apt update
apt install -y nginx
```

Installer PM2 globalement :

```bash
npm install -g pm2
```

Verifier Node :

```bash
node -v
npm -v
```

### 3. Copier le projet sur le serveur

Place le projet par exemple dans :

```bash
/var/www/site-vitrine
```

Puis :

```bash
mkdir -p /var/www/site-vitrine
cd /var/www/site-vitrine
```

Tu peux ensuite :

- cloner le repo avec Git
- ou envoyer les fichiers depuis ta machine

### 4. Installer le projet et definir le `.env`

Dans le dossier du projet :

```bash
npm install
```

Creer le fichier `.env` :

```bash
nano .env
```

Exemple :

```env
NUXT_PUBLIC_AGENCY_NAME="Mon Agence"
NUXT_PUBLIC_AGENCY_LOGO="/logo.png"
NUXT_PUBLIC_AGENCY_EMAIL="contact@monagence.fr"
NUXT_PUBLIC_AGENCY_PHONE="+33 6 12 34 56 78"
```

### 5. Builder l'application

```bash
npm run build
```

### 6. Lancer l'application avec PM2

Depuis la racine du projet :

```bash
pm2 start .output/server/index.mjs --name site-vitrine
```

Verifier :

```bash
pm2 status
pm2 logs site-vitrine
```

Sauvegarder PM2 pour les redemarrages :

```bash
pm2 save
pm2 startup
```

PM2 te donnera une commande supplementaire a executer avec `sudo`.

### 7. Configurer Nginx

Creer un fichier :

```bash
nano /etc/nginx/sites-available/site-vitrine
```

Configuration de base :

```nginx
server {
    listen 80;
    server_name mon-domaine.fr www.mon-domaine.fr;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Activer le site :

```bash
ln -s /etc/nginx/sites-available/site-vitrine /etc/nginx/sites-enabled/site-vitrine
nginx -t
systemctl reload nginx
```

### 8. Activer HTTPS avec Certbot

Installer Certbot :

```bash
apt install -y certbot python3-certbot-nginx
```

Generer le certificat :

```bash
certbot --nginx -d mon-domaine.fr -d www.mon-domaine.fr
```

Tester le renouvellement :

```bash
certbot renew --dry-run
```

### 9. Commandes utiles en production

Redemarrer l'app apres un changement :

```bash
pm2 restart site-vitrine
```

Relancer Nginx :

```bash
systemctl reload nginx
```

Voir les logs PM2 :

```bash
pm2 logs site-vitrine
```

Verifier Nginx :

```bash
nginx -t
```

## Workflow de mise a jour

Apres une mise a jour du code :

```bash
cd /var/www/site-vitrine
npm install
npm run build
pm2 restart site-vitrine
```

Si tu modifies seulement le `.env`, refais au minimum :

```bash
npm run build
pm2 restart site-vitrine
```

## Points d'attention

- le logo doit exister dans `public/` sur le serveur
- si tu changes de domaine, pense a mettre a jour `server_name` dans Nginx puis a regenerer le certificat
- si le port `3000` est deja pris, il faudra lancer Nuxt sur un autre port et adapter `proxy_pass`
