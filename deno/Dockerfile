# Use the official Deno image
FROM denoland/deno:alpine

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . .

# Expose the application port
EXPOSE 3000

# Run the Deno app
CMD ["run", "-A", "app.ts"]
