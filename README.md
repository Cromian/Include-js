# Include JS
Easily include code into your html using JavaScript

### How it works:

Include JS is a simple way to easily include multiple HTML, CSS, or JavaScript files into your project using JavaScript! Similar to the PHP include() function this does the same but using JavaScript. 

At the core of include JS are clusters, a collection of web assets bundled into a directory.  

To get started simply add `include.js` to your index and  create a directory named `clusters`. Within that directory  create a sub folder using the name of your desired cluster.

Within the cluster, you can have as many web assets or files, by defulat you can create the following files that are automtaically loaded by the function:

- style.css
- script.js
- cluster.html

### Using the Function:
To use the function create a DIV with the cluster name and add the following code:

```
<div id="clusterName">
  <script>include('clusterName', {css:true, js:true, html:true})</script>
</div>
```

If you just need to include one file (html, css, or Js) you can just write `include('clusterName'{fileType:true});` and it will just load that one file within the cluster. When loading an html file you can include the css and js files from within the html file if you want to do it that way.


### Pros of using Include JS
The real benefit of using this library is that you can easily load secondary files on-demand that would be called via an action. 

```
if (x == 1) {
    include('example_cluster', {css:true, js:true, html:true});
}
```

To ensure optimal memory consumption its best to use Include JS in instances mentioned above. While you can use it to better organize your code, keep in mind that each include add an additional request.

If you have any questions or issues please open an issue.


