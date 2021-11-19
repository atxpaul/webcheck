FROM node:14.17.6-alpine3.11

# setting production enviroment
ENV NODE_ENV production

# create the directory inside the container
WORKDIR /app

# copy the package.json files from local machine to the workdir in container
COPY package*.json ./

# run npm install in our local machine
RUN npm ci --only=production

# copy the generated modules and all other files to the container
COPY . .

# the command that starts our app
CMD ["node", "index.js"]