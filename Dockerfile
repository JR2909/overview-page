FROM nginx:alpine

RUN rm -f /etc/nginx/conf.d/default.conf
COPY overview.conf /etc/nginx/conf.d/default.conf

COPY src/ /usr/share/nginx/html/

RUN find /usr/share/nginx/html -type d -exec chmod 755 {} \; \
    && find /usr/share/nginx/html -type f -exec chmod 644 {} \; \
    && chmod 644 /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]