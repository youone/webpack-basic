import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/github.css';

const template = /*html*/`
<style>
    .some-class {
        overflow: hidden;
    }
</style>
`

class MyElement extends HTMLElement {

    constructor() {
        super();
        // hljs.initHighlightingOnLoad();
        console.log('CONSTRUCTED');
        hljs.registerLanguage('javascript', javascript);
}

    async connectedCallback() {
        this.innerHTML = 'hej';
        console.log(hljs);

        const response = await fetch('https://raw.githubusercontent.com/youone/jee/master/web/src/main/node/src/index.html?token=AH_0x0V-oR6lZ47U2Q4GlNC8dfY-3dbtks5clgyuwA%3D%3D')
        const text = await response.text();
        const codeContainer = $('<code></code>');
        codeContainer.html(text);

        codeContainer.appendTo($('<pre></pre>').appendTo('body'));

        hljs.configure({useBR: true});

        // document.querySelectorAll('code').forEach((block) => {
        //      console.log("BBBBBBBBBBBBB",block);
        //      hljs.highlightBlock(block);
        // });

        const lines = text.split('\n')
        lines.splice(6,6).forEach(line => {
            console.log(line);
        });
        
    }
}

customElements.define('my-element', MyElement);
export default MyElement;