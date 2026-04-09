FROM oven/bun:latest
RUN apt-get update -y
RUN apt-get install -y openssl
COPY . /app
WORKDIR /app
ENV GOOGLE_KEY_FILENAME="wtf"
ENV GOOGLE_SHEET_ID="wtf"
ENV GOOGLE_FOLDER_ID="wtf"
ENV PUBLIC_GOOGLE_FORM_REGISTER="wtf"
ENV PUBLIC_GOOGLE_FORM_VOLUNTEER="wtf"
RUN bun install
RUN bun run build
EXPOSE 3000/tcp
CMD [ "bun", "start" ]