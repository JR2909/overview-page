# Overview for services hosted on a VPS
## Podman
```
podman build -t overvie-page .
podman run -d -p 8383:8383 --name overview overview-page
```
