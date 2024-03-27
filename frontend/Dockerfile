# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the frontend application files to the container
# todo: change pathing approach
COPY ./frontend /app

# Install any dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app
CMD ["npm", "start"]

