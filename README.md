includeJS
=========

<h2>First: get include.js</h2>
<h3><a href="include.js">include.js</a></h3>
<h3><a href="include.min.js">include.min.js</a></h3>
<h2>Second: add include.js to your document</h2>
<pre class="1">
&#60;script type="text/javascript" src="include.js"&#62;&#60;/script&#62;
</pre>	
<h2>Third: add an include tag</h2>
<pre class="1">
&#60;include src="myFile.htm"&#62;&#60;/include&#62;
</pre>	
<p>You specify the document you want to include into your file via the src attribute. Upon load that file will automatically be loaded into the document.</p>
<h2>Optional: call function includeFn()</h2>
<pre class="2">
//Yes... it's that simple.
var el = document.querySelector('myElement')
includeFn(el);
</pre>
<p>This function can do two things. One, if there is no element specified in the parameter. It will update all include tags.
Two, if a parameter is specified. It will select only that specific query.</p>
<h2>Example include:</h2>
<pre class="1">
&#60;include src="backagain.htm"&#62;&#60;/include&#62;
</pre>	
