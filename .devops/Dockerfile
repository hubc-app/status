# This file uses envsubst to substitute arguments rather than build-args

FROM node

WORKDIR /app/

COPY . ./
RUN yarn
RUN yarn next build

CMD ["yarn", "next", "start"]
