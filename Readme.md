# 🔍 API Express - Recherche d'entreprises (data.gouv.fr)

Ce projet est une mini application Node.js avec Express qui interagit avec l'API publique [recherche-entreprises.api.gouv.fr](https://recherche-entreprises.api.gouv.fr).  
Il fournit une API backend sécurisée et un petit frontend pour faire des recherches d'entreprises par nom ou SIREN.

---

## 🚀 Fonctionnalités

- 🔐 La clé API reste **privée** dans le backend (protégée par `.env`)
- 🎯 Le frontend appelle **uniquement le backend**, pas directement l'API publique
- 📦 Appels HTTP testables via Postman
- 💡 Prêt pour un environnement **DevContainer (Docker + VS Code)**

---

## 📁 Structure du projet

```
entreprise-api/
├── .devcontainer/
│   ├── Dockerfile
│   └── devcontainer.json
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .env                # ← non versionné (clé API interne)
├── .gitignore
├── index.js            # ← serveur Express
├── package.json
└── README.md
```

---

## ⚙️ Installation

```bash
git clone https://github.com/ton-utilisateur/entreprise-api.git
cd entreprise-api
npm install
```

---

## 🐳 Lancer dans un DevContainer (optionnel)

1. Ouvre le dossier dans **VS Code**
2. Clique sur "Reopen in Container"
3. Le serveur démarre automatiquement sur [http://localhost:3000](http://localhost:3000)

---

## 🔐 Configuration (clé API interne)

Même si l'API gouv.fr ne nécessite pas de clé, vous pouvez en définir une pour sécuriser vos appels ou préparer une future intégration.

Créez un fichier `.env` à la racine :

```env
API_KEY=ma-cle-secrete
```

> Ce fichier est ignoré dans Git.

---

## 🧪 Test via Postman

- Méthode : `GET`
- URL : `http://localhost:3000/entreprise?q=la poste`
- (optionnel) Header : `x-api-key: ma-cle-secrete` (si vous avez activé une vérification côté serveur)

---

## 🌐 Utiliser l’interface Web

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

Tapez une entreprise dans le champ, les résultats s'afficheront sous forme stylisée avec HTML + CSS.

---

## ✅ Exemple de résultat JSON

```json
{
  "results": [
    {
      "nom_raison_sociale": "LA POSTE",
      "siren": "356000000",
      "adresse_siege": "9 RUE DU COLONEL PIERRE AVIA 75015 PARIS",
      "activite_principale": "Services postaux"
    }
  ]
}
```

---

## 🧑‍💻 Auteur

- 👤 Fouad MOUTAIROU
- 💻 GitHub : https://github.com/Fouad-berry

---

## 📜 Licence

Ce projet est sous licence MIT.
