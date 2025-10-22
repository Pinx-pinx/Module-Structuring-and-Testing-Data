Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
What effect does calling the `alert` function have?

Answer: It called a pop up with the message I input "hello world" and there was a clickable button "ok".

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
It called a pop up with the message i input "What is your name?" and below it was an input field where you can type anything you want as I've tried to input letters and numbers. There was also a clickable button "cancel" and "ok"
What is the return value of `prompt`?
It will return the value what any message you typed on the input field.