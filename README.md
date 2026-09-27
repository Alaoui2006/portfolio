# Portfolio — Mohamed El Alaoui

Site personnel en HTML/CSS/JS pur (pas de framework), bilingue Français/Arabe.

## Structure du projet

```
portfolio/
├── index.html          → toutes les sections du site
├── css/
│   └── style.css       → couleurs, typographie, mise en page, responsive, RTL
├── js/
│   └── script.js       → changement de langue, menu mobile, année du footer
├── assets/
│   ├── images/         → mets ici tes captures d'écran de projets, ta photo
│   └── icons/          → favicon
└── README.md
```

## Comment fonctionne le système bilingue (FR/AR)

Chaque texte traduisible dans `index.html` a deux attributs :

```html
<p data-fr="Texte en français" data-ar="النص بالعربية">Texte en français</p>
```

Quand tu cliques sur **FR** ou **AR** dans la barre de navigation, `script.js` :
1. lit `data-fr` ou `data-ar` selon la langue choisie et remplace le texte affiché ;
2. change `dir="ltr"` ou `dir="rtl"` sur la balise `<html>` (l'arabe s'affiche de droite à gauche automatiquement) ;
3. mémorise ton choix dans le navigateur (localStorage) pour la prochaine visite.

Aucun rechargement de page n'est nécessaire.

**Pour ajouter une nouvelle section traduisible** : ajoute simplement `data-fr="..."` et `data-ar="..."` sur l'élément HTML concerné avec le même texte que celui affiché par défaut.

Les noms techniques (HTML, CSS, JavaScript, PHP, MySQL, GitHub...) ne sont volontairement pas traduits.

## Comment remplacer tes informations personnelles

Cherche ces marqueurs dans `index.html` (Ctrl+F) et remplace-les :

| Placeholder | Où le remplacer |
|---|---|
| `[ADD YOUR EMAIL]` | Section Contact + Hero |
| `[ADD YOUR PHONE]` | Section Contact |
| `[ADD YOUR GITHUB]` | Hero, Contact, cartes projets |
| `[ADD YOUR LINKEDIN]` | Hero, Contact |
| `[ADD PROJECT IMAGE]` | `assets/images/` — ajoute tes captures d'écran |
| `[ADD PROJECT LINK]` | Lien GitHub de chaque projet |
| `[ADD FUTURE PROJECT]` | Titre + description de tes prochains projets (2 cartes prêtes) |
| `[NFC PROJECT NAME]` | Nom de ton projet NFC |
| `[NFC DEMO LINK]` | Lien de démo NFC (le bouton est déjà prêt) |
| `[ADD EDUCATION DETAILS]` | Détails supplémentaires sur ta formation |
| `[ADD FAVICON]` | Ajoute un fichier `.ico` dans `assets/icons/` |
| `[ADD OG IMAGE]` | Image de partage (réseaux sociaux) dans `assets/images/` |

Le code est organisé avec des commentaires `<!-- ... -->` qui marquent chaque section (NAVBAR, HERO, PROJECTS, CONTACT, etc.) pour que tu retrouves facilement où modifier quoi.

## Ajouter un nouveau projet

Copie une des cartes projet "placeholder" dans la section `<!-- PROJECTS -->` de `index.html`, puis :
1. remplace `[ADD FUTURE PROJECT]` par le vrai titre,
2. remplace la description,
3. ajoute les bonnes technologies (`<span class="tag tag--sm">...</span>`),
4. si tu as un lien GitHub ou une démo, ajoute-le dans `.project-card__links` — **si tu n'as pas de lien, ne mets pas le bouton** plutôt qu'un lien qui ne marche pas.

## Ajouter d'autres langues, sections ou fonctionnalités plus tard

Le projet est volontairement simple pour que tu puisses le comprendre entièrement. Quand tu seras prêt, tu pourras ajouter : plus de projets, des projets Laravel/PHP/MySQL, un CV téléchargeable, un mode clair/sombre, un blog, etc. — sans devoir tout refaire, car la structure (HTML sémantique, CSS en sections commentées, JS modulaire) est faite pour grandir.

## Lancer le site en local

Aucune installation nécessaire : ouvre simplement `index.html` dans ton navigateur. Pour un rendu plus proche d'un vrai serveur (utile si tu ajoutes du PHP plus tard avec XAMPP), place le dossier `portfolio/` dans `htdocs/` et lance Apache.
