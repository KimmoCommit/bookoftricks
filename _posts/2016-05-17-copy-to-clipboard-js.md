---
layout: post
published: true
---
<div class="code-to-copy">
{% highlight javascript %}
const answer = document.getElementById("copyResult");
const copy   = document.getElementById("copyButton");
const selection = window.getSelection();
const range = document.createRange();
const textToCopy = document.getElementById("textToCopy")

copy.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'Copied!';
    } else {
      answer.innerHTML = 'Unable to copy!';  
    }
    window.getSelection().removeAllRanges()
});
{% endhighlight %}
</div>

Take note of the `getSelection()` support: https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection. IE < 9 does not seem to be supported atm and mobile support is relatively unknown. More details about clearing selection support: http://stackoverflow.com/questions/3169786/clear-text-selection-with-javascript.

<iframe height='265' scrolling='no' src='//codepen.io/KimmoCommit/embed/mPYpBE/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/KimmoCommit/pen/mPYpBE/'>Copy to clipboard JS</a> by KimmoCommit (<a href='http://codepen.io/KimmoCommit'>@KimmoCommit</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>