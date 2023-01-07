FROM node:19.4.0

ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN npm install

WORKDIR /app
ADD . /app

EXPOSE 3000

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]
