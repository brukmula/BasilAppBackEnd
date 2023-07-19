# Basil App Backend Code
# Install the dependencies:
## Firebase CLI
See the instructions [here](https://firebase.google.com/docs/cli#install_the_firebase_cli)
## npm packages
```sh
npm install
```
# Run the app:
```shell
DEBUG=BasilAppBackEnd:* npm start
```

**or**

```shell
node app.js
```

# Dockerize!
#### Build the container
```shell
docker build -t basil-backend .
``` 

##### Run the container (detached)
```shell
docker run -d -p 3000:3000 \
       --restart=unless-stopped \
       --name basil-backend \
       basil-backend
```

[NET Copyright](https://netbible.com/copyright/)