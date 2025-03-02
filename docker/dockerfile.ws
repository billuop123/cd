FROM oven/bun:1
WORKDIR /user/src/app
COPY ./packages ./packages
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./bun.lock ./bun-lock
COPY ./apps/ws ./apps/ws
RUN bun i
RUN bun run db:generate 
EXPOSE 8081
CMD ["bun","run","index.ts"]