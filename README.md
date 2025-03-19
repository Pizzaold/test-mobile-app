This repo will be deleted soon as it's just for school.

# Furniture Marketplace Mobile App

A React Native mobile application built with Expo that allows users to browse and purchase furniture. The app features a modern UI with product listings, categories, favorites, and detailed product views.

## Features

- Browse furniture by categories
- Search products
- View product details with image carousel
- Add products to favorites
- User authentication
- Modern and responsive UI

## Tech Stack

- React Native
- Expo
- TypeScript
- Expo Router for navigation
- React Native Safe Area Context

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   or
   yarn install
   ```

2. Start the development server:
   ```bash
   npx expo start
   or
   yarn start
   ```

3. Run the app on your preferred platform:
   - Press `a` to open on Android emulator
   - Press `i` to open on iOS simulator
   - Scan QR code with Expo Go app to run on your physical device

## Project Structure

```
app/
├── (app)/           # Main app screens
│   └── (tabs)/      # Tab navigation screens
├── (auth)/          # Authentication screens
├── components/      # Reusable components
└── utils/          # Utility functions and data
```

## Development

The app uses file-based routing with Expo Router. You can start developing by editing files in the `app` directory. The project follows a modular structure with separate components and screens.