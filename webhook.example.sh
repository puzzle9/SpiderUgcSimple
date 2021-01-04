echo `date`
git pull
yarn
yarn stop
yarn run clean
yarn run tsc
yarn run start
echo 'success'
