# Treebo Modals ![GitHub Logo](https://www.treebo.com/blog/wp-content/uploads/2018/11/treebo-new-logo-white-1-1.png)
### Treebo Assignment

The idea is to build a Modal Component which should have:
- Configurable height and width
- The close button within the frame to close the modal
- Modal must have open and close functionality accessible from any component in a React component tree
- Multiple modals can be opened (Stacked Modal) and are closed LIFO (last in first out)
- Close functionality closes the latest modal in the stack

### Installation

Treebo requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd treebo/fe
$ npm install
```

For development environment
```sh
$ npm start
```
You should be able to access the application at http://localhost:8080/

For production environment
```sh
$ npm run build
```
The bundle will be available in `treebo/fe/dist` folder.

### Demo
https://d1n1mk4763yap7.cloudfront.net/


License
----

MIT
