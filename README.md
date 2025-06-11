# 📊 hrnet-react-datatable


**Un composant React modulaire de tableau de données avec tri, pagination et recherche intégrés.**  
Créé dans le cadre du projet 14 – OpenClassrooms : "Faites passer une librairie jQuery vers React".


## ✨ Fonctionnalités

- ✅ Tri des colonnes
- 🔍 Recherche globale
- 📄 Pagination automatique
- ⚙️ Entièrement typé en TypeScript
- 📦 Réutilisable dans tout projet React


## 🚀 Installation

### Depuis npm (optionnel)
```bash
npm install hrnet-react-datatable
```

### Depuis GitHub
```bash
npm install ArthurDenis62/hrnet-react-datatable
```

## 🧪 Utilisation

```tsx
import { DataTable } from 'hrnet-react-datatable'

const data = [
  { firstName: 'Jean', lastName: 'Dupont', department: 'Finance' },
  { firstName: 'Alice', lastName: 'Martin', department: 'RH' }
]

const columns = [
  { label: 'Prénom', accessor: 'firstName', sortable: true },
  { label: 'Nom', accessor: 'lastName', sortable: true },
  { label: 'Département', accessor: 'department', sortable: true }
]

function App() {
  return <DataTable data={data} columns={columns} itemsPerPage={5} />
}
```

## 🧾 Props

| Prop           | Type             | Description                            |
|----------------|------------------|----------------------------------------|
| `data`         | `T[]`            | Tableau de données                     |
| `columns`      | `Column<T>[]`    | Définition des colonnes à afficher     |
| `itemsPerPage` | `number`         | (optionnel) Nombre d’éléments par page |

### `Column<T>` :

```ts
{
  label: string
  accessor: keyof T
  sortable?: boolean
}
```

## 🧱 Structure technique

- React + TypeScript
- Vite (build)
- Build exporté en `dist/` avec types `.d.ts` inclus
- Utilisable via GitHub ou npm

## 📄 Licence

MIT

## 👨‍💻 Auteur

Arthur Denis — [GitHub @ArthurDenis62](https://github.com/ArthurDenis62)