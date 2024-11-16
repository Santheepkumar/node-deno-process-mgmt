# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Install PM2 globally
RUN npm install pm2 -g

# Expose the application port
EXPOSE 3000

# Start the app using PM2 in cluster mode
CMD ["pm2", "start", "app.js", "--no-daemon", "-i", "2"]
