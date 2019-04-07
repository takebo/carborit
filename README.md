# Carborit

### A simple vehicle bookmarking app.

<a href="https://carborit.netlify.com/" target="_blank"><img src="screenshot.png"></a>

![](https://flat.badgen.net/github/status/takebo/carborit)
![](https://flat.badgen.net/github/last-commit/takebo/carborit)
![](https://flat.badgen.net/github/license/takebo/carborit)

Carborit is a simple vehicle bookmarking app that uses [Fipe API](http://deividfortuna.github.io/fipe) for fetching brand, model and year to show informantion about the selected vehicle.

## Browsers support

| ![](https://www.w3schools.com/images/compatible_chrome.gif)<br>Chrome | ![](https://www.w3schools.com/images/compatible_firefox.gif)<br>Firefox | ![](https://www.w3schools.com/images/compatible_edge.gif)<br>Edge |
| :-------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------: |
|                                  57+                                  |                                   52+                                   |                                16+                                |

## Features

A few things that you can do with Carborit:

- Filter vehicles by its brand, model and year
- Add, remove and list your favorited vehicles

## Design & Prototype

- [Design](https://www.figma.com/file/C1ZPduMNxvqlf0xs9jKfbYEW/Carborit?node-id=0%3A1)
- [Prototype](https://www.figma.com/proto/C1ZPduMNxvqlf0xs9jKfbYEW/Carborit?node-id=0%3A1&viewport=792%2C385%2C0.318906&scaling=min-zoom)

## Development

### Clone Code

```bash
git clone https://github.com/takebo/carborit.git
```

### Install Dependencies

```bash
cd carborit
npm install
```

### Dev Mode

```bash
npm start
```

### Testing

```bash
npm test
```

### Build Release

```bash
npm run build
```

After building, the application will be found in the project's `build` directory.

## Technology Stack

- [React](https://github.com/facebook/react)
- [Create React App](https://github.com/facebook/create-react-app)
- [Axios](https://github.com/axios/axios)
- [Sass](https://github.com/sass/node-sass)

## Todo

- [x] Filters (Brand, Model, Year)
- [x] Favorites
- [x] Responsive Design
- [ ] Unit Testing

## Credits and references

- The vector placeholder for empty vehicle and empty favorites is provided by [unDraw](https://undraw.co/), created by [Katerina Limpitsouni](https://twitter.com/ninalimpi).

## License

{project_name} is [MIT](LICENSE) licensed.
