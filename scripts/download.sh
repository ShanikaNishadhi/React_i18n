set -ex

curl -sfL https://raw.githubusercontent.com/lokalise/lokalise-cli-2-go/master/install.sh | sh

./bin/lokalise2 \
    --token $1 \
    --project-id $2 \
    file download \
    --format json \
    --unzip-to $3