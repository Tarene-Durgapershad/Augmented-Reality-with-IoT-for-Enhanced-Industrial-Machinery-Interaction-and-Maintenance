FROM ghcr.io/tarene-durgapershad/augmented-reality-with-iot-for-enhanced-industrial-machinery-interaction-and-maintenance:main

COPY entrypoint.sh /bin/entrypoint.sh

ENTRYPOINT ["/bin/entrypoint.sh"]
