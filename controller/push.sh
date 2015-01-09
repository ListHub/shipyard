docker build . 
image=$(docker images | head -2 | tail -1  | tr -s " " | cut -d ' ' -f 3)
docker kill shipyard
docker rm shipyard
echo $image
docker run -it -p 8080:8080 -d --name shipyard  --link shipyard-rethinkdb:rethinkdb $image 
