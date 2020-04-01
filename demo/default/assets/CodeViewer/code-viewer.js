class CodeViewer extends HTMLElement {
    
    constructor(){
        super();
    }

    connectedCallback() {
        var id = Date.now()+Math.floor(Math.random()*9999).toString();
        var template =`<div class="clearfix"><h5 style="max-width:70%">${this.title}</h5><button id="button-${id}" class="btn btn-small btn-dark tiny btn-rounded">View code</button><pre id="pre-${id}" style="margin-top: 8px"><code>${this.content}</pre></code></div>`;
        this.innerHTML = template;
        var pre = document.getElementById(`pre-${id}`);
        pre.style.display = 'none';
        var button = document.getElementById(`button-${id}`);
        var state = false;

        button.addEventListener('click', function() {
            if(!state){
                pre.style.display = 'block';
                this.innerText = 'Hide code';
                state=!state;
            }
            else{
                pre.style.display = 'none';
                this.innerText = 'View code';
                state=!state;
            }
        })
      }

      get content(){
          return this.getAttribute('content');
      }

      get title(){
          return this.getAttribute('title');
      }

}

customElements.define('code-viewer', CodeViewer);