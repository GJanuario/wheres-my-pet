# Build
FROM node:alpine AS wheres-my-pet-build

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile && yarn build

# Serve
FROM nginx:alpine

COPY --from=wheres-my-pet-build /app/dist/wheres-my-pet /usr/share/nginx/html

EXPOSE 80