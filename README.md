# NodeJS Streams
This sample project contains 2 routes. 
- /get-items GET
- /random-action GET

When cloning this project try running both `/get-items` and `/random-action` at the same time. You will see both can be executed without problems at the same time.
However, try commenting out line 23 in the index.ts file. If you rebuild the project and run the 2 routes again. You will notice that there is no way to get the result of `/random-action` without `/get-items` having finished first. 

This shows both the single-threaded nature of NodeJS and the importance of streams. 

Our data mostly comes in the form of JSON from for example a database. If we have a large set of data that we need to either stringify or parse it's not recommended to do this in a sequential for-loop way. 
JSON.stringify and JSON.parse are operations that can't be handled async or in a new thread by the google V8 engine. So these operations will block your entire server until it's finished. 

By using a stream, we can gradually parse OR stringify the results one by one and letting the server "wait" in between. Which makes sure our event-loop stays active to handle new requests coming in. 

This is not only handy when handling large JSON responses, but also with heavy CPU tasks.



