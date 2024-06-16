## Base Stage
FROM node:20.14.0-alpine as base

# Set the working directory
WORKDIR /app

# Copy package.json, pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@9.3.0 --activate

## Dependency Stage
FROM base as deps

# Install dependencies
RUN pnpm install || (cat /tmp/*/build.log; exit 1)

## Build Stage
FROM deps as build

# Copy the rest of the application files
COPY . .

# Build the application
RUN pnpm run build

## Server Stage
FROM nginx:alpine as server

# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist /usr/share/nginx/html

# Copy Nginx configuration
COPY .nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]

