FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build
RUN npm i serve
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "build" ]

