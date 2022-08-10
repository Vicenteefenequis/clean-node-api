FROM node:12
WORKDIR /usr/workspace/clean-node-api
COPY ./package.json .
RUN npm install --only=prod
CMD npm start