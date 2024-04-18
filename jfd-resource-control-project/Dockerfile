FROM node:alpine
WORKDIR /jfd-resource-control-project
COPY package.json .
EXPOSE 5173
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
