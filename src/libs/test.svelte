<div>
  <h1>HTML elements test page</h1>

  <p>
    This is a test page filled with common HTML elements. Its main purpose is to
    be used to provide visual feedback whilst building CSS systems and
    frameworks.
  </p>
  <p>
    The HTML elements are loosely categorized or grouped by function following
    the references from <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">MDN</a>
    and
    <a href="https://html.spec.whatwg.org/multipage/#toc-semantics">WHATWG</a>.
  </p>
  <p>Based on the following works:</p>
  <ul>
    <li>
      <a href="https://github.com/cbracco/html5-test-page"
        >@cbracco's HTML5 Test Page</a>
    </li>
    <li><a href="https://github.com/xz/elements">@xz's xz/elements</a></li>
  </ul>

  <nav>
    <h2>Table of contents</h2>
    <details>
      <summary>Table of contents</summary>
      <ul>
        <li>
          <a href="#sections">Sections</a>
          <ul>
            <li>
              <a href="#headings"
                ><code>h1</code>, <code>h2</code>, <code>h3</code>,
                <code>h4</code>, <code>h5</code>, <code>h6</code></a>
            </li>
            <li><a href="#address"><code>address</code></a></li>
          </ul>
        </li>
        <li>
          <a href="#grouping-content">Grouping content</a>
          <ul>
            <li><a href="#p"><code>p</code></a></li>
            <li><a href="#hr"><code>hr</code></a></li>
            <li><a href="#pre"><code>pre</code></a></li>
            <li><a href="#blockquote"><code>blockquote</code></a></li>
            <li><a href="#ol"><code>ol</code></a></li>
            <li><a href="#ul"><code>ul</code></a></li>
            <li><a href="#dl"><code>dl</code></a></li>
            <li><a href="#figure"><code>figure</code></a></li>
          </ul>
        </li>
        <li>
          <a href="#text-level-semantics">Text-level semantics</a>
          <ul>
            <li><a href="#a"><code>a</code></a></li>
            <li><a href="#em"><code>em</code></a></li>
            <li><a href="#strong"><code>strong</code></a></li>
            <li><a href="#small"><code>small</code></a></li>
            <li><a href="#s"><code>s</code></a></li>
            <li><a href="#cite"><code>cite</code></a></li>
            <li><a href="#q"><code>q</code></a></li>
            <li><a href="#dfn"><code>dfn</code></a></li>
            <li><a href="#abbr"><code>abbr</code></a></li>
            <li><a href="#ruby"><code>ruby</code></a></li>
            <li><a href="#time"><code>time</code></a></li>
            <li><a href="#code"><code>code</code></a></li>
            <li><a href="#var"><code>var</code></a></li>
            <li><a href="#samp"><code>samp</code></a></li>
            <li><a href="#kbd"><code>kbd</code></a></li>
            <li><a href="#sub"><code>sub</code></a></li>
            <li><a href="#sup"><code>sup</code></a></li>
            <li><a href="#i"><code>i</code></a></li>
            <li><a href="#b"><code>b</code></a></li>
            <li><a href="#u"><code>u</code></a></li>
            <li><a href="#mark"><code>mark</code></a></li>
            <li><a href="#bdi"><code>bdi</code></a></li>
            <li><a href="#bdo"><code>bdo</code></a></li>
            <li><a href="#wbr"><code>wbr</code></a></li>
          </ul>
        </li>
        <li>
          <a href="#edits">Edits</a>
          <ul>
            <li><a href="#del-ins"><code>del</code>, <code>ins</code></a></li>
          </ul>
        </li>
        <li>
          <a href="#embedded-content">Embedded content</a>
          <ul>
            <li><a href="#picture"><code>picture</code></a></li>
            <li><a href="#img"><code>img</code></a></li>
            <li><a href="#iframe"><code>iframe</code></a></li>
            <li><a href="#object"><code>object</code></a></li>
            <li><a href="#video"><code>video</code></a></li>
            <li><a href="#audio"><code>audio</code></a></li>
            <li><a href="#map-area"><code>map</code>, <code>area</code></a></li>
            <li><a href="#math"><code>math</code></a></li>
            <li><a href="#svg"><code>svg</code></a></li>
          </ul>
        </li>
        <li>
          <a href="#tabular-data">Tabular data</a>
          <ul>
            <li><a href="#table"><code>table</code></a></li>
          </ul>
        </li>
        <li>
          <a href="#forms">Forms</a>
          <ul>
            <li>
              <a href="#fieldset-legend"
                ><code>fieldset</code>, <code>legend</code></a>
            </li>
            <li><a href="#label"><code>label</code></a></li>
            <li><a href="#input"><code>input</code></a></li>
            <li><a href="#button"><code>button</code></a></li>
            <li>
              <a href="#select"
                ><code>select</code>, <code>option</code>,
                <code>optgroup</code></a>
            </li>
            <li><a href="#datalist"><code>datalist</code></a></li>
            <li><a href="#textarea"><code>textarea</code></a></li>
            <li><a href="#output"><code>output</code></a></li>
            <li><a href="#progress"><code>progress</code></a></li>
            <li><a href="#meter"><code>meter</code></a></li>
          </ul>
        </li>
        <li>
          <a href="#interactive-elements">Interactive elements</a>
          <ul>
            <li><a href="#details"><code>details</code></a></li>
            <li><a href="#dialog"><code>dialog</code></a></li>
          </ul>
        </li>
        <li>
          <a href="#scripting">Scripting</a>
          <ul>
            <li><a href="#canvas"><code>canvas</code></a></li>
          </ul>
        </li>
      </ul>
    </details>
  </nav>
