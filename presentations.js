const presentations = [
  {
    "pres": "veytsman-closing",
    "author": [
      "Boris Veytsman"
    ],
    "title": "Conference closing",
    "timezone": "-0700",
    "time": "2022-07-24T21:15:00Z",
    "abstract": "Closing by the president. See you next year!"
  },
  {
    "pres": "matteson-adapt",
    "author": [
      "Steven Matteson"
    ],
    "title": "Type design: Catching up to the past",
    "timezone": "-0600",
    "time": "2022-07-24T20:30:00Z",
    "abstract": "The typographer’s goal is to provide the best possible reading experience for the reader. Thirty years of disruptive technologies have made this a greater challenge despite the overwhelming number of type designs available to us. Steve Matteson will give several historical and contemporary examples where fonts have been adapted or designed to meet constantly changing technological demands.",
    "videos": [
      "https://youtu.be/aB3xs9U2IP0"
    ]
  },
  {
    "pres": "park-music",
    "author": [
      "Christopher Park",
      "Emily Park"
    ],
    "title": "Musical composition typesetting",
    "timezone": "-0700",
    "time": "2022-07-24T19:45:00Z",
    "abstract": "We will explain the typesetting of a musical composition using the <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> markup."
  },
  {
    "pres": "spicer-chm",
    "author": [
      "Dag Spicer"
    ],
    "title": "A walk through 2,000 years of computer history",
    "timezone": "-0700",
    "time": "2022-07-24T19:00:00Z",
    "abstract": "Computer History Museum senior curator Dag Spicer takes us on a walk through computing history, from the Antikythera Mechanism to the first Google server.  <br /><br /> Dag Spicer is an electrical engineer and historian of science and technology. He began working at the Museum in 1996 and has built the Museum’s permanent collection into the largest archive of computers, software, media, oral histories, and ephemera in the world. Dag has given hundreds of interviews on computer history and related topics to major news outlets such as <em>The Economist</em>, <em>The New York Times</em>, <span class=\"sm-caps\">NPR</span>, <span class=\"sm-caps\">CBS</span>, <span class=\"sm-caps\">VOA</span>, and has appeared on numerous television programs including <em>Mysteries at the Museum</em> and <em><span class=\"sm-caps\">CBS</span> Sunday Morning</em>."
  },
  {
    "pres": "break",
    "time": "2022-07-24T18:00:00Z",
    "title": "Break, 1 hour"
  },
  {
    "pres": "lees-miller-interview",
    "author": [
      "John Lees-Miller"
    ],
    "title": "In conversation with Paulo Ney de Souza",
    "timezone": "+0100",
    "time": "2022-07-24T17:15:00Z",
    "abstract": "John Lees-Miller, the CTO of Overleaf will be interviewed live by Paulo Ney de Souza, and you will be able to join the coversation."
  },
  {
    "pres": "goswami-numpy",
    "author": [
      "Rohit Goswami"
    ],
    "title": "<span class=\"tex\">T<span>e</span>X</span> documentation and CI constraints for NumPy",
    "timezone": "0000",
    "time": "2022-07-24T16:30:00Z",
    "abstract": "<span class=\"tex\">T<span>e</span>X</span> and <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> have been used for offline documentation of software packages and are supported by several auto-documenting systems including <tt>doxygen</tt>, <tt>sphinx</tt> and <tt>f2py</tt>. Often, documentation markup languages like Re<span class=\"sm-caps\">ST</span> or Markdown will support a subset of <span class=\"tex\">T<span>e</span>X</span> commands for various output formats (e.g., MathJax/KaTeX for <span class=\"sm-caps\">HTML</span>).  <br /><br /> With the rise of virtual machines for continuous integration, along with a renewed focus on documenting code, the time taken for compiling offline documentation (typically <span class=\"sm-caps\">PDF</span> files) from <span class=\"tex\">T<span>e</span>X</span> sources has become a bottleneck, and some projects (e.g., SciPy) have discontinued the generation of <span class=\"sm-caps\">PDF</span> files altogether. Alternatives have been suggested, e.g. offline <span class=\"sm-caps\">HTML</span>, web-<span class=\"sm-caps\">PDF</span>s, etc. and will be covered briefly.  <br /><br /> In this talk, the main challenges and their mitigation strategies will be discussed including Sphinx <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> generation, styling, methods to reduce documentation size and automated file-splitting with the aim of preventing more projects from moving away from <span class=\"tex\">T<span>e</span>X</span>-based <span class=\"sm-caps\">PDF</span>s. The focus will be on the NumPy <span class=\"tex\">T<span>e</span>X</span> <span class=\"sm-caps\">CI</span> documentation workflow, but will be generally applicable to most Python projects."
  },
  {
    "pres": "fine-access",
    "author": [
      "Jonathan Fine"
    ],
    "title": "Access and accessibility",
    "timezone": "+0100",
    "time": "2022-07-24T15:45:00Z",
    "abstract": "The <a href=\"https://www.loc.gov/nls/about/organization/laws-regulations/copyright-law-amendment-1996-pl-104-197/\">Chafee Amendment</a> to <span class=\"sm-caps\">US</span> copyright law “allows authorized entities to reproduce or distribute copies or phonorecords of previously published literary or musical works in accessible formats exclusively for use by print-disabled persons.” <br /><br /> This wonderful legal exemption to copyright nicely illustrates the relation between access (here to print works) and accessibility (here production of phonorecords, i.e., audiobooks). Here’s another illustration.  <br /><br /> Jonathan Godfrey, a blind Senior Lecturer in Statistics in New Zealand wrote to the Blind Math list “I used to use <span class=\"tex\">T<span>e</span>X</span>4ht as my main tool for getting <span class=\"sm-caps\">HTML</span> from <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> source. This was and probably still is, an excellent tool. How much traction does it get though? Not much. Why?  I don’t know, but my current theory is that tools that aren’t right under people’s noses or automatically applied in the background just don’t get as much traction.” (<a href=\"https://nfbnet.org/pipermail/blindmath_nfbnet.org/2021-January/009641.html\">Reference</a>) <br /><br /> Jonathan Godfrey also wrote to the BlindMath list “Something has to change in the very way people use <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> if we are ever to get truly accessible pdf documents. I’ve laboured the point that we need access to information much more than we need access to a specific file format, and I’ll keep doing so. [...] I do think a fundamental shift in thinking about how we get access to information is required across most <span class=\"sm-caps\">STEM</span> disciplines.  (<a href=\"https://nfbnet.org/pipermail/blindmath_nfbnet.org/2021-March/009778.html\">Reference</a>) <br /><br /> This talk looks at the experience of visually impaired <span class=\"sm-caps\">STEM</span> students and professionals, from both the point of view of easy access to suitable inputs and tools and also the generation of accessible outputs, as pioneered and enabled by the Chafee Amendment."
  },
  {
    "pres": "ohri-mathtrans",
    "author": [
      "Aditya Ohri",
      "Tanya Schmah"
    ],
    "title": "Machine translation of mathematical text",
    "timezone": "-0400",
    "time": "2022-07-24T15:00:00Z",
    "links": [
      "https://doi.org/10.1109/ACCESS.2021.3063715"
    ],
    "abstract": "We present a machine translation system, the PolyMath Translator, for <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> documents containing mathematical text. The system combines a <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> parser, tokenization of math and labels, a deep learning Transformer model trained on mathematical and other text, and the Google Translate <span class=\"sm-caps\">API</span> with a custom glossary. Ablation testing shows that math tokenization and the Transformer model each significantly improve translation quality, while Google Translate is used as a backup when the Transformer does not have confidence in its translation. For <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> parsing, we have used the pandoc document converter, while our latest development version instead uses the TexSoup package. We will describe the system, show examples, and discuss future directions."
  },
  {
    "pres": "break",
    "time": "2022-07-24T14:00:00Z",
    "title": "Break, 1 hour"
  },
  {
    "pres": "thurman-yex",
    "author": [
      "Marnanel Thurman"
    ],
    "title": "Building a <span class=\"tex\">T<span>e</span>X</span>-alike in Python",
    "timezone": "+0100",
    "time": "2022-07-24T13:15:00Z",
    "abstract": "<tt>yex</tt> is an implementation of the core <span class=\"tex\">T<span>e</span>X</span> system in pure Python. In this talk I shall give an overview of its development, the challenges faced, and possible future directions for the project."
  },
  {
    "pres": "wright-keyval",
    "author": [
      "Joseph Wright"
    ],
    "title": "Key—value setting handling in the kernel",
    "timezone": "+0100",
    "time": "2022-07-24T12:30:00Z",
    "abstract": "<span class=\"latex\">L<span>a</span>T<span>e</span>X</span> 2ε introduced class and package setting in the optional arguments to <tt>documentclass</tt> and <tt>usepackage</tt>. To date, these were designed to handle simple keyword-based option. Over time, packages have extended the mechanism to accept key–value (keyval) arguments. Recent work by the team brings keyval handling into the kernel. This brings the added benefit of allowing repeated package loading to avoid clashes. Here, I will look briefly at the background, then explore how to use the new mechanism in package development."
  },
  {
    "pres": "fischer-spotcolor",
    "author": [
      "Ulrike Fischer"
    ],
    "title": "Using spot colors with <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>",
    "timezone": "+0200",
    "time": "2022-07-24T11:45:00Z",
    "abstract": "In this talk I recount some practical experiences with spot colors I gained while working on the third edition of <em>The <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> Companion</em>.  <br /><br /> I describe what spot colors are, how to use them for text and (Ti<i>k</i>Z) graphics, how to mix them properly, and some of the pitfalls we found and how we worked around them."
  },
  {
    "pres": "sundqvist-lmtx-math",
    "author": [
      "Mikael P. Sundqvist"
    ],
    "title": "Pushing math forward with <tt>luametatex</tt> and Con<span class=\"tex\">T<span>e</span>X</span>t",
    "timezone": "+0200",
    "time": "2022-07-24T11:00:00Z",
    "abstract": "I will present an ongoing project with Hans Hagen with the challenging goal of improving the quality of mathematical typesetting, and to make both the input and output of math cleaner and more structured. Among the many enhancements, we mention here the introduction of new atom classes that has given a better control over the details, and the unboxing of fenced material, that together with improved line-breaking and more flexible multiline display math has created a coherent way to produce formulas that split over lines."
  },
  {
    "pres": "break",
    "time": "2022-07-24T10:00:00Z",
    "title": "Break, 1 hour"
  },
  {
    "pres": "hufflen-extract",
    "author": [
      "Jean-Michel Hufflen"
    ],
    "title": "Extracting information from (La)<span class=\"tex\">T<span>e</span>X</span> source files",
    "timezone": "+0200",
    "time": "2022-07-24T09:15:00Z",
    "abstract": "We present some tools that allow us to parse all or part of All<span class=\"tex\">T<span>e</span>X</span> source files and process suitable information. For example, we can use them to extract some metadata of a document. These tools have been developed in the Scheme functional programming language. Using them only requires basic knowledge of functional programming and Scheme. Besides, these tools could be easily implemented using a strongly typed functional programming language, such as Standard <span class=\"sm-caps\">ML</span> or Haskell."
  },
  {
    "pres": "mueller-stex3",
    "author": [
      "Dennis Müller",
      "Michael Kohlhase"
    ],
    "authorascii": "Dennis Muller,Michael Kohlhase",
    "title": "s<span class=\"tex\">T<span>e</span>X</span>3—A <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>-based ecosystem for semantic/active mathematical documents",
    "timezone": "+0200",
    "time": "2022-07-24T08:30:00Z",
    "links": [
      "https://gl.mathhub.info/MiKoMH/talks/-/blob/main/source/dmueller/talks/tug22.tex"
    ],
    "abstract": "We report on s<span class=\"tex\">T<span>e</span>X</span>3– a complete redesign and reimplementation (using <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>3) from the ground up of the s<span class=\"tex\">T<span>e</span>X</span> ecosystem for semantic markup of mathematical documents. Specifically, we present: </p> <div class=\"row\"> <div class=\"column\"> <ol> <li> The s<span class=\"tex\">T<span>e</span>X</span> package that allows declaring semantic macros and provides a module system for organizing and importing semantic macros using logical identifiers. Semantic macros allow for annotating arbitrary LaTeX fragments, particularly symbolic notations and formulae, with their functional structure and formal semantics while keeping their presentation/layout intact. The module system induces a “theory graph”-structure on mathematical concepts, reflecting their dependencies and other semantic relations. </li> <li> The Rus<span class=\"tex\">T<span>e</span>X</span> system, an implementation of the core <span class=\"tex\">T<span>e</span>X</span> engine in Rust. Generally Rus<span class=\"tex\">T<span>e</span>X</span> allows for converting arbitrary <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> documents to <span class=\"sm-caps\">XHTML</span>. For s<span class=\"tex\">T<span>e</span>X</span>3 documents, these are enriched with semantic annotations based on the flexiformal <span class=\"sm-caps\">OMD</span>oc ontology. </li> <li> An <span class=\"sm-caps\">MMT</span> integration: The Rus<span class=\"tex\">T<span>e</span>X</span>-generated <span class=\"sm-caps\">XHTML</span> can be imported and served by the <span class=\"sm-caps\">MMT</span> system for semantically-informed knowledge management services, e.g., linking symbols in formulae to their definition or “guided tour” mini-courses for any (semantically annotated) mathematical concept/object. </li> </ol> </div> </div> <p>Generally, s<span class=\"tex\">T<span>e</span>X</span>3 documents can be made not only interactive (by embedding semantic services), but also “active” in that they actively adapt to reader preferences and pre-knowledge (if known)."
  },
  {
    "pres": "baranovskyi-vakthesis",
    "author": [
      "Oleksandr Baranovskyi"
    ],
    "title": "<span class=\"latex\">L<span>a</span>T<span>e</span>X</span> classes for doctoral theses in Ukraine: Interesting tips and painful problems",
    "timezone": "+0300",
    "time": "2022-07-24T07:45:00Z",
    "abstract": "In the talk, I introduce <tt>vakthesis</tt>, a bundle of <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> classes for typesetting doctoral theses according to official requirements in Ukraine, discuss current status of the project and future development plans. Some <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> programming tricks that I have studied are considered."
  },
  {
    "pres": "cvr-submissions",
    "author": [
      "Apu V",
      "Aravind Rajendran",
      "Rishi T"
    ],
    "title": "<span class=\"latex\">L<span>a</span>T<span>e</span>X</span> profiling of author submissions",
    "timezone": "+0530",
    "time": "2022-07-24T07:00:00Z",
    "abstract": "Due to the permissive nature of <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>, authors who prepare their manuscripts in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> for publishing their research articles in academic journals often knowingly or unknowingly indulge in non-standard markup practices that cause avoidable delays and hardships in processing their submissions. A simple pre-submission check followed by requests to fix as much as possible at their end before submission with the benefit of earlier publication can reduce turnaround time (<span class=\"sm-caps\">TAT</span>) considerably."
  },
  {
    "pres": "break",
    "time": "2022-07-24T03:15:00Z",
    "title": "Break, 3 hours 45 minutes"
  },
  {
    "pres": "khalighi-bidi-multicol",
    "author": [
      "Vafa Khalighi"
    ],
    "title": "Bidirectional multi-columns and paragraph footnotes in <span class=\"tex\">T<span>e</span>X</span>",
    "timezone": "+1000",
    "time": "2022-07-24T02:30:00Z",
    "abstract": "Appendix D (Dirty Tricks) of <span class=\"tex\">T<span>e</span>X</span>Book describes algorithms for multi-column typesetting and paragraph footnotes, among much more. The described algorithms are used in various <span class=\"tex\">T<span>e</span>X</span> packages such as <tt>footmisc</tt>, <tt>fnpara</tt>, <tt>manyfoot</tt>, and many others.  <br /><br /> When the package <tt>multicol</tt> is used, things get more complicated.  Another level of complication arises when you want to mix these with both right to left and left to right typesetting.  <br /><br /> The <tt>bidi</tt> package provides both right to left and left to right multi-columns and paragraph footnotes.  <br /><br /> This talk will describe my own experience learning about how other packages implement multi-columns and paragraph footnotes, and also the approach I took in the bidi package for typesetting right to left and left to right multi-columns and paragraph footnotes."
  },
  {
    "pres": "moore-tables",
    "author": [
      "Ross Moore"
    ],
    "title": "Accessible tables using Tagged <span class=\"sm-caps\">PDF</span>",
    "timezone": "+1000",
    "time": "2022-07-24T01:45:00Z",
    "links": [
      "http://web.science.mq.edu.au/~ross/TaggedPDF/TUG2022/"
    ],
    "abstract": "Some basic requirements for Accessibility of tabular material are:</p> <div class=\"row\"> <div class=\"column\"> <ul> <li> each cell, whether header or content, must have an attribute providing a unique ID for that cell; </li> <li> each data cell must specify the corresponding row and column headers that most directly provide the meaning of the information contained within the cell.  This is done via a <span class=\"sans-serif\">Headers</span> attribute using the unique IDs for the header cells. </li> </ul> </div> </div> <p> Header cells themselves may have other row or column headers; e.g., as a common header for a block of rows or columns.  <br /> <br /> Tagged PDF has the tagging and mechanisms to provide such attributes.  When the PDF is translated into HTML (using the  <span class=\"sans-serif\">ngPDF</span> online converter, say) this information is recorded in the web-pages, to be available to Assistive Technologies.  In this talk we show several examples of tables specified using various packages, as in the <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> Companion, both in PDF and HTML web pages.  A novel coding idea that allows this to be achieved will be presented."
  },
  {
    "pres": "veytsman-interview",
    "title": "In conversation with Paulo Ney de Souza",
    "author": [
      "Boris Veytsman"
    ],
    "timezone": "-0700",
    "time": "2022-07-24T01:00:00Z",
    "abstract": "Boris Veytsman, the president of TUG will be interviewed live by Paulo Ney de Souza, and you will be able to join the coversation."
  },
  {
    "pres": "break",
    "time": "2022-07-23T23:45:00Z",
    "title": "Break, 1 hour 15 minutes"
  },
  {
    "pres": "khalighi-persian-math",
    "author": [
      "Vafa Khalighi"
    ],
    "title": "Typesetting mathematics in Persian",
    "timezone": "+1000",
    "time": "2022-07-23T23:00:00Z",
    "abstract": "I will discuss how mathematics is typeset in Persian and what is required. I will also talk about how the <span class=\"xesomething\">X<span>&#398;</span>Persian package implements these features and show some examples. I will then discuss recent changes to the <tt>xepersian</tt> package allowing users to change between English and Persian digits mid-math mode."
  },
  {
    "pres": "chernoff-engines",
    "author": [
      "Max Chernoff"
    ],
    "title": "Comparing <span class=\"tex\">T<span>e</span>X</span> engines and formats",
    "timezone": "+1200",
    "time": "2022-07-23T22:15:00Z",
    "abstract": "Initially, <span class=\"tex\">T<span>e</span>X</span> was a single engine and a single format.  However, over the past 40 years, the number of engines and formats has significantly grown, meaning that there are multiple ways of implementing similar solutions depending on the <span class=\"tex\">T<span>e</span>X</span> variant used. In this talk, I’ll introduce and compare each engine and format, focusing on both history and practical tips."
  },
  {
    "pres": "luc-vietnamese",
    "author": [
      "Tia Luc"
    ],
    "title": "Observations and analysis of Vietnamese text",
    "timezone": "-0700",
    "time": "2022-07-23T21:30:00Z",
    "abstract": "Having Vietnamese as my first language and English as my dominant language has inspired exploration of the history and applications of the former. Considering how Vietnamese and English both use the Latin alphabet, this presentation will explore the similarities and differences between the two using a collection of instances in which Vietnamese text is displayed in our world."
  },
  {
    "pres": "nico-mathpix",
    "author": [
      "Nicolas Jimenez"
    ],
    "title": "Bridging the gap between <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> / <span class=\"sm-caps\">PDF</span>s and the modern web",
    "timezone": "-0700",
    "time": "2022-07-23T20:45:00Z",
    "abstract": "In this talk we explore the history of <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> and <span class=\"sm-caps\">PDF</span>s in scientific communication, the roles these tools play, and how those roles may evolve over time. We discuss the rise of Markdown for web publishing, its limitations, and opportunities. We also touch on some recent developments by <tt>Mathpix</tt> to facilitate document interoperability and accessibility for researchers and the broader <span class=\"sm-caps\">STEM</span> community."
  },
  {
    "pres": "break",
    "time": "2022-07-23T20:00:00Z",
    "title": "Break, 45 minutes"
  },
  {
    "pres": "agm-2022",
    "title": "Annual General Meeting of the <span class=\"tex\">T<span>e</span>X</span> Users Group",
    "time": "2022-07-23T18:00:00Z",
    "abstract": "Secretary of the TUG Board of directors, Klaus Höppner will present a report on the Board actions of the last year and the general meeting will be under way."
  },
  {
    "pres": "break",
    "time": "2022-07-23T17:00:00Z",
    "title": "Break, 1 hour"
  },
  {
    "pres": "wright-unicase",
    "author": [
      "Joseph Wright"
    ],
    "title": "Case changing: <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> reaches Unicode-land",
    "timezone": "+0100",
    "time": "2022-07-23T16:15:00Z",
    "abstract": "In 2015, I talked about my work exploring Unicode-land, particularly how to carry out case changing in <span class=\"xetex\">X<span>&#398;</span>T<span>e</span>X</span> and Lua<span class=\"tex\">T<span>e</span>X</span> properly. Since then, <tt>expl3</tt> has become a part of the <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> kernel, and LaTeX has adopted <span class=\"sm-caps\">UTF-8</span> as the standard input encoding. The time has therefore become ripe to “open up” Unicode-land to allow <tt>MakeUppercase</tt> and <tt>MakeLowercase</tt> to roam free.  <br /><br /> In this talk, I’ll remind us of what Unicode tells us about case changing, where the challenges are and how we’ve approached them in <tt>expl3</tt>. I’ll then show how this has combined with some <span class=\"tex\">T<span>e</span>X</span> features to enable us to make the switch, incorporate ideas from the <tt>textcase</tt> package and upgrade <tt>MakeUppercase</tt> and <tt>MakeLowercase</tt> for the 21<sup>st</sup> century."
  },
  {
    "pres": "fischer-newlatex",
    "author": [
      "Ulrike Fischer"
    ],
    "title": "New in stock—a walk though recent <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> improvements (that you may have missed)",
    "timezone": "+0200",
    "time": "2022-07-23T15:30:00Z",
    "abstract": "In this talk I present a selection of improvement we made in the recent <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> releases. The changes are not discussed in depth; the goal is to give some interesting examples and make you curious enough to explore the documentation and learn more."
  },
  {
    "pres": "break",
    "time": "2022-07-23T14:30:00Z",
    "title": "Break, 1 hour"
  },
  {
    "pres": "samcarter-bricks",
    "author": [
      "samcarter"
    ],
    "title": "Bricks and jigsaw pieces",
    "timezone": "+0200",
    "time": "2022-07-23T14:00:00Z",
    "abstract": "Real world bricks and jigsaw puzzles are a fun pastime for many people.  The <span class=\"sm-caps\">tikzbricks</span> and <span class=\"sm-caps\">jigsaw</span> packages bring them to the <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> world. This short talk will give an overview of both packages and show examples how they can be used."
  },
  {
    "pres": "fine-uktug",
    "author": [
      "Jonathan Fine"
    ],
    "title": "The UK <span class=\"tex\">T<span>e</span>X</span> Users Group—a personal history",
    "timezone": "+0100",
    "time": "2022-07-23T13:15:00Z",
    "abstract": "<span class=\"sm-caps\">UK TUG</span> was established in the early 1990s. I’ve been a member of <span class=\"sm-caps\">UK TUG</span> almost from its start through to its dissolution earlier this year. Much has changed both in the <span class=\"tex\">T<span>e</span>X</span> community and in the wider world over that time.  <br /><br /> <span class=\"sm-caps\">UK TUG</span> was a significant part of the <span class=\"tex\">T<span>e</span>X</span> community. Besides myself (Jonathan Fine), former members of <span class=\"sm-caps\">UK TUG</span> include Peter Abbott, Kaveh Bazargan, David Carlisle, Paulo Cereda, Malcolm Clark, David Crossland, Robin Fairbairns, Alan Jeffrey, Sebastian Rahtz, Arthur Rosendahl, Chris Rowley, Philip Taylor and Joseph Wright.  <br /><br /> This list includes two past Presidents of <span class=\"sm-caps\">TUG</span>, the current Vice President and a past Secretary.  Ten people on the list served on the <span class=\"sm-caps\">TUG</span> Board, for a total of over 30 years.  <br /><br /> Five are or were members of the <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>3 project. One was the founder and for 8 years editor of <span class=\"tex\">T<span>e</span>X</span>Live, and another the Technical coordinator of the <span class=\"sm-caps\">NTS</span> project. One is a Lead Program Manager for Google Fonts.  <br /><br /> This talk provides a personal history from <tt>\\begin{uktug}</tt> to <tt>\\end{uktug}</tt>, with a short ‘<tt>\\aftergroup</tt>’ appendix."
  },
  {
    "pres": "vrabcova-markdown",
    "author": [
      "Tereza Vrabcová"
    ],
    "authorascii": "Tereza Vrabcova",
    "title": "A gentle introduction to <tt>Markdown</tt> for writers",
    "timezone": "+0200",
    "time": "2022-07-23T12:30:00Z",
    "abstract": "<span class=\"tex\">T<span>e</span>X</span> is great for producing beautiful documents, but not the easiest to read and write. At this workshop, you will learn about Markdown and how you can use it to produce different types of beautiful documents from beautiful source texts that don’t distract you from your writing."
  },
  {
    "pres": "shirore-luatruthtable",
    "author": [
      "Chetan Shirore",
      "Ajit Kumar"
    ],
    "title": "The <tt>luatruthtable</tt> package in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>",
    "timezone": "+0530",
    "time": "2022-07-23T12:00:00Z",
    "delivery": "https://drive.google.com/file/d/1I8WzVN6FloURqt00x2xISG4WVCzCTQq6",
    "abstract": "This paper describes the development and usage of the <tt>luatruthtable</tt> package in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>. It is developed to generate truth tables of boolean values in a <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> document. The package provides an easy way of generating truth tables in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>. There is no need of special environment in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> in the package for the generation of truth tables. It is written in Lua and <span class=\"tex\">T<span>e</span>X</span> file is to be compiled with Lua<span class=\"latex\">L<span>a</span>T<span>e</span>X</span> engine.  <br /><br /> The Lua programming language is a scripting language which can be embedded across platforms. With Lua<span class=\"tex\">T<span>e</span>X</span> and the <tt>luacode</tt> package, it is possible to use Lua in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>. All<span class=\"tex\">T<span>e</span>X</span> have some scope for programming, but with the internals of <span class=\"tex\">T<span>e</span>X</span> there are several limitations especially for performing calculations. Packages like <tt>pgf</tt> and <tt>xparse</tt> in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> provide some programming capabilities inside <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> documents, but such packages are not meant to provide the complete programming structure that general programming languages, like Lua, provide.  <br /><br /> The generation of truth tables with these packages in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> became complex, and probably without using Lua it can’t be done in an easier way in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>. The programming capabilities of Lua are effectively used in the development of <tt>luatruthtable</tt> package. The <tt>xkeyval</tt> package is used in its development, in addition to the <tt>luacode</tt> package. The time needed for generation of truth tables using the package and compilation of a <span class=\"tex\">T<span>e</span>X</span> document with Lua<span class=\"tex\">T<span>e</span>X</span> is not an issue."
  },
  {
    "pres": "gundlach-boxesandglue",
    "author": [
      "Patrick Gundlach"
    ],
    "title": "Boxes and glue: <span class=\"tex\">T<span>e</span>X</span> algorithms reimplemented",
    "timezone": "+0200",
    "time": "2022-07-23T11:15:00Z",
    "abstract": "<span class=\"tex\">T<span>e</span>X</span> (and therefore <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>) have enjoyed great popularity over the years as an extremely flexible, versatile, and robust text typesetting system. The flexibility comes not least from the ability to modify the behavior of <span class=\"tex\">T<span>e</span>X</span> through programming and from Knuth’s foresight in recognizing the individual elements on the page as small, rectangular building blocks that can be combined into larger units and also manipulated (box).  <br /><br /> The development of Lua<span class=\"tex\">T<span>e</span>X</span> made modern applications possible for the first time in the long history of <span class=\"tex\">T<span>e</span>X</span> via some extensions: </p> <div class=\"row\"> <div class=\"column\"> <ul> <li> The number of characters in fonts is no longer limited to 256. This eliminates crutches like output encoding. </li> <li> Through the integration of HarfBuzz a solid “shaper” is available. This allows OpenType features and complicated writing systems (e.g., Arabic) to be output without any problems. </li> <li> The system can be programmed with Lua instead of the built-in macro language. </li> <li> Due to the clever <span class=\"sm-caps\">PDF</span> support, almost all <span class=\"sm-caps\">PDF</span> properties and standards can be supported. </li> </ul> </div> </div> <p> I use these extensions for the program ‘speedata Publisher”, which is mainly made for the fully automatic creation of product catalogs and data sheets from <span class=\"sm-caps\">XML</span>.  <br /><br /> Despite all the achievements of <span class=\"tex\">T<span>e</span>X</span> and Lua<span class=\"tex\">T<span>e</span>X</span>, there are still serious disadvantages: </p> <div class=\"row\"> <div class=\"column\"> <ul> <li> <span class=\"tex\">T<span>e</span>X</span> and Lua<span class=\"tex\">T<span>e</span>X</span> are anything but modular. Changing single areas is especially difficult, because <span class=\"tex\">T<span>e</span>X</span> is not designed for that. </li>  <li> Some things cannot be achieved with Lua<span class=\"tex\">T<span>e</span>X</span>’s on-board tools. For example, <span class=\"sm-caps\">HTTPS</span> requests require an external library. Documents in our catalog area often get their images from image databases that are accessed via <span class=\"sm-caps\">HTTPS</span>. </li> <li> For other tasks, too, it is better to use an external library than to reinvent the wheel. For example, an <span class=\"sm-caps\">XML</span> parser or a library for bidirectional text typesetting. </li>  <li> Parallelization of tasks: modern processors usually have several processor cores, which lie idle with <span class=\"tex\">T<span>e</span>X</span>. Several tasks in <span class=\"tex\">T<span>e</span>X</span> could be executed in parallel. Paragraphs could be wrapped with different parameters and then the best one selected. Loading font files and preparing them for subsetting in <span class=\"sm-caps\">PDF</span> does not have to be done sequentially. <span class=\"tex\">T<span>e</span>X</span> does not provide such facilities. </li>  <li> Distributing Lua<span class=\"tex\">T<span>e</span>X</span> binaries across platforms is difficult due to external dependencies. For single applications you don’t want to ship or require a whole <span class=\"tex\">T<span>e</span>X</span> Live installation. </li> </ul> </div> </div> <p> The restrictions mentioned have disturbed me considerable. Regarding the output quality of <span class=\"tex\">T<span>e</span>X</span>, there are hardly comparable alternatives– especially not in the opensource area. Therefore, there seemed no alternative left but to re-implement <span class=\"tex\">T<span>e</span>X</span> in a “modern” programming language. Some years ago there was already such an attempt (<span class=\"sm-caps\">NTS</span>), but it failed. After long pondering, respectively to meet my requirements for a text typesetting system for catalogs and datasheets, I came to the conclusion that I “only” take over the algorithms and the logic of <span class=\"tex\">T<span>e</span>X</span>, but not the input language.  <br /><br /> </p> <h2>Boxes and glue</h2> <br /><br /> <p> “Boxes and glue” is a library written in the Go programming language.  The name is based on the model of <span class=\"tex\">T<span>e</span>X</span> with the stretchable spaces between the rectangular units. The development of boxes and glue is quite advanced and includes among other things: </p> <div class=\"row\"> <div class=\"column\"> <ul> <li> <span class=\"tex\">T<span>e</span>X</span>’s smallest units (node) with ways to nest them inside each other (vbox, hbox). </li> <li> <span class=\"tex\">T<span>e</span>X</span>’s paragraph breaking algorithm. </li>  <li> The pattern-based hyphenation. </li> <li> The inclusion of TrueType and OpenType fonts and <span class=\"sm-caps\">PNG</span>, <span class=\"sm-caps\">JPEG</span>, and <span class=\"sm-caps\">PDF</span> images. </li>  <li> Text shaping with HarfBuzz. </li> </ul> </div> </div> <p> Besides these basic parts, there is yet another library that builds on <tt>boxesandglue</tt>. It offers: </p> <div class=\"row\"> <div class=\"column\"> <ul> <li> Reading <span class=\"sm-caps\">XML</span> files </li> <li> Interpretation of <span class=\"sm-caps\">HTML</span> and <span class=\"sm-caps\">CSS</span> </li> <li> grouping of font files into families with easy font selection </li> <li> Handling of colors of all kinds (<span class=\"sm-caps\">RGB</span>, <span class=\"sm-caps\">CMYK</span>, spot colors) </li> <li> Tagged <span class=\"sm-caps\">PDF</span> </li> </ul> </div> </div> <p> The application programming interface (<span class=\"sm-caps\">API</span>) is not yet fixed. The development of boxes and glue is being carried out in parallel with the further development of the <a href=\"https://github.com/speedata/xts\">speedata Publisher</a> and the requirements here largely determine the programming interface of <tt>boxesandglue</tt>.  Since it is a library, there is no fixed input language as with <span class=\"tex\">T<span>e</span>X</span>. In this respect also, <tt>boxesandglue</tt> is also yet suitable for and (end) user.  <br /><br /> <h2>References</h2> </p> <div class=\"row\"> <div class=\"column\"> <ul> <li> <a href=\"https://en.wikipedia.org/wiki/New_Typesetting_System\">NTS</a> </li> <li> <a href=\"https://github.com/speedata/boxesandglue\">Boxes and glue</a> </li>  <li> <a href=\"https://github.com/speedata/publisher\">speedata Publisher</a> </li> <li> <a href=\"https://github.com/speedata/xts\">XTS XML</a> </li> </ul> </div> </div>"
  },
  {
    "pres": "break",
    "time": "2022-07-23T03:00:00Z",
    "title": "Break, 8 hours 15 minutes"
  },
  {
    "pres": "khalighi-beamer",
    "author": [
      "Vafa Khalighi"
    ],
    "title": "Right to left <tt>beamer</tt> documents in <span class=\"xetex\">X<span>&#398;</span>T<span>e</span>X</span>",
    "timezone": "+1000",
    "time": "2022-07-23T03:00:00Z",
    "abstract": "I will discuss the recent changes to the <tt>bidi</tt> package allowing users to produce right to left <tt>beamer</tt> documents describing the challenges and what needs to be done. I will also discuss other recent changes of the <tt>bidi</tt> package."
  },
  {
    "pres": "preining-tl22",
    "author": [
      "Norbert Preining"
    ],
    "title": "<span class=\"tex\">T<span>e</span>X</span>Live 2022 status update",
    "timezone": "+0900",
    "time": "2022-07-23T02:15:00Z",
    "abstract": "This talk reports on changes within the <span class=\"tex\">T<span>e</span>X</span>Live project and distribution over the last year, as well as looking at further development directions and challenges we are facing."
  },
  {
    "pres": "veytsman-knitr",
    "author": [
      "Boris Veytsman"
    ],
    "title": "Using <tt>knitr</tt> and <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> for literate lab notes",
    "timezone": "-0700",
    "time": "2022-07-23T01:30:00Z",
    "abstract": "One of Knuth’s important insights was the concept of literate programming, where the prose is as important as the code. Now many scientists in different fields are having similar insights about their work. While the published papers have been always recognized as the works of literature, now we start to understand this with respect to lab notes, the lowly reports of our daily activity. This explains the new interest to notebook interfaces: from commercial programs like Matlab and Mathematica to free systems like Wxmaxima and Jupyter.  <br /><br /> In this talk I discuss the approach that uses <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> and <tt>knitr</tt> for creating lab notes. I compare it with the available notebook interfaces and the the solutions based on Markdown."
  },
  {
    "pres": "castaneda-constitutions",
    "author": [
      "Sarai Castañeda"
    ],
    "title": "Fonts and formats of constitutions",
    "timezone": "-0700",
    "time": "2022-07-23T00:45:00Z",
    "abstract": "Through the different constitutions from different countries we’ll look at, France, Canada, the United States, Mexico, and Argentina it is clear that the fonts range from cursive to typewriter-like. The fonts and format of the country’s constitution are based on the time period it was written and other countries’ influence. The countries have developed different iterations in order for the constitution to best represent their country’s values."
  },
  {
    "pres": "austin-airport",
    "author": [
      "Oliver Austin"
    ],
    "title": "Looking outside the cockpit: An in-depth look at airport signage",
    "timezone": "-0700",
    "time": "2022-07-23T00:00:00Z",
    "abstract": "If you take a quick glance at an airport and its signage, you’ll see many different situations where text is used to enhance and streamline processes for both pilot and ground crew alike. Thus, this exploration will take a closer look at such variations along the taxiway and apron at major airports, also discussing how the onset of autonomous aircraft can factor into it."
  },
  {
    "pres": "break",
    "time": "2022-07-22T23:00:00Z",
    "title": "Break, 1 hour"
  },
  {
    "pres": "blakesley-production",
    "author": [
      "David Blakesley"
    ],
    "title": "The residual concepts of production vs. the emergent cultures of distribution in publishing",
    "keynote": "yes",
    "timezone": "-0400",
    "time": "2022-07-22T22:15:00Z",
    "abstract": "Who wins? The base or the superstructure? I’m not a Marxist per se, but I’ve lived this struggle for some time as a writer and publisher. In this keynote presentation, I describe my efforts to change or adapt the democratized tools of production to produce new forms of writing, which ultimately led to an ongoing battle with the dominant cultures of production in the world of publishing. I’ll narrate two case studies. One focuses on the writing and production of an innovative, if not disruptive, textbook in the ultra-conservative textbook industry. The second tells the ongoing story of an interloping publishing company (Parlor Press) that reveals the central challenge of <i>distribution</i> for both writers and publishers, from typesetting (print) to transformation (digital). <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> developers and users, take note! The return of the nonbreaking space and soft return is nigh!"
  },
  {
    "pres": "hickman-creports",
    "author": [
      "Hubert Hickman",
      "Matthew Mariano",
      "Haibin Wu",
      "Hong Dat Cheung"
    ],
    "title": "Using <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> deployed in <span class=\"sm-caps\">AWS</span> as a <span class=\"sm-caps\">PDF</span> report generation tool for a cancer clinical trial search engine",
    "timezone": "-0500",
    "time": "2022-07-22T21:30:00Z",
    "abstract": "Matching cancer patients with clinical trials is a complex process. One of the outputs of that process is the production of a <span class=\"sm-caps\">PDF</span> report containing relevant information about a set of trials. In this paper we present strategies, challenges, and conclusions regarding our use of <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> deployed in <span class=\"sm-caps\">AWS</span> to generate <span class=\"sm-caps\">PDF</span> reports."
  },
  {
    "pres": "prentice-selfpub",
    "author": [
      "Lloyd Prentice"
    ],
    "title": "A self-publisher's take on <span class=\"tex\">T<span>e</span>X</span>",
    "timezone": "-0400",
    "time": "2022-07-22T20:45:00Z",
    "abstract": "This presentation touches on:</p> <div class=\"row\"> <div class=\"column\"> <ul> <li> the <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> markdown package; </li> <li> <span class=\"tex\">T<span>e</span>X</span>Live installation </li> <li> user documentation; </li> <li> suitability for self-publishers. </li> </ul> </div> </div> <p> It will present examples of Markdown to <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>-styled <span class=\"sm-caps\">PDF</span>.  <br /><br /> It will also announce two initiatives: a <span class=\"tex\">T<span>e</span>X</span> Live book publishing scheme; and a website where self-publishers can find <span class=\"tex\">T<span>e</span>X</span> Live installation instructions plus book publishing how-tos, tutorials, and resources.  <br /><br /> Lloyd is a self-publisher with experience in magazine publishing, corporate communication, academia, and software development."
  },
  {
    "pres": "cereda-tempest",
    "author": [
      "Paulo Cereda"
    ],
    "title": "IoT theatre presents: The Tempest",
    "timezone": "-0300",
    "time": "2022-07-22T20:00:00Z",
    "abstract": "In this talk, Paulo recollects 2021 as a challenging year for the Island of <span class=\"tex\">T<span>e</span>X</span>: roadmap changes, lack of resources, server limitations. Yet, resilience, persistence and a bit of good humour made the island even stronger, with new joiners, community support, bold plans and an even brighter future for the <span class=\"tex\">T<span>e</span>X</span> ecosystem. And all just in time for celebrating 10 years of arara, our beloved bird!"
  },
  {
    "pres": "break",
    "time": "2022-07-22T19:00:00Z",
    "title": "Break, 1 hour"
  },
  {
    "pres": "claudio-chess",
    "author": [
      "Jennifer Claudio"
    ],
    "title": "Revamping a youth chess workbook using <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> packages",
    "timezone": "-0700",
    "time": "2022-07-22T18:15:00Z",
    "abstract": "Playing chess can range from a casual pastime to a highly competitive event. Several local organizations offer chess as enrichment programs in K–12 schools, often having their own workbooks to supplement their instruction. One drawback is that these workbooks are often created using screen captures of online sources, hence resulting in low-quality outputs when used for print. This exploration tours a few packages used for typesetting diagrams for chess problems and puzzles and presents comparisons of one enrichment program’s original workbook to equivalent pages produced using <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>."
  },
  {
    "pres": "cereda-silly",
    "author": [
      "Paulo Cereda"
    ],
    "title": "The story of a silly package",
    "timezone": "-0300",
    "time": "2022-07-22T17:30:00Z",
    "abstract": "In this talk, Paulo recollects the untold story of two friends writing a silly package just for the fun of it. The story, however, takes a turn when the <span class=\"tex\">T<span>e</span>X</span> community decides to embrace silliness. Gather around to learn about <span class=\"tex\">T<span>e</span>X</span>, friendship, community, silly walks, and the air speed velocity of an unladen swallow."
  },
  {
    "pres": "wright-siunitx3",
    "author": [
      "Joseph Wright"
    ],
    "title": "<tt>siunitx</tt>: Launching version&nbsp;3",
    "timezone": "+0100",
    "time": "2022-07-22T16:45:00Z",
    "abstract": "Since it was first released in 2008, <tt>siunitx</tt> has become established as the major package for typesetting physical quantities in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>. Following up on my <span class=\"sm-caps\">TUG</span> 2018 talk, I will look at how the update to version~3 has gone now that this is out. I’ll briefly look at the background, then consider some of the user and developer efforts that have made the launch a success."
  },
  {
    "pres": "evia-techdoc",
    "author": [
      "Carlos Evia"
    ],
    "title": "The future of technical documentation starts with its <i>recent</i> past",
    "keynote": "yes",
    "timezone": "-0400",
    "time": "2022-07-22T16:00:00Z",
    "abstract": "This keynote presentation will address how recent trends to align technical documentation practices with “developer-friendly” workflows may be detrimental to documentation authors and their users. A proposed solution is in the recent past of technical documentation as a discipline, where tools and ideas rooted in structured authoring and markup, reuse, and personalization can still provide solutions to present– and future– needs related to technical content."
  },
  {
    "pres": "williams-tectonic",
    "author": [
      "Peter K. G. Williams"
    ],
    "title": "The Tectonic Project: Envisioning a 21st-century <span class=\"tex\">T<span>e</span>X</span> experience",
    "keynote": "yes",
    "timezone": "-0400",
    "time": "2022-07-22T15:15:00Z",
    "abstract": "Tectonic is a software project built around an alternative <span class=\"tex\">T<span>e</span>X</span> engine forked from <span class=\"xetex\">X<span>&#398;</span>T<span>e</span>X</span>. It was created to explore the answers to two questions.  The first question relates to documents: in a world of 21st-century technologies– where interactive displays, computation, and internet connectivity are generally cheap and ubiquitous– what new forms of technical document have become possible? The second question relates to tools: how can we use those same technologies to do a better job of empowering people to create excellent technical documents? The answers are, of course, intertwined: without a system of great tools, it’s hard (or perhaps impossible?) to create great documents.  <br /><br /> The premises of the Tectonic project are that the world needs and deserves a “21st-century” document authoring system, that such a system should have <span class=\"tex\">T<span>e</span>X</span> at its heart– and that in order to create a successful system, parts of the classic <span class=\"tex\">T<span>e</span>X</span> experience will need to be rethought or jettisoned completely.  <br /><br /> This is why Tectonic forks <span class=\"xetex\">X<span>&#398;</span>T<span>e</span>X</span> and is branded independently: while it aspires to maintain compatibility with classic <span class=\"tex\">T<span>e</span>X</span> workflows as far as can be managed, in a certain sense the whole point of the effort is to break compatibility and ignore tradition– to experiment with new ideas that can’t be tried in mainline <span class=\"tex\">T<span>e</span>X</span>. Thus far, these “new ideas” have focused on experience design, seeking to deliver a system that is convenient, empowering, and even delightful for users and developers. Tectonic is therefore compiled using standard Rust tools, installs as a single executable file, and downloads support files from a prebuilt <span class=\"tex\">T<span>e</span>X</span> Live distribution on demand.  <br /><br /> In the past year, long-threatened work on native <span class=\"sm-caps\">HTML</span> output has finally started landing, including a possibly novel Unicode math rendering scheme based on font subsetting. The goal for upcoming work is to flesh out this <span class=\"sm-caps\">HTML</span> support so that Tectonic can create the world’s best web-native technical documents, and to use that support to document the Tectonic system itself.",
    "links": [
      "assets/html/Peter-K-G-Williams-TUG2022-slides"
    ]
  },
  {
    "pres": "veytsman-opening",
    "author": [
      "Boris Veytsman"
    ],
    "title": "Conference opening",
    "timezone": "-0700",
    "time": "2022-07-22T15:00:00Z",
    "abstract": "Opening welcome from Boris Veytsman, the President of TUG."
  },
  {
    "pres": "break",
    "time": "2022-07-21T22:00:00Z",
    "title": "Break, 17 hours"
  },
  {
    "pres": "borbom-ltxworkshop",
    "author": [
      "Alexánder Borbón"
    ],
    "title": "Introducción a <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>, in Spanish",
    "timezone": "-0700",
    "time": "2022-07-21T19:00:00Z",
    "abstract": "A workshop in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> in Spanish."
  },
  {
    "pres": "demeritt-ltxworkshop",
    "author": [
      "Susan DeMeritt",
      "Cheryl Ponchin"
    ],
    "title": "<span class=\"latex\">L<span>a</span>T<span>e</span>X</span> workshop, in English",
    "timezone": "-0700",
    "time": "2022-07-21T16:00:00Z",
    "abstract": "Sue and Cheryl will be giving their classical introduction to <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> workshop, in English.<br /><br />On the first day of the Conference, Sue and Cheryl will conduct a webinar in <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>.  Starting with the basic principles in the morning and then proceeding to more detailed topics in the afternoon. They will cover making Indexes, Tables, Figures, Bibliographes, entering Mathematics and many other topics.  </p> <div class=\"row\"> <div class=\"column\"> <ol class=\"subjects\"> <li>Creating a <span class=\"latex\">L<span>a</span>T<span>e</span>X</span> Document</li> <li>Creating Numbered Section Headings</li> <li>Creating a Section That uses Roman Numerals</li> <li>Still Using Roman Numbering for Sections</li> <li>Changing Numbering Back to Arabic <ol class=\"secondList\"> <li>Creating Subsection Headings</li> <li>Paragraph and Subparagraph</li> </ol> </li> <li class=\"clear\">Creating Footnotes</li> <li>Changing Font Styles</li> <li>Marking the Margin of a Paragraph</li> <li>Text in Columns</li> <li>Creating a Table of Contents</li> <li>Adding to Contents</li> <li>Itemizing, Enumerating, and Nesting</li> <li>Theorems, Lemmas, etc.</li> </ol> </div> <div class=\"column\"> <ol class=\"subjects\" start=\"14\"> <li>Basic Tables</li> <li>Simple Mathematics and Creating Equations <ol class=\"secondList\"> <li>Subscripts and Superscripts</li> <li>Accents</li> <li>Binomial Coefficients</li> <li>Congruence</li> <li>Delimiters</li> <li>Operators</li> <li>Ellipses</li> <li>Integral</li> <li>Sum</li> <li>Matrices</li> </ol> </li> <li class=\"clear\">How to do Bibliographies</li> <li>Getting an Output</li> </ol> </div> </div>"
  },
  {
    "pres": "guichard-ltxworkshop",
    "author": [
      "Éric Guichard",
      "Jean-Michel Hufflen"
    ],
    "authorascii": "Eric Guichard,Jean-Michel Hufflen",
    "title": "Un atelier de <span class=\"latex\">L<span>a</span>T<span>e</span>X</span>, en Français",
    "timezone": "+0200",
    "time": "2022-07-21T13:00:00Z",
    "abstract": "1. Penser LaTeX, penser avec LaTeX Thèmes: histoire de l'écriture, concepts et apports de TeX et LaTeX Éric Guichard, 20 mn + 10 mn de débat.  </p> <p> 2. LaTeX, premiers pas Thèmes: réaliser un premier document en LaTeX; présentation illustrée d'exemples simples.  Éric Guichard, 15 à 20 mn + 10 mn de débat.  </p> <p> 3. Points de typographie Thèmes: généralités, césures, polices, langues.  Jean-Michel Hufflen, 15 à 20 mn + 10 mn de débat.  </p> <p> 4. LaTeX en milieu littéraire Thèmes: normes, confort de lecture, design, dialogue avec les éditeurs, communication avec d'autres systèmes éditoriaux.  Éric Guichard, 15 à 20 mn + 10 mn de débat.  </p> <p> 5. Bibliographies Thèmes: processeurs de bibliographies, styles de base, exemples.  Jean-Michel Hufflen, 15 à 20 mn + 10 mn de débat.  </p> <p> 6. Compléments (si le temps le permet) Thèmes: traitement des images, détournements de LaTeX.  Éric Guichard, 15 à 20 mn + 10 mn de débat."
  }
]
