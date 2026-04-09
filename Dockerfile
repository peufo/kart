FROM oven/bun:latest
RUN apt-get update -y
RUN apt-get install -y openssl
COPY . /app
WORKDIR /app
ENV GOOGLE_KEY_FILENAME="because used in path.resolve()"
RUN bun install
RUN bun run build
EXPOSE 3000/tcp
CMD [ "bun", "start" ]