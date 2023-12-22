### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript? A couple of ways of managing asynchronous code in JS is via asynchronous callbacks and AJAX. Asynchronous calls are functions passed to another function that starts executing code in the background. AJAX is a combination of Async JS and XML that allows the developer to make changes on the client-side without ay impairment to the actual page.

- What is a Promise? A promise is a one-time guarantee of future value.

- What are the differences between an async function and a regular function? In an async function, the function always returns a promise. In a regular function, there is no promise that "awaits."

- What is the difference between Node.js and Express.js? Node.js is a JS environment with libraries to write programming, whereas Express is built on top of Node and adds middleware, routing among other things. Express is considered to be a framework similar to Flask.

- What is the error-first callback pattern? Error-first callback in Node.js is a function which either returns an error object or any successful data returned by the function.

- What is middleware? Middleware is a code that runs in the middle of the request/response cycle. They're functions that get access to the 'req' and 'res' objects and can also call the 'next' function.

- What does the `next` function do? The 'next' function allows the code to progress to the next route. Although we are not passing anything to 'next', if the argument is passed to 'next', Express always treats this as an error.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc). It appears that three requests are trying to be made sequentially from the same api. We are wanting to make each request wait for the previous request before starting however, this slows down the performance. See solution below:

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```

```js
async function getUsers() {
  let baseURL = "https://api.github.com/users/";
  let eliePromise = $.getJSON(`${baseURL}/1/`);
  let joelPromise = $.getJSON(`${baseURL}/2/`);
  let mattPromise = $.getJSON(`${baseURL}/3/`);

  let elie = await eliePromise;
  let joel = await joelPromise;
  let matt = await mattPromise;

  console.log(${elie});
  console.log(${joel});
  console.log(${matt});
}

getUsers();
```
