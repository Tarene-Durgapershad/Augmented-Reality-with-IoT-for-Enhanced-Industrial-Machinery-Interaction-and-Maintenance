FROM ghcr.io/Tarene-Durgapershad/Augmented-Reality-with-IoT-for-Enhanced-Industrial-Machinery-Interaction-and-Maintenance:main
WORKDIR /app
COPY . .
ENTRYPOINT ["/bin/entrypoint.sh"]
