set -ex

curl -sfL https://raw.githubusercontent.com/lokalise/lokalise-cli-2-go/master/install.sh | sh

./bin/lokalise2 \
    file upload \
    --file $3 \
    --lang-iso $4 \
    --token $1 \
    --project-id $2