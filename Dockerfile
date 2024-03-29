FROM ghcr.io/Tarene-Durgapershad/Augmented-Reality-with-IoT-for-Enhanced-Industrial-Machinery-Interaction-and-Maintenance:main

COPY entrypoint.sh /bin/entrypoint.sh

ENTRYPOINT ["/bin/entrypoint.sh"]
