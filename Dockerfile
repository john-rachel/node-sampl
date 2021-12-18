# Using Base image file

From node:16

#Create app directory

WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./

Run npm cache clean --force

Run npm install

COPY . .
EXPOSE 3000
CMD ["npm", "start"]
