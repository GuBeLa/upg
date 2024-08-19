FROM node:20.16.0 AS build-stage
ARG BRANCH_NAME
WORKDIR /app
EXPOSE 80
COPY package*.json ./
COPY . ./

##RUN npm i -g
RUN yarn install --force 
##RUN npm install
RUN echo build
RUN yarn build --base=/support/oneadmin/react/

FROM nginx:stable-alpine AS production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]