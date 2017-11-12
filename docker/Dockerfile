FROM node:9.1

WORKDIR app

ADD package.json .
ADD package-lock.json .

RUN npm install

ADD . /app

CMD npm start