</div>

<!-- Sections -->

<section id="sections">
  <h2>Sections</h2>

  <!-- h1, h2, h3, h4, h5, h6 -->
  <div id="headings">
    <h3>
      <span
        ><code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>,
        <code>h5</code>, <code>h6</code>:
      </span>
      <span>Section Headings</span>
    </h3>
    <div>
      <h1>Heading level 1</h1>
      <h2>Heading level 2</h2>
      <h3>Heading level 3</h3>
      <h4>Heading level 4</h4>
      <h5>Heading level 5</h5>
      <h6>Heading level 6</h6>
    </div>
  </div>

  <!-- address -->
  <div id="address">
    <h3>
      <span><code>address</code>: </span>
      <span>Contact Address</span>
    </h3>
    <div>
      <address>
        Infinite Loop,<br />
        Cupertino, CA<br />
        95014, USA
      </address>
    </div>
  </div>
</section>

<!-- Grouping content -->

<section id="grouping-content">
  <h2>Grouping content</h2>

  <!-- p -->
  <div id="p">
    <h3>
      <span><code>p</code>: </span>
      <span>Paragraph</span>
    </h3>
    <div>
      <p>
        A paragraph (from the Greek paragraphos, “to write beside” or “written
        beside”) is a self-contained unit of a discourse in writing dealing with
        a particular point or idea. A paragraph consists of one or more
        sentences. Though not required by the syntax of any language, paragraphs
        are usually an expected part of formal writing, used to organize longer
        prose.
      </p>
    </div>
  </div>

  <!-- hr -->
  <div id="hr">
    <h3>
      <span><code>hr</code>: </span>
      <span>Thematic Break (Horizontal Rule)</span>
    </h3>
    <div>
      <hr />
    </div>
  </div>

  <!-- pre -->
  <div id="pre">
    <h3>
      <span><code>pre</code>: </span>
      <span>Preformatted Text</span>
    </h3>
    <div>
      <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;title&gt;Hello World&lt;/title&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;h1&gt;Hello World.&lt;/h1&gt;
		&lt;p&gt;Lorem ipsum dolor sit amet.&lt;/p&gt;
	&lt;/body&gt;
&lt;/html&gt;</pre>
    </div>
  </div>

  <!-- blockquote -->
  <div id="blockquote">
    <h3>
      <span><code>blockquote</code>: </span>
      <span>Block Quotation</span>
    </h3>
    <div>
      <blockquote cite="https://en.wikipedia.org/wiki/Block_quotation">
        <p>
          A block quotation (also known as a long quotation or extract) is a
          quotation in a written document, that is set off from the main text as
          a paragraph, or block of text.
        </p>
        <p>
          It is typically distinguished visually using indentation and a
          different typeface or smaller size quotation. It may or may not
          include a citation, usually placed at the bottom.
        </p>
        <cite><a href="#!">Said no one, ever.</a></cite>
      </blockquote>
    </div>
  </div>

  <!-- ol -->
  <div id="ol">
    <h3>
      <span><code>ol</code>: </span>
      <span>Ordered List</span>
    </h3>
    <div>
      <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ol>
    </div>
  </div>

  <!-- ul -->
  <div id="ul">
    <h3>
      <span><code>ul</code>: </span>
      <span>Unordered List</span>
    </h3>
    <div>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
    </div>
  </div>

  <!-- dl -->
  <div id="dl">
    <h3>
      <span><code>dl</code>: </span>
      <span>Description List</span>
    </h3>
    <div>
      <dl>
        <dt>Term 1</dt>
        <dd>Description/definition for Term 1.</dd>

        <dt>Term 2</dt>
        <dd>Description/definition for Term 2.</dd>

        <dt>Term 3</dt>
        <dd>Description/definition for Term 3.</dd>
      </dl>
    </div>
  </div>

  <!-- figure -->
  <div id="figure">
    <h3>
      <span><code>figure</code>: </span>
      <span>Figure with Optional Caption</span>
    </h3>
    <div>
      <figure>
        <img src="https://placedog.net/1000?random" alt="a dog." />
        <figcaption>Here is a caption for this image.</figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- Text-level semantics -->

