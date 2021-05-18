# Web_server_nodejs

A basic web server made using Node-JS  and Express.
The dummy data is maintained in a json file named coin_Data.json.
The range of roll number is 100 to 108 so in request use roll number value to be btw 100 to 1-8.
Also the output wold be in json format.

Install express, body-parser. We need fs and body-parser to acquire data from a json file.

Run the server.js in terminal and request data fron another terminal window...
for this request:::

curl --header "Content-Type: application/json" --request POST  --data '{"rollno":"180199"}'   http://localhost:8080/coins

Output : 
{
  "coins": 19
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------//

The folder express_use have the server made using express js . Its the additional part and is not in task
And when a user makes a request to our server we provide the data to him as number of coin he has .

The project directory check is built upon the above base files and is somewhat better.This again uses express as well as ps.js. 
The check folder has a server.js ( Do work of a server ) that respond to the request of fetch.js that request data from user and then the fetch.js make a request to server.js which returns the desired outcome in the console and can be used for oter applications.

