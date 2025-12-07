# QuadNext - Application de Gestion de Quads

Application Next.js moderne pour la gestion de quads et d'entreprises partenaires.

## Structure du projet

```
src/
 ├── app/
 │    ├── page.tsx                → Page visiteur (home)
 │    ├── entreprise/
 │    │     └── [id]/page.tsx     → Détail entreprise + liste des quads
 │    ├── quad/
 │    │     └── [id]/page.tsx     → Détail d'un quad
 │    ├── admin/
 │    │     ├── page.tsx          → Dashboard admin
 │    │     ├── quads/page.tsx    → CRUD quads
 │    │     ├── new-quad/page.tsx → Création quad
 │    │     └── locations/page.tsx → Liste commandes / locations
 │    ├── superadmin/
 │    │     ├── page.tsx
 │    │     ├── entreprises/page.tsx
 │    │     ├── new-entreprise/page.tsx
 │    │     └── adhesions/page.tsx
 │    └── api/
 ├── components/
 │    ├── QuadCard.tsx             → Carte quad
 │    ├── EntrepriseCard.tsx       → Carte entreprise
 │    ├── AdminQuadItem.tsx        → Item quad admin
 │    ├── Navbar.tsx
 │    └── MediaGallery.tsx         → Galerie images/vidéos quads
 ├── lib/
 │    ├── prisma.ts                → Instance Prisma
 │    └──
 ├── prisma/
 │
 └── styles/
       └── globals.css             → Tailwind + styles globaux
```

## Technologies utilisées

- **Next.js 16** avec App Router
- **React 19** avec TypeScript
- **Tailwind CSS v4** pour le styling
- **Prisma** (à configurer pour la base de données)

## Installation et démarrage

```bash
# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## Fonctionnalités

### Pages publiques
- **Accueil** : Présentation des services avec navigation
- **Détail entreprise** : `/entreprise/[id]` - Profil entreprise et quads disponibles
- **Détail quad** : `/quad/[id]` - Fiche détaillée d'un quad avec galerie média

### Interface Admin
- **Dashboard** : Vue d'ensemble des quads et locations
- **Gestion des quads** : CRUD complet des quads
- **Création de quad** : Formulaire d'ajout de nouveaux quads
- **Locations** : Gestion des commandes et locations

### Interface Super Admin
- **Gestion des entreprises** : Liste et gestion des entreprises partenaires
- **Création d'entreprises** : Ajout de nouvelles entreprises
- **Adhésions** : Gestion des demandes d'adhésion

## Composants

- **Navbar** : Navigation responsive avec liens vers toutes les sections
- **QuadCard** : Carte d'affichage d'un quad
- **EntrepriseCard** : Carte d'affichage d'une entreprise
- **AdminQuadItem** : Élément de liste pour l'administration des quads
- **MediaGallery** : Galerie d'images/vidéos avec miniatures

## Configuration de la base de données

Pour connecter Prisma à votre base de données :

1. Installer Prisma CLI :
```bash
npm install -D prisma
```

2. Initialiser Prisma :
```bash
npx prisma init
```

3. Configurer votre schéma dans `prisma/schema.prisma`

4. Générer le client :
```bash
npx prisma generate
```

## Scripts disponibles

- `npm run dev` : Démarrage du serveur de développement
- `npm run build` : Construction pour la production
- `npm run start` : Démarrage du serveur de production
- `npm run lint` : Vérification du code avec ESLint

## Notes de développement

- Les données sont actuellement simulées dans les composants
- Les routes API dans `src/app/api/` sont prêtes à être implémentées
- L'application utilise des alias TypeScript (`@/` pour `src/`)
- Les erreurs TypeScript dans l'IDE n'affectent pas le fonctionnement
