# /app /usr /lib /bin /etc /var /tmp /dev /proc /sys /run
FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# copy package.json to dest /app
COPY package.json ./

# install npm
RUN npm install

# copy app.js to dest /app
COPY app.js ./

# expose port 3000
EXPOSE 3000

# run node app.js
CMD ["node", "app.js"]