. .env

if [ "$HOST_SSH" = "" ]; then
    echo ERROR: env HOST_SSH is not defined
    exit 1
fi

if [ "$HOST_DIR" = "" ]; then
    echo ERROR: env HOST_DIR is not defined
    exit 1
fi

if [ ! -f ./service-key.json ]; then
    echo ERROR: file ./service-key.json not exist
    exit 1
fi

scp ./service-key.json .env "$HOST_SSH:$HOST_DIR"
ssh $HOST_SSH /bin/bash << EOF
. ~/.nvm/nvm.sh
cd $HOST_DIR
git pull
rm -rf build
pnpm install
pnpm build
pm2 startOrRestart pm2.config.json
EOF
