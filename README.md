# 🏄‍♂️ WaveCams - Surf Webcam Viewer

> **Visualiseur de webcams de surf en temps réel sur la côte basque**

WaveCams est une application web **100% statique** permettant de visualiser en direct les conditions de surf via des webcams HD. Le projet se concentre sur les spots de surf emblématiques de la côte basque française.

## ✨ Fonctionnalités

- 🎥 **Streaming vidéo en direct** via HLS.js
- 📱 **Interface responsive** (mobile, tablette, desktop)
- 🔍 **Recherche instantanée** par nom de spot, ville ou département
- 🌙 **Mode sombre automatique** selon les préférences système
- ⚡ **Chargement paresseux** des images pour de meilleures performances
- 🎨 **Design cinématique** avec hero vidéo et animations fluides
- 📍 **Géolocalisation** des spots avec coordonnées GPS
- 🚀 **100% statique** - Aucun serveur requis

## 🏖️ Spots disponibles

Actuellement **5 spots** répartis sur **3 villes** :

### Biarritz (2 spots)
- **La Côte des Basques** - Le spot mythique de Biarritz
- **La Grande Plage** - Vue panoramique sur la baie

### Bidart (2 spots)  
- **Plage du Centre** - Spot familial et accessible
- **Parlementia** - Spot de gros avec des vagues puissantes

### Anglet (1 spot)
- **Plage du VVF** - Spot populaire des Landes

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/wavecams.git
cd wavecams

# Lancer un serveur local (exemple avec Python)
python3 -m http.server 8000

# Ou avec Node.js
npx serve .

# Ouvrir dans le navigateur
open http://localhost:8000
```

## 📖 Utilisation

1. **Page d'accueil** : Hero vidéo avec grille responsive des spots
2. **Recherche** : Filtrage instantané par nom, ville ou département
3. **Visualisation** : Clic sur un spot pour accéder au flux vidéo HLS
4. **Navigation** : Interface épurée avec retour fluide

## 🏗️ Structure du projet

```
wavecams/
├── index.html          # Page d'accueil avec hero et grille spots
├── spot.html           # Page de visualisation vidéo HLS
├── assets/
│   ├── style.css       # Styles CSS globaux et responsive
│   └── hero-video.mp4  # Vidéo d'arrière-plan du hero
├── js/
│   ├── spots.js        # Base de données des spots (ES6 module)
│   ├── index.js        # Logique page d'accueil + recherche
│   └── spot.js         # Lecteur vidéo HLS avec gestion d'erreurs
├── favicon.svg         # Icône du site
└── README.md           # Documentation
```

## 🛠️ Technologies

- **HTML5** - Structure sémantique moderne
- **CSS3** - Grid/Flexbox, animations, variables CSS
- **JavaScript ES6+** - Modules natifs, async/await, APIs modernes
- **HLS.js** - Streaming vidéo adaptatif avec fallback Safari
- **Intersection Observer** - Lazy loading performant

## 🎨 Design

- **Hero cinématique** : Vidéo d'arrière-plan avec overlay
- **Palette** : Fond blanc, texte noir, accents corail (#ff6b6b)
- **Typographie** : System fonts pour performances optimales
- **Grille adaptive** : 1-3 colonnes selon l'écran
- **Micro-interactions** : Hover, transitions, loading states

## 📱 Responsive

- **Mobile** (< 768px) : 1 colonne, navigation tactile
- **Tablette** (768px - 1024px) : 2 colonnes, interface adaptée
- **Desktop** (> 1024px) : 3 colonnes, expérience complète
- **Dark mode** : Détection automatique des préférences système

## 🌐 Déploiement

Projet **100% statique** déployable sur :

- **GitHub Pages** : `gh-pages` branch ou `/docs` folder
- **Netlify** : Drag & drop ou Git integration
- **Vercel** : Import GitHub repo avec optimisations auto
- **Surge.sh** : `surge .` en une commande

### Exemple Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir .
```

## 🤝 Contribution

### Workflow
1. Fork le projet
2. Créer une branche (`git checkout -b feature/nom-feature`)
3. Commit les changements (`git commit -m 'feat: description'`)
4. Push (`git push origin feature/nom-feature`)
5. Ouvrir une Pull Request

### Ajouter un spot

Modifier `js/spots.js` :

```javascript
export const spots = [
  // ... spots existants
  {
    id: "ville-nom-spot",           // Identifiant unique
    name: "Nom du Spot",            // Nom affiché
    city: "Ville",                  // Ville
    dep: "Département",             // Département (ex: "64")
    depName: "Région",              // Région (ex: "Nouvelle-Aquitaine")
    location: "Ville, Région",      // Localisation complète
    coordinates: {                  // Coordonnées GPS
      lat: 43.1234,
      lng: -1.5678
    },
    poster: "https://...",          // Image de prévisualisation
    pageUrl: "https://gosurf.fr/...", // Page source webcam
    streamUrl: "https://...m3u8"    // Flux HLS direct
  }
];
```

## 🔧 Développement

### Structure des données
- **spots.js** : Array ES6 exporté avec métadonnées complètes
- **Lazy loading** : Images chargées à la demande
- **Error handling** : Gestion des erreurs de flux vidéo
- **Responsive images** : Optimisation selon la taille d'écran

### Performance
- **Aucune dépendance** externe (sauf HLS.js)
- **CSS optimisé** : Variables, animations GPU
- **JS minimal** : Vanilla ES6, pas de framework
- **Images lazy** : Intersection Observer natif

## 📄 Licence

MIT License - Voir `LICENSE` pour les détails.

## 🙏 Remerciements

- **GoSurf.fr** - Flux vidéo des webcams
- **HLS.js** - Technologie de streaming
- **Côte basque** - Inspiration et spots mythiques

---

**🏄‍♂️ Développé avec passion pour la communauté surf basque**

> Version finale : Site 100% statique, optimisé et prêt pour le déploiement
