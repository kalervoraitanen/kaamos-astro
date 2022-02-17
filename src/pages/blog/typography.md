---
setup: |
  import Layout from '../../layouts/BlogPostLayout.astro';
title: Typography
description: This is an example blog post
publishDate: Saturday, July 31 2021
permalink: https://my-site.dev/blog/example-blog
heroImage: "/assets/blog/typography/typography-calligraphy-work.jpg"
alt: Typography calligraphy work.
categories:
- Astro
- Typography
---
<p>Headings:</p>
<h1>Header one</h1>
<h2>Header two</h2>
<h3>Header three</h3>
<h4>Header four</h4>
<h5>Header five</h5>
<h6>Header six</h6>
<h2>Blockquotes</h2>
<p>Single line blockquote:</p>
<blockquote><p>Stay hungry. Stay foolish.</p></blockquote>
<p>Multi line blockquote with a cite reference:</p>
<blockquote><p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see <a href="https://developer.mozilla.org/en-US/docs/HTML/Element/blockquote#Notes">Notes</a> for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite"><code>&lt;cite&gt;</code></a> element.</p></blockquote>
<p>multiple contributors &#8211; MDN HTML element reference &#8211; blockquote</p>
<h2>Tables</h2>
<figure><table><thead><tr><th>Employee</th><th>Salary</th><th></th></tr></thead><tbody><tr><th><a href="http://example.org/">John Doe</a></th><td>$1</td><td>Because that&#8217;s all Steve Jobs needed for a salary.</td></tr><tr><th><a href="http://example.org/">Jane Doe</a></th><td>$100K</td><td>For all the blogging she does.</td></tr><tr><th><a href="http://example.org/">Fred Bloggs</a></th><td>$100M</td><td>Pictures are worth a thousand words, right? So Jane x 1,000.</td></tr><tr><th><a href="http://example.org/">Jane Bloggs</a></th><td>$100B</td><td>With hair like that?! Enough said&#8230;</td></tr></tbody></table></figure>
<h2>Definition Lists</h2>
<p>Definition List Title Definition list division. Startup A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model. #dowork Coined by Rob Dyrdek and his personal body guard Christopher &#8220;Big Black&#8221; Boykins, &#8220;Do Work&#8221; works as a self motivator, to motivating your friends. Do It Live I&#8217;ll let Bill O&#8217;Reilly will <a href="https://www.youtube.com/watch?v=O_HyZ5aW76c">explain</a> this one.</p>
<h2>Unordered Lists (Nested)</h2>
<ul><li>List item one<ul><li>List item one<ul><li>List item one</li><li>List item two</li><li>List item three</li><li>List item four</li></ul></li><li>List item two</li><li>List item three</li><li>List item four</li></ul></li><li>List item two</li><li>List item three</li><li>List item four</li></ul>
<h2>Ordered List (Nested)</h2>
<ol start="8"><li>List item one -start at 8<ol><li>List item one<ol reversed="reversed"><li>List item one -reversed attribute</li><li>List item two</li><li>List item three</li><li>List item four</li></ol></li><li>List item two</li><li>List item three</li><li>List item four</li></ol></li><li>List item two</li><li>List item three</li><li>List item four</li></ol>
<h2>HTML Tags</h2>
<p>These are some tags:</p>
<p><strong>Address Tag</strong> 1 Infinite Loop<br>Cupertino, CA 95014<br>United States</p>
<p><strong>Anchor Tag (aka. Link)</strong></p>
<p>This is an example of a <a href="https://astro.build/">link</a>.</p>
<p><strong>Abbreviation Tag</strong></p>
<p>The abbreviation srsly stands for &#8220;seriously&#8221;.</p>
<p><strong>Acronym Tag (<em>deprecated in HTML5</em>)</strong></p>
<p>The acronym ftw stands for &#8220;for the win&#8221;.</p>
<p><strong>Big Tag</strong> (<em>deprecated in HTML5</em>)</p>
<p>These tests are a big deal, but this tag is no longer supported in HTML5.</p>
<p><strong>Cite Tag</strong></p>
<p>&#8220;Code is poetry.&#8221; &#8211;Automattic</p>
<p><strong>Code Tag</strong></p>
<p><strong>Delete Tag</strong></p>
<p>This tag will let you <del>strike out text</del>, but this tag is <em>recommended</em> supported in HTML5 (use the <code>&lt;s&gt;</code> instead).</p>
<p><strong>Emphasize Tag</strong></p>
<p>The emphasize tag should <em>italicize</em> <em>text</em>.</p>
<p><strong>Horizontal Rule Tag</strong></p>
<hr/>
<p>This sentence is following a <code>&lt;hr /&gt;</code> tag.</p>
<p><strong>Insert Tag</strong></p>
<p>This tag should denote <ins>inserted</ins> text.</p>
<p><strong>Keyboard Tag</strong></p>
<p>This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>
<p><strong>Preformatted Tag</strong></p>
<p>This tag is for preserving whitespace as typed, such as in poetry or ASCII art.</p>
<h2>The Road Not Taken</h2>
<p><strong>Quote Tag</strong> for short, inline quotes</p>
<p><q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer</p>
<p><strong>Strike Tag</strong> (<em>deprecated in HTML5</em>) and <strong>S Tag</strong></p>
<p>This tag shows <s>strike-through</s> <s>text</s>.</p>
<p><strong>Small Tag</strong></p>
<p>This tag shows <small>smaller text.</small></p>
<p><strong>Strong Tag</strong></p>
<p>This tag shows <strong>bold text.</strong></p>
<p><strong>Subscript Tag</strong></p>
<p>Getting our science styling on with H<sub>2</sub>O, which should push the &#8220;2&#8221; down.</p>
<p><strong>Superscript Tag</strong></p>
<p>Still sticking with science and Albert Einstein&#8217;s E = MC<sup>2</sup>, which should lift the 2 up.</p>
<p><strong>Teletype Tag </strong>(<em>obsolete in HTML5</em>)</p>
<p>This rarely used tag emulates teletype text, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>
<p><strong>Underline Tag</strong> <em>deprecated in HTML 4, re-introduced in HTML5 with other semantics</em></p>
<p>This tag shows underlined text.</p>
<p><strong>Variable Tag</strong></p>
<p>This allows you to denote <var>variables</var>.</p>