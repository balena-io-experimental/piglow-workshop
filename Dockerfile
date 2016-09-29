FROM resin/raspberrypi3-alpine-node:latest

ENV INITSYSTEM on

COPY package.json /package.json
RUN npm install

COPY . /usr/src/app

WORKDIR /usr/src/app

CMD npm start
