FROM node:16-alpine 
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci 
COPY . .
RUN npm run build
RUN npm i serve
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "-s", "build" ]