<section id="text-level-semantics">
  <h2>Text-level semantics</h2>

  <!-- a -->
  <div id="a">
    <h3>
      <span><code>a</code>: </span>
      <span>Anchor</span>
    </h3>
    <div>
      <p>This is <a href="#!">a text link</a>.</p>
    </div>
  </div>

  <!-- em -->
  <div id="em">
    <h3>
      <span><code>em</code>: </span>
      <span>Emphasis</span>
    </h3>
    <div>
      <p>The <em>em element</em> is used to add emphasis.</p>
    </div>
  </div>

  <!-- strong -->
  <div id="strong">
    <h3>
      <span><code>strong</code>: </span>
      <span>Strong Importance</span>
    </h3>
    <div>
      <p>
        The <strong>strong element</strong> is used to indicate strong importance.
      </p>
    </div>
  </div>

  <!-- small -->
  <div id="small">
    <h3>
      <span><code>small</code>: </span>
      <span>Side Comment</span>
    </h3>
    <div>
      <p>
        This text is normal. <small
          >This text is small; it is used to convey something that has very
          little prominence, that is not important, but still need to be here.</small>
      </p>
      <p>
        Fine/small print (copyright and legal text): <small
          >The content is licensed under a Creative Commons License.</small>
      </p>
      <p>Copyright information: <small>© 2021 Fancy Company</small></p>
    </div>
  </div>

  <!-- s -->
  <div id="s">
    <h3>
      <span><code>s</code>: </span>
      <span>Strikethrough</span>
    </h3>
    <div>
      <p><s>This text has a strikethrough</s>.</p>
    </div>
  </div>

  <!-- cite -->
  <div id="cite">
    <h3>
      <span><code>cite</code>: </span>
      <span>Citation</span>
    </h3>
    <div>
      <p>More information can be found in <cite>[ISO-0000]</cite>.</p>
    </div>
  </div>

  <!-- q -->
  <div id="q">
    <h3>
      <span><code>q</code>: </span>
      <span>Inline Quotation</span>
    </h3>
    <div>
      <p>
        Jeremy Keith said:
        <q
          cite="https://adactio.com/divs/11481#:~:text=you%20could%20open%20an%20HTML%20document%20from%20back%20then%20in%20a%20browser%20today"
          >You could open an HTML document from back then in a browser today</q
        >.
      </p>
      <p lang="fr">
        Antoine de Saint-Exupéry a dit :
        <q
          cite="https://www.superprof.es/blog/citas-y-proverbios-de-la-lengua-francesa/#:~:text=%E2%80%9C-,On%20ne%20voit%20bien%20qu%E2%80%99avec%20le%20coeur.%20L%E2%80%99essentiel%20est%20invisible%20pour%20les%20yeux.,-%E2%80%9D"
          >On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les
          yeux</q
        >.
      </p>
    </div>
  </div>

  <!-- dfn -->
  <div id="dfn">
    <h3>
      <span><code>dfn</code>: </span>
      <span>Definition</span>
    </h3>
    <div>
      <p>
        The HTML Definition element (<dfn>&lt;dfn&gt;</dfn>) is used to indicate
        the term being defined within the context of a definition phrase or
        sentence.
      </p>
    </div>
  </div>

  <!-- abbr -->
  <div id="abbr">
    <h3>
      <span><code>abbr</code>: </span>
      <span>Abbreviation</span>
    </h3>
    <div>
      <p><abbr title="HyperText Markup Language">HTML</abbr></p>
    </div>
  </div>

  <!-- ruby -->
  <div id="ruby">
    <h3>
      <span><code>ruby</code>: </span>
      <span>Ruby Annotation</span>
    </h3>
    <div>
      <ruby>
        漢 <rp>(</rp>
        <rt>Kan</rt>
        <rp>)</rp>
        字 <rp>(</rp>
        <rt>ji</rt>
        <rp>)</rp>
      </ruby>
    </div>
  </div>

  <!-- time -->
  <div id="time">
    <h3>
      <span><code>time</code>: </span>
      <span>(Date) Time</span>
    </h3>
    <div>
      <p>
        A date: Unix time began
        <time datetime="1970-01-01">Jan. 1, 1970</time>
      </p>
      <p>
        A complete date:
        <time datetime="1991-05-24T00:00:00">24 May 1991 0h 0m 0s</time>
      </p>
      <p>
        A relative date:
        <time datetime="1991-05-24">30 years ago from 2021</time>
      </p>
      <p>
        A time:
        <time datetime="08:00:00.0">8:00 am</time>
      </p>
      <p>
        A time zone:
        <time datetime="15:45-05:00">3:45pm in New York</time>
      </p>
      <p>
        A date and time:
        <time datetime="2020-11-04T19:00">Wednesday, Nov 4th at 7pm</time>
      </p>
    </div>
  </div>

  <!-- code -->
  <div id="code">
    <h3>
      <span><code>code</code>: </span>
      <span>Inline Code</span>
    </h3>
    <div>
      <p>Lorem ipsum <code>&lt;code&gt;</code> sit amet</p>
    </div>
  </div>

  <!-- var -->
  <div id="var">
    <h3>
      <span><code>var</code>: </span>
      <span>Variable</span>
    </h3>
    <div>
      <p>
        The <var>variable element</var>, such as <var>x</var> = <var>y</var>.
      </p>
    </div>
  </div>

  <!-- samp -->
  <div id="samp">
    <h3>
      <span><code>samp</code>: </span>
      <span>Sample Output</span>
    </h3>
    <div>
      <div>
        I was trying to boot my computer, but I got this hilarious message:<br />
        <samp>Keyboard not found. Press F1 to continue.</samp>
      </div>
    </div>
  </div>

  <!-- kbd -->
  <div id="kbd">
    <h3>
      <span><code>kbd</code>: </span>
      <span>Keyboard Input</span>
    </h3>
    <div>
      <p>
        Keyboard keys:
        <kbd>command</kbd>
        <kbd>Cmd</kbd>
        <kbd>⌘</kbd>
        <kbd>Shift</kbd>
        <kbd>⇧</kbd>
        <kbd>option</kbd>
        <kbd>Alt</kbd>
        <kbd>⌥</kbd>
        <kbd>control</kbd>
        <kbd>Ctrl</kbd>
        <kbd>⌃</kbd>
        <kbd>Caps Lock</kbd>
        <kbd>⇪</kbd>
        <kbd>Fn</kbd>
        <kbd>F1</kbd>
      </p>
    </div>
  </div>

  <!-- sub -->
  <div id="sub">
    <h3>
      <span><code>sub</code>: </span>
      <span>Subscript</span>
    </h3>
    <div>
      <p>Footnotes: Lorem<sub>1</sub></p>
      <p>
        Math variables: <var>x<sub>1</sub></var>,...,<var>x<sub>n</sub></var>
      </p>
      <p>Chemical formulas: H<sub>2</sub>O</p>
    </div>
  </div>

  <!-- sup -->
  <div id="sup">
    <h3>
      <span><code>sup</code>: </span>
      <span>Superscript</span>
    </h3>
    <div>
      <p>Exponents: <var>E</var>=<var>m</var><var>c</var><sup>2</sup></p>
      <p>Superior lettering: Lorem ipsum<sup>®</sup></p>
      <p>Ordinal numbers: 5<sup>th</sup></p>
    </div>
  </div>

  <!-- i -->
  <div id="i">
    <h3>
      <span><code>i</code>: </span>
      <span>Idiomatic Text</span>
    </h3>
    <div>
      <p>The <i>i element</i> is text that is offset from the normal text.</p>
    </div>
  </div>

  <!-- b -->
  <div id="b">
    <h3>
      <span><code>b</code>: </span>
      <span>Bring Attention To</span>
    </h3>
    <div>
      <p>
        The <b>b element</b> is stylistically different text from normal text, without
        any special importance.
      </p>
    </div>
  </div>

  <!-- u -->
  <div id="u">
    <h3>
      <span><code>u</code>: </span>
      <span>Unarticulated Annotation (Underline)</span>
    </h3>
    <div>
      <p>
        The <u>u element</u> is text with an unarticulated, though explicitly rendered,
        non-textual annotation.
      </p>
    </div>
  </div>

  <!-- mark -->
  <div id="mark">
    <h3>
      <span><code>mark</code>: </span>
      <span>Mark Text</span>
    </h3>
    <div>
      <p>The <mark>mark element</mark> indicates a highlight.</p>
    </div>
  </div>

  <!-- bdi -->
  <div id="bdi">
    <h3>
      <span><code>bdi</code>: </span>
      <span>Bidirectional Isolate</span>
    </h3>
    <div>
      <p><bdi>اَلأَعْشَى</bdi> - 1st place</p>
      <p><bdi>Jerry Cruncher</bdi> - 2nd place</p>
    </div>
  </div>

  <!-- bdo -->
  <div id="bdo">
    <h3>
      <span><code>bdo</code>: </span>
      <span>Bidirectional Text Override</span>
    </h3>
    <div>
      <p><bdo dir="rtl">This text will go right to left.</bdo></p>
    </div>
  </div>

  <!-- wbr -->
  <div id="wbr">
    <h3>
      <span><code>wbr</code>: </span>
      <span>Line Break Opportunity</span>
    </h3>
    <div style="inline-size: 15em; overflow: hidden; resize: horizontal;">
      <p>Fernstraßenbauprivatfinanzierungsgesetz</p>
      <p>Fernstraßen<wbr />bau<wbr />privat<wbr />finanzierungs<wbr />gesetz</p>
      <p>Fernstraßen&shy;bau&shy;privat&shy;finanzierungs&shy;gesetz</p>
    </div>
  </div>
