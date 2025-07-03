# Use AWS public ECR nginx image to avoid Docker Hub rate limits
FROM public.ecr.aws/nginx/nginx:latest

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Remove default index.html from Nginx
RUN rm -rf ./*

# Copy entire project files to the container
COPY . /usr/share/nginx/html/

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
CMD ["nginx", "-g", "daemon off;"]
