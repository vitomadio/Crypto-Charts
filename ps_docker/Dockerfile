FROM postgres:11
ENV POSTGRES_DB crypto
COPY ./db.sql /docker-entrypoint-initdb.d/
EXPOSE 5432