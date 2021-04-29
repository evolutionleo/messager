// todo: replace this file with actual .env files
var api_url, api_port, origin

if (process.env.NODE_ENV === 'production') {
    api_port = 8080;
    origin = "62.113.112.109"
}
else {
    api_port = 8080;
    origin = "127.0.0.1"
}

api_url = "http://" + origin + ":" + api_port + "/api"

export { api_url, api_port, origin }