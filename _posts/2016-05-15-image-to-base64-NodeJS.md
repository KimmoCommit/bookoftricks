---
layout: post
published: true
---
<div id="code-to-copy-{{post.id}}">
{% highlight javascript %}
var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
  if(err) console.log(err);
  console.log(new Buffer(data).toString('base64'));
});
{% endhighlight %}
</div>
Usage: `node filename.js C:\Path\To\Your\Image.png`
When using the base64 image e.g in web, you have to add **data:image/png;base64,** beginning of the base64 image.
