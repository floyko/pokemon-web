# Pokedex

## A Pokemon web application built with Angular 22, TypeScript, Tailwind CSS, DaisyUI, and the PokeAPI

This project is a fully functional Pokedex web application built as a portfolio project to demonstrate modern Angular development, API integration, component architecture, responsive UI design, client-side caching, and state management.

The application retrieves Pokemon data from the [PokeAPI](https://pokeapi.co/) and provides an interactive interface for browsing, searching, and viewing Pokemon details.

## Features

- Browse Pokemon in a paginated grid
- Search for Pokemon by name
- Autocomplete search suggestions
- View detailed Pokemon information
- Pokemon type badges with type-specific colors
- Responsive user interface
- Client-side caching using `localStorage`
- Cached Pokemon list to reduce unnecessary API requests
- Cached Pokemon card data to reduce repeated API requests
- Adjustable number of Pokemon displayed per page
- Search results displayed in a modal
- Built with reusable Angular components

## Technologies

- **Angular 22**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**
- **SCSS**
- **RxJS**
- **Lucide Icons**
- **PokeAPI**
- **LocalStorage**

## Project Structure

The application is organized around reusable Angular components and services.

```text
src/
└── app/
    ├── components/
    │   ├── card/
    │   ├── pokemon-search-modal/
    │   └── search-bar/
    │
    ├── constants/
    │   └── pokemon-types.ts
    │
    ├── models/
    │   └── pokemon.ts
    │
    ├── pages/
    │   └── pokedex/
    │
    └── services/
        └── pokemon.service.ts
```

## API

This application uses the [PokeAPI](https://pokeapi.co/) to retrieve Pokemon data.

The main endpoint used by the application is:

```text
https://pokeapi.co/api/v2/pokemon
```

The application retrieves the Pokemon list and then requests individual Pokemon data as needed.

The API response uses `snake_case` property names, while the application maps the data into `camelCase` application models where appropriate.

For example:

```text
front_default → frontDefault
```

## Caching

The application uses `localStorage` to reduce unnecessary API requests.

Two caches are maintained:

### Pokemon List

```text
pokemon-list
```

The Pokemon list is stored locally after the initial API request so that subsequent visits do not need to download the entire list again.

### Pokemon Cards

```text
pokemon-cards
```

Individual Pokemon card data is stored together in a single localStorage object.

When a Pokemon is requested, the application first checks the local cache. If the Pokemon is already cached, the cached data is used instead of making another PokeAPI request.

## How to Install

### Prerequisites

1. [Install Node.js and npm](https://nodejs.org/en/download)

2. Clone this repository:

```bash
git clone https://github.com/floyko/pokemon-web.git
```

3. Change into the project directory:

```bash
cd pokemon-web
```

4. Install the project dependencies:

```bash
npm install
```

5. Start the Angular development server:

```bash
npm start
```

6. Open the application in your browser:

```text
http://localhost:4200
```

The application should now be running locally.

## Development

To start the development server:

```bash
npm start
```

To create a production build:

```bash
npm run build
```

To run the test suite:

```bash
npm test
```

## Screenshots

### Pokedex

![Pokedex](https://github.com/user-attachments/assets/a05a2763-2825-44c1-b52c-9c3236fc4764)

### Pokemon Search

![Pokemon Search](https://github.com/user-attachments/assets/d8cd78ec-446b-4d73-b596-1851d10ad3dd)

### Pokemon Details

![Pokemon Details](https://github.com/user-attachments/assets/13ffce69-fb57-4358-b2dd-f5bdef46db00)

## Demo

Watch the following video to see the application in action:

[![Pokedex Demo](https://img.youtube.com/vi/D-wbE-7t18A/0.jpg)](https://www.youtube.com/watch?v=D-wbE-7t18A)

## Future Improvements

Potential future improvements include:

- Additional Pokemon statistics
- Pokemon evolution information
- Filtering by Pokemon type
- Sorting Pokemon
- Favorites
- Improved offline support
- Additional animations and UI interactions
- More comprehensive unit and integration tests

## Credits

Pokemon data is provided by [PokeAPI](https://pokeapi.co/).

Pokemon and Pokemon character names are trademarks of Nintendo, Game Freak, and The Pokemon Company.

This project is a fan-made portfolio project and is not affiliated with or endorsed by Nintendo, Game Freak, or The Pokemon Company.