</section>

<!-- Edits -->

<section id="edits">
  <h2>Edits</h2>

  <!-- del, ins -->
  <div id="del-ins">
    <h3>
      <span><code>del</code>, <code>ins</code>: </span>
      <span>Deleted and Inserted Text</span>
    </h3>
    <div>
      <p>
        <del>This text is deleted</del> and <ins>This text is inserted</ins>.
      </p>
    </div>
  </div>
</section>

<!-- Embedded content -->

<section id="embedded-content">
  <h2>Embedded content</h2>

  <!-- picture -->
  <div id="picture">
    <h3>
      <span><code>picture</code>: </span>
      <span>Picture</span>
    </h3>
    <div>
      <picture>
        <source
          srcset="https://placedog.net/500?random"
          media="(max-width: 500px)" />
        <img src="https://placedog.net/1000?random" alt="a dog." />
      </picture>
    </div>
  </div>

  <!-- img -->
  <div id="img">
    <h3>
      <span><code>img</code>: </span>
      <span>Image Embed</span>
    </h3>
    <div>
      <img src="https://placedog.net/1000?random" alt="a dog." />
    </div>
  </div>

  <!-- iframe -->
  <div id="iframe">
    <h3>
      <span><code>iframe</code>: </span>
      <span>Inline Frame</span>
    </h3>
    <div>
      <iframe src="index.html " title=""
        >If you see this, your browser does not support the iframe element.</iframe>
    </div>
  </div>

  <!-- object -->
  <div id="object">
    <h3>
      <span><code>object</code>: </span>
      <span>External Object</span>
    </h3>
    <div>
      <object
        type="image/jpeg"
        title=""
        data="https://placedog.net/1000?random" />
    </div>
  </div>

  <!-- video -->
  <div id="video">
    <h3>
      <span><code>video</code>: </span>
      <span>Video Embed</span>
    </h3>
    <div>
      <video width="300" height="200">
        <source src="" type="video/mp4" />
        <track src="" kind="captions" srclang="en" label="english_captions" />
      </video>
    </div>
  </div>

  <!-- audio -->
  <div id="audio">
    <h3>
      <span><code>audio</code>: </span>
      <span>Embed Audio</span>
    </h3>
    <div>
      <audio src="assets/audio.mp3" controls />
    </div>
  </div>

  <!-- map-area -->
  <div id="map-area">
    <h3>
      <span><code>map</code>, <code>area</code>: </span>
      <span>Image Map Area</span>
    </h3>
    <div>
      <img
        src="assets/world-continents.png"
        alt="World continents"
        width="320"
        height="160"
        usemap="#world-continents" />
      <map name="world-continents">
        <area
          title="North America"
          aria-label=""
          href="https://en.wikipedia.org/wiki/North_America"
          shape="poly"
          coords="48,89,67,69,77,49,140,0,68,0,6,10,4,31,16,69" />
        <area
          title="South America"
          aria-label=""
          href="https://en.wikipedia.org/wiki/South_America"
          shape="poly"
          coords="48,88,61,74,119,99,95,160,66,159" />
        <area
          title="Europe"
          aria-label=""
          href="https://en.wikipedia.org/wiki/Europe"
          shape="poly"
          coords="124,49,145,46,158,50,187,43,198,6,146,1,115,21" />
        <area
          title="Africa"
          aria-label=""
          href="https://en.wikipedia.org/wiki/Africa"
          shape="poly"
          coords="121,53,140,47,169,51,186,77,196,80,188,137,156,136,138,97,118,86" />
        <area
          title="Asia"
          aria-label=""
          href="https://en.wikipedia.org/wiki/Asia"
          shape="poly"
          coords="166,50,184,77,201,74,215,91,258,108,263,87,283,74,297,8,192,3,191,29,187,46,170,42" />
        <area
          title="Australia"
          aria-label=""
          href="https://en.wikipedia.org/wiki/Australia_(continent)"
          shape="poly"
          coords="257,107,263,85,314,89,316,137,294,151,249,132,248,114" />
      </map>
    </div>
  </div>

  <!-- math -->
  <div id="math">
    <h3>
      <span><code>math</code>: </span>
      <span>MathML</span>
    </h3>
    <div>
      <math>
        <mrow>
          <mrow>
            <msup>
              <mi>a</mi>
              <mn>2</mn>
            </msup>
            <mo>+</mo>
            <msup>
              <mi>b</mi>
              <mn>2</mn>
            </msup>
          </mrow>
          <mo>=</mo>
          <msup>
            <mi>c</mi>
            <mn>2</mn>
          </msup>
        </mrow>
      </math>
    </div>
  </div>

  <!-- svg -->
  <div id="svg">
    <h3>
      <span><code>svg</code>: </span>
      <span>Scalable Vector Graphics</span>
    </h3>
    <div>
      <svg width="100px" height="100px">
        <circle cx="100" cy="100" r="100" fill="#1fa3ec" />
      </svg>
    </div>
  </div>
