# Aluzar — Landing Page

Site mobile-first de conversion pour la marque de tequila **Aluzar**. Accessible via QR code imprimé sur les bouteilles, il cible les barmans et gérants de bars/restaurants au Portugal.

## Concept

Un client scanne le QR code sur une bouteille Aluzar → il arrive sur ce site → il découvre le produit → il prend contact via WhatsApp pour une partnership.

## Stack

- **React 19** + **Vite**
- **Chakra UI v2** — composants et layout
- **Framer Motion v12** — animations scroll et entrée
- **Leaflet / React-Leaflet** — carte interactive des établissements partenaires

## Lancer le projet

```bash
npm install
npm run dev
```

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build |
| `npm run lint` | Linter ESLint |

## Structure des sections

| Section | Fichier | Description |
|---|---|---|
| Intro splash | `IntroScreen.jsx` | Logo sur fond cuivré, slide up |
| Hero | `HeroSection.jsx` | "Gostaste?" + bouteille animée |
| Arguments | `ArgumentsSection.jsx` | 6 raisons + CTA WhatsApp |
| Como funciona | `ComoFunciona.jsx` | Process B2B en 3 étapes |
| Origine | `OriginSection.jsx` | Histoire + stats qualité |
| Témoignages | `Testimonial.jsx` | Avis clients |
| Présence | `PresencaSection.jsx` | Compteurs + carte Leaflet |
| Contact | `Contact.jsx` | CTA WhatsApp final |


## Charte graphique

| Élément | Valeur |
|---|---|
| Cuivré (accents) | `#cc8655` |
| Fond sombre | `#0f2318` |
| Texte principal | `wheat` |
| WhatsApp | `#25D366` |
| Font titres | AbrilFatface |
| Font corps | ITC Souvenir |
