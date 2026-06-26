/*
Fetch is a built in Js function sends http requests like GET,POST,PUT,DELETE to a server and resecive a response

fetch returns a promise since response is not obtained immediately

Step-by-step flow of fetch()

Consider this code:

console.log("Start");

fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));

console.log("End");
Step 1: Global Execution Context

The call stack contains:

Call Stack
-------------------
Global Execution Context
Step 2: console.log("Start")
Output:
Start
Step 3: fetch() is called

The fetch() function is pushed onto the call stack.

Call Stack
-------------------
fetch()
Global

fetch() immediately:

starts the network request (handled by the browser's Web APIs or Node.js runtime)
returns a Promise immediately

After that:

Call Stack
-------------------
Global

The network request is still happening in the background.

Step 4: JavaScript continues

Since the request isn't finished yet, JavaScript doesn't wait.

It executes:

console.log("End");

Output:

Start
End
Step 5: Server responds

After (say) 2 seconds, the server sends back the response.

The browser marks the Promise returned by fetch() as fulfilled.

Now here's the important part:

👉 The .then() callback is placed into the Microtask Queue.

Not the network request itself.

Microtask Queue

.then(response => ...)
Step 6: Event Loop

The Event Loop checks:

Is the Call Stack empty?
If yes, it processes all microtasks before any regular tasks.

So:

Call Stack
------------------
.then(...)

executes.

Why the Microtask Queue?

Because Promise callbacks (.then(), .catch(), .finally()) are always scheduled as microtasks.

Examples:

Promise.resolve().then(() => console.log("Microtask"));

goes to the Microtask Queue.

Whereas:

setTimeout(() => console.log("Task"), 0);

goes to the Task (Callback) Queue.

Microtask Queue vs Task Queue
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

Output:

Start
End
Promise
Timeout

Why?

Call Stack becomes empty

↓

Process ALL Microtasks
    Promise

↓

Process one Task
    setTimeout
Complete flow of fetch()
           JavaScript Engine
        ┌────────────────────┐
        │    Call Stack      │
        └─────────┬──────────┘
                  │
                  ▼
              fetch()
                  │
                  ▼
      Browser Web API starts request
                  │
        (network request running)
                  │
                  ▼
        Promise is fulfilled
                  │
                  ▼
       .then() callback added to
          Microtask Queue
                  │
                  ▼
             Event Loop
                  │
                  ▼
            Call Stack
                  │
                  ▼
        .then() executes

//=============================================
 
Here's a polished and technically accurate version of your notes:


//# Understanding How `fetch()` Works

When you call:

javascript
const response = fetch("something");


There are **two main parts** involved.



 The Promise Object (JavaScript Side)

fetch() **immediately returns a Promise object**.

That Promise internally contains three important parts:

text
Promise
│
├── data (or result)      → Initially empty (pending)
├── onFulfilled[]         → Stores success callbacks (.then())
└── onRejected[]          → Stores failure callbacks (.catch())


### Explanation

* **`data`**

  * Initially empty because the network request hasn't completed.
  * Once the request succeeds, it stores the response value.
  * If the request fails, it stores the rejection reason (error).

* **`onFulfilled[]`**

  * An internal list of callback functions registered using `.then()`.
  * These callbacks are **private** and cannot be accessed directly by your code.

* **`onRejected[]`**

  * An internal list of callback functions registered using `.catch()`.
  * These are also private.

Example:

javascript
fetch(url)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });


The functions passed to `.then()` and `.catch()` are internally stored in these private arrays until the Promise settles.

---

## 2. The Browser (or Node.js) Runtime

At the same time, `fetch()` asks the browser (or Node.js runtime) to perform the actual **network request**.

text
fetch()

      │
      ▼

Browser / Node Runtime

      │
      ▼

Makes HTTP Request

      │
      ▼

Server


JavaScript itself **does not perform the network request**. It delegates this task to the browser's Web APIs (or Node.js APIs).

---

# What Happens When the Network Request Finishes?

There are two possibilities:

### Success

The Promise is **fulfilled**.

text
Server Response

      │

Promise becomes Fulfilled

      │

data = Response

      │

Run all onFulfilled callbacks (.then())


---

### Failure

If the network request itself fails (for example, **no internet connection**, **DNS lookup failure**, **request timeout**, etc.), the Promise is **rejected**.

text
Network Error

      │

Promise becomes Rejected

      │

data = Error

      │

Run all onRejected callbacks (.catch())


# Important Note: HTTP Errors (404, 500, etc.)

This is one of the most commonly misunderstood parts of `fetch()`.

**HTTP errors such as `404 Not Found` or `500 Internal Server Error` do NOT reject the Promise.**

Why?

Because the network request **was successful**:

* The request reached the server.
* The server processed it.
* The server sent back a valid HTTP response.

The only issue is that the **HTTP status code indicates an error**.

Therefore:

javascript
fetch(url)


returns a **fulfilled Promise**, even if the response status is `404` or `500`.

Example:

javascript
fetch("/invalid-page")
    .then(response => {
        console.log(response.status); // 404
        console.log(response.ok);     // false
    })
    .catch(error => {
        // This will NOT run for a 404 response.
    });


To handle HTTP errors, you must check the response yourself:

javascript
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => {
        console.log(error);
    });


# Complete Flow

text
fetch(url)
      │
      ▼
Creates a Promise
      │
      ├── data = pending
      ├── onFulfilled[]
      └── onRejected[]
      │
      ▼
Browser / Node Runtime
      │
      ▼
Network Request
      │
      ▼
Server Responds
      │
      ├── Network Success
      │      │
      │      ▼
      │  Promise Fulfilled
      │      │
      │      ▼
      │  data = Response
      │      │
      │      ▼
      │  Execute all .then() callbacks
      │
      └── Network Failure
             │
             ▼
        Promise Rejected
             │
             ▼
        data = Error
             │
             ▼
        Execute all .catch() callbacks

### **Key takeaway**

* `fetch()` immediately returns a **Promise**.
* The **browser/Node.js runtime** performs the network request.
* If the **network request succeeds**, the Promise is **fulfilled**, even if the HTTP status is **404** or **500**.
* If the **network request itself fails** (e.g., no internet, DNS failure), the Promise is **rejected**.
* Once the Promise is fulfilled or rejected, the appropriate callbacks (`.then()` or `.catch()`) are queued as **microtasks** and executed when the call stack is empty.

*/