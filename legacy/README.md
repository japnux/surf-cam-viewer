# Surf Cam Viewer

Ce projet est une interface web simple pour visualiser les flux vidéo en direct de webcams de spots de surf.

## Fonctionnalités

- Page d'accueil listant les spots de surf disponibles.
- Page dédiée pour chaque spot avec le lecteur vidéo en direct.
- Design responsive pour une utilisation sur mobile et ordinateur.
- Lecteur vidéo utilisant HLS.js pour une compatibilité maximale.

## Comment l'utiliser

1. Clonez ce dépôt.
2. Lancez un serveur web local à la racine du projet. Par exemple, avec Python :
   ```bash
   python3 -m http.server
   ```
3. Ouvrez votre navigateur et allez à l'adresse `http://localhost:8000`.

## Ajouter un spot

Pour ajouter un nouveau spot, modifiez le fichier `spots.js` et ajoutez un nouvel objet au tableau `spots` avec la structure suivante :

```javascript
{
    id: 'id-unique-pour-le-spot',
    name: 'Nom du Spot',
    pageUrl: 'URL de la page de la webcam',
    streamUrl: 'URL du flux vidéo .m3u8'
}
```
