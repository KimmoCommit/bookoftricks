---
layout: post
published: true
---
Requires d3.js.

{% highlight javascript %}
const svgElement = d3.select(document.getElementById('my-svg'));
    const defs = svgElement.append('defs');
    defs.append('clipPath')
      .attr('id', 'circle')
      .append('path')
      .attr('d',
            `
            M0,0H300V300H-1
            M 150, 150
            m -75, 0
            a 75,75 0 1,0 150,0
            a 75,75 0 1,0 -150,0
            `
            );
    defs.append('pattern')
      .attr('id', 'ptrn')
      .attr('width', 300)
      .attr('height', 300)
      .attr('patternUnits', 'userSpaceOnUse')
      .append('svg:image')
      .attr('xlink:href', `http://i.imgur.com/kKql9Xo.jpg?1`)
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 300)
      .attr('height', 300);
    svgElement.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 300)
      .attr('height', 300)
      .attr('fill', 'url(#ptrn)')
      .attr('clip-path', 'url(#circle)');
{% endhighlight %}

<iframe height='265' scrolling='no' src='//codepen.io/KimmoCommit/embed/PNgagg/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/KimmoCommit/pen/PNgagg/'>Hole to an image with SVG</a> by KimmoCommit (<a href='http://codepen.io/KimmoCommit'>@KimmoCommit</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>