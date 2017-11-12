FROM node:9.1

WORKDIR app

ADD package.json .
ADD package-lock.json .

RUN npm install

ENV PATH ./node_modules/.bin:$PATH
ADD . /app

CMD npm start
