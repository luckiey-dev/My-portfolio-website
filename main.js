
const html = document.getElementById('html');

const css = document.getElementById('css');

const js = document.getElementById('js');

const skillParagraph = document.getElementById('skillParagraph');

function showParagraph(id) {
  switch (id) {
    case 'html':
      js.classList.remove('scalingAnimation');
      css.classList.remove('scalingAnimation');
      html.classList.add('scalingAnimation');
      skillParagraph.innerHTML = `<p>I utilize <span class="em">HTML5</span> to create semantic, accessible, and structured <span class="em">web content</span> that forms the robust foundation of modern <span class="em">Websites</span> and web applications.</p>`
      break;
    case 'css':
js.classList.remove('scalingAnimation');
css.classList.add('scalingAnimation');
html.classList.remove('scalingAnimation');
skillParagraph.innerHTML = `<p>I apply <span class='em'>CSS3</span> with proficiency in <span class='em'>Flexbox and Grid</span>  to design and implement responsive, visually consistent, and appealing <span class='em'>user interfaces</span> across all devices.</p>`
break;
case 'js':
js.classList.add('scalingAnimation');
css.classList.remove('scalingAnimation');
html.classList.remove('scalingAnimation');
skillParagraph.innerHTML = `<p>I leverage <span class="em">JavaScript (ES6+)</span>  to implement all dynamic application logic, manage <span class="em">DOM manipulation</span> , and create rich, interactive user experiences.</p>`
break;
    default:
    alert('error')
  }
}