</section>

<!-- Tabular data -->

<section id="tabular-data">
  <h2>Tabular data</h2>

  <!-- table -->
  <div id="table">
    <h3>
      <span><code>table</code>: </span>
      <span>Table</span>
    </h3>
    <div>
      <table>
        <caption>Table Caption</caption>
        <thead>
          <tr>
            <th>Table Head Cell 1</th>
            <th>Table Head Cell 2</th>
            <th>Table Head Cell 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table Body Cell 1</td>
            <td>Table Body Cell 2</td>
            <td>Table Body Cell 3</td>
          </tr>
          <tr>
            <td>Table Body Cell 1</td>
            <td>Table Body Cell 2</td>
            <td>Table Body Cell 3</td>
          </tr>
          <tr>
            <td>Table Body Cell 1</td>
            <td>Table Body Cell 2</td>
            <td>Table Body Cell 3</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Table Footer Cell 1</th>
            <th>Table Footer Cell 2</th>
            <th>Table Footer Cell 3</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</section>

<!-- Forms -->

<section id="forms">
  <h2>Forms</h2>

  <!-- fieldset, legend -->
  <div id="fieldset-legend">
    <h3>
      <span><code>fieldset</code>, <code>legend</code>: </span>
      <span>Fieldset Set, Legend</span>
    </h3>
    <div>
      <fieldset>
        <legend>Field Set Legend</legend>
      </fieldset>
    </div>
  </div>

  <!-- label -->
  <div id="label">
    <h3>
      <span><code>label</code>: </span>
      <span>Input Label</span>
    </h3>
    <div>
      <label for="form-input-label">Label</label>
      <input type="text" id="form-input-label" />
    </div>
  </div>

  <!-- input -->
  <div id="input">
    <h3>
      <span><code>input</code>: </span>
      <span>Input (Form Input)</span>
    </h3>

    <div>
      <!-- type="hidden" -->
      <div>
        <label for="form-input-hidden">hidden</label>
        <input
          type="hidden"
          id="form-input-hidden"
          name="hidden-name"
          value="hidden-value" />
      </div>

      <!-- type="text" -->
      <div>
        <label for="form-input-text">text</label>
        <input type="text" id="form-input-text" placeholder="Placeholder" />
      </div>

      <!-- type="search" -->
      <div>
        <label for="form-input-search">search</label>
        <input type="search" id="form-input-search" placeholder="Placeholder" />
      </div>

      <!-- type="tel" -->
      <div>
        <label for="form-input-tel">tel</label>
        <input type="tel" id="form-input-tel" placeholder="Placeholder" />
      </div>

      <!-- type="url" -->
      <div>
        <label for="form-input-url">url</label>
        <input type="url" id="form-input-url" placeholder="Placeholder" />
      </div>

      <!-- type="email" -->
      <div>
        <label for="form-input-email">email</label>
        <input type="email" id="form-input-email" placeholder="Placeholder" />
      </div>

      <!-- type="password" -->
      <div>
        <label for="form-input-password">password</label>
        <input
          type="password"
          id="form-input-password"
          placeholder="Placeholder" />
      </div>

      <!-- type="date" -->
      <div>
        <label for="form-input-date">date</label>
        <input type="date" id="form-input-date" value="1970-01-01" />
      </div>

      <!-- type="month" -->
      <div>
        <label for="form-input-month">month</label>
        <input type="month" id="form-input-month" value="1970-01" />
      </div>

      <!-- type="week" -->
      <div>
        <label for="form-input-week">week</label>
        <input type="week" id="form-input-week" value="1970-W01" />
      </div>

      <!-- type="time" -->
      <div>
        <label for="form-input-time">time</label>
        <input type="time" id="form-input-time" min="09:00" max="18:00" />
      </div>

      <!-- type="datetime-local" -->
      <div>
        <label for="form-input-datetime-local">datetime-local</label>
        <input
          type="datetime-local"
          id="form-input-datetime-local"
          value="1970-01-01T00:00" />
      </div>

      <!-- type="number" -->
      <div>
        <label for="form-input-number">number</label>
        <input type="number" id="form-input-number" placeholder="Placeholder" />
      </div>

      <!-- type="range" -->
      <div>
        <label for="form-input-range">range</label>
        <input type="range" id="form-input-range" />
      </div>

      <!-- type="color" -->
      <div>
        <label for="form-input-color">color</label>
        <input type="color" id="form-input-color" />
      </div>

      <!-- type="checkbox" -->
      <div>
        <b>checkbox</b>
        <div>
          <label for="form-input-checkbox-1">
            <input
              type="checkbox"
              id="form-input-checkbox-1"
              name="checkbox-1-name"
              value="checkbox-1-value"
              checked />
            Choice 1
          </label>
          <label for="form-input-checkbox-2">
            <input
              type="checkbox"
              id="form-input-checkbox-2"
              name="checkbox-2-name"
              value="checkbox-2-value" />
            Choice 2
          </label>
          <label for="form-input-checkbox-3">
            <input
              type="checkbox"
              id="form-input-checkbox-3"
              name="checkbox-3-name"
              value="checkbox-3-value" />
            Choice 3
          </label>
        </div>
      </div>

      <!-- type="radio" -->
      <div>
        <b>radio</b>
        <div>
          <label for="form-input-radio-1">
            <input
              type="radio"
              id="form-input-radio-1"
              name="radio-name"
              value="radio-1-value" />
            Choice A
          </label>
          <label for="form-input-radio-2">
            <input
              type="radio"
              id="form-input-radio-2"
              name="radio-name"
              value="radio-2-value" />
            Choice B
          </label>
          <label for="form-input-radio-3">
            <input
              type="radio"
              id="form-input-radio-3"
              name="radio-name"
              value="radio-3-value" />
            Choice C
          </label>
        </div>
      </div>

      <!-- type="file" -->
      <div>
        <label for="form-input-file-single">file</label>
        <input type="file" id="form-input-file-single" accept="" />
      </div>

      <!-- type="file" (multiple) -->
      <div>
        <label for="form-input-file-multiple">file (multiple)</label>
        <input type="file" id="form-input-file-multiple" multiple accept="" />
      </div>

      <!-- type="submit" -->
      <div>
        <label for="form-input-submit">submit</label>
        <input type="submit" id="form-input-submit" />
      </div>

      <!-- type="image" -->
      <div>
        <label for="form-input-image">image</label>
        <input
          id="form-input-image"
          src="https://via.placeholder.com/150x48/e0e0e0/212121.png?text=INPUT+TYPE+IMAGE" />
      </div>

      <!-- type="reset" -->
      <div>
        <label for="form-input-reset">reset</label>
        <input type="reset" id="form-input-reset" />
      </div>

      <!-- type="button" -->
      <div>
        <label for="form-input-button">button</label>
        <input
          type="button"
          id="form-input-button"
          value="input type='button'" />
      </div>
    </div>
  </div>

  <!-- button -->
  <div id="button">
    <h3>
      <span><code>button</code>: </span>
      <span>Button</span>
    </h3>

    <div>
      <!-- type="button" -->
      <div>
        <button type="button">&lt;button type=button&gt;</button>
      </div>

      <!-- type="submit" -->
      <div>
        <button type="submit">&lt;button type=submit&gt;</button>
      </div>

      <!-- type="reset" -->
      <div>
        <button type="reset">&lt;button type=reset&gt;</button>
      </div>

      <!-- disabled -->
      <div>
        <button disabled>&lt;button disabled&gt;</button>
      </div>

      <!-- aria-busy -->
      <div>
        <button aria-busy="true">&lt;button aria-busy&gt;</button>
      </div>

      <!-- aria-disabled -->
      <div>
        <button aria-disabled="true">&lt;button aria-disabled&gt;</button>
      </div>

      <!-- aria-hidden -->
      <div>
        <button aria-hidden="true">&lt;button aria-hidden&gt;</button>
      </div>

      <!-- hidden -->
      <div>
        <button hidden>&lt;button hidden&gt;</button>
      </div>

      <!-- aria-hidden=false hidden -->
      <div>
        <button aria-hidden="false" hidden
          >&lt;aria-hidden=false hidden&gt;</button>
      </div>
    </div>
  </div>

  <!-- select -->
  <div id="select">
    <h3>
      <span><code>select</code>: </span>
      <span>Select</span>
    </h3>

    <div>
      <!-- simple -->
      <div>
        <label for="form-select-simple">Select</label>
        <select id="form-select-simple" name="select-simple">
          <option value="select-option-1">Option 1</option>
          <option value="select-option-2">Option 2</option>
          <option value="select-option-3">Option 3</option>
        </select>
      </div>

      <!-- optgroup -->
      <div>
        <label for="form-select-optgroup"
          >Select with <code>optgroup</code></label>
        <select id="form-select-optgroup" name="select-optgroup">
          <optgroup label="Group 1">
            <option value="select-optgroup-1-option-1">Option A</option>
            <option value="select-optgroup-1-option-2">Option B</option>
            <option value="select-optgroup-1-option-3">Option C</option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="select-optgroup-2-option-1">Option D</option>
            <option value="select-optgroup-2-option-2">Option E</option>
            <option value="select-optgroup-2-option-3">Option F</option>
          </optgroup>
        </select>
      </div>

      <!-- multiple -->
      <div>
        <label for="form-select-multiple"
          >Select with <code>multiple</code></label>
        <select id="form-select-multiple" multiple name="select-multiple">
          <option value="select-multiple-option-1">Option 1</option>
          <option value="select-multiple-option-2">Option 2</option>
          <option value="select-multiple-option-3">Option 3</option>
        </select>
      </div>
    </div>
  </div>

  <!-- datalist -->
  <div id="datalist">
    <h3>
      <span><code>datalist</code>: </span>
      <span>Data List</span>
    </h3>
    <div>
      <label for="form-datalist">Data List</label>
      <input
        list="datalist-options"
        id="form-datalist"
        name="datalist"
        placeholder="Placeholder" />
      <datalist id="datalist-options">
        <option value="Option 1" /><option value="Option 2" /><option
          value="Option 3" /><option value="Option 4" /><option
          value="Option 5" /></datalist>
    </div>
  </div>

  <!-- textarea -->
  <div id="textarea">
    <h3>
      <span><code>textarea</code>: </span>
      <span>Textarea</span>
    </h3>
    <div>
      <label for="form-textarea">Textarea</label>
      <textarea id="form-textarea" placeholder="Placeholder" />
    </div>
  </div>

  <!-- output -->
  <div id="output">
    <h3>
      <span><code>output</code>: </span>
      <span>Output</span>
    </h3>
    <div>
      <form>
        <input type="number" name="a" value="2" />
        +
        <input type="number" name="b" value="2" />
        =
        <output name="result" for="a b">4</output>
      </form>
    </div>
  </div>

  <!-- progress -->
  <div id="progress">
    <h3>
      <span><code>progress</code>: </span>
      <span>Progress Indicator</span>
    </h3>
    <div>
      <label for="progress-1">No value:</label>
      <progress id="progress-2">No value</progress>

      <label for="progress-2">Value 0:</label>
      <progress id="progress-2" value="0">0</progress>

      <label for="progress-3">Value 0.5:</label>
      <progress id="progress-3" value="0.5">0.5</progress>

      <label for="progress-4">Value 1:</label>
      <progress id="progress-4" value="1">1</progress>

      <label for="progress-5">Value 75, max 100:</label>
      <progress id="progress-5" max="100" value="75">75%</progress>
    </div>
  </div>

  <!-- meter -->
  <div id="meter">
    <h3>
      <span><code>meter</code>: </span>
      <span>Meter</span>
    </h3>
    <div>
      <label for="fuel-1">Low level:</label>
      <meter
        id="fuel-1"
        min="0"
        max="100"
        low="33"
        high="66"
        optimum="80"
        value="32">at 32/100</meter>

      <label for="fuel-2">Medium level:</label>
      <meter
        id="fuel-2"
        min="0"
        max="100"
        low="33"
        high="66"
        optimum="80"
        value="50">at 50/100</meter>

      <label for="fuel-3">High level:</label>
      <meter
        id="fuel-3"
        min="0"
        max="100"
        low="33"
        high="66"
        optimum="80"
        value="66">at 66/100</meter>

      <label for="fuel-4">Optimum level:</label>
      <meter
        id="fuel-4"
        min="0"
        max="100"
        low="33"
        high="66"
        optimum="80"
        value="90">at 90/100</meter>
    </div>
  </div>
</section>

<!-- Interactive elements -->

<section id="interactive-elements">
  <h2>Interactive elements</h2>

  <!-- details -->
  <div id="details">
    <h3>
      <span><code>details</code>: </span>
      <span>Details disclosure or Disclosure widget</span>
    </h3>
    <div>
      <div>
        <h4>No <code>summary</code>:</h4>
        <details>
          <p>Something small enough to escape casual notice.</p>
        </details>
      </div>

      <div>
        <h4>With <code>summary</code>:</h4>
        <details>
          <summary>System Requirements</summary>
          <p>
            Requires a computer running an operating system. The computer must
            have some memory and ideally some kind of long-term storage. An
            input device as well as some form of output device is recommended.
          </p>
        </details>
      </div>
    </div>
  </div>

  <!-- dialog -->
  <div id="dialog">
    <h3>
      <span><code>dialog</code>: </span>
      <span>Dialog</span>
    </h3>
    <div>
      <dialog open>
        <p>Greetings, one and all!</p>
      </dialog>
    </div>
  </div>
</section>

<!-- Scripting -->

<section>
  <h2>Scripting</h2>

  <!-- canvas -->
  <div>
    <h3>
      <span><code>canvas</code>: </span>
      <span>Graphics Canvas</span>
    </h3>
    <div>
      <canvas>Canvas</canvas>
    </div>
  </div>
</section>
