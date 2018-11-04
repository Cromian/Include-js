# Include JS
Easily include code into your html using JavaScript

### How it works:

IncludeJS is a simple way to easily include multiple HTML, CSS, or JavaScript files into your project using JavaScript! Similar to the PHP `include()` function, this does the same but using JavaScript. 

To get started simply add `include.js` to your index, create a `div` with a unique ID and add the following code:

```
<div id="unique_id">

  // JS:
  <script>include.js(FILE_PATH, ID_OF_TAG);</script>
  
  // CSS:
  <script>include.css(FILE_PATH, ID_OF_TAG);</script>
  
  // HTML
  <script>include.html(FILE_PATH, ID_OF_TAG);</script>

</div>
```

To ensure optimal memory consumption keep in mind that each include add an additional http request.

If you have any questions or issues please open an issue.


