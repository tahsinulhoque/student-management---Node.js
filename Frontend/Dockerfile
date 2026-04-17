# Build stage
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build React app
RUN npm run build

# Production stage
FROM node:18

WORKDIR /app

# Install serve package
RUN npm install -g serve

# Copy build files
COPY --from=build /app/dist ./dist

# Expose frontend port
EXPOSE 5173

# Run frontend
CMD ["serve", "-s", "dist", "-l", "5173"]