FROM node:latest

WORKDIR /usr/src/app


COPY src/. .
ENV PYTHONUNBUFFERED=1

#ENTRYPOINT ["tail"] 
#CMD ["-f","/dev/null"]

CMD [ "npm", "start"]
