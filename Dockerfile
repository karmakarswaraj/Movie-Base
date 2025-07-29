# THIS ONE TAKES 2.4 GB
FROM node:22

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]




# OPTIMSED BELOW TAKES 1.6 GB

# FROM node:22 AS builder

# WORKDIR /src

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Use serve to serve the built site
# FROM node:22

# WORKDIR /src

# RUN npm install -g serve

# COPY --from=builder /src/dist ./build

# EXPOSE 5173

# CMD ["serve", "-s", "build", "-l", "5173"]
