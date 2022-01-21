var b_template = document.createElement("template");
// creates tags <template></template>
b_template.innerHTML = `
<h1>toes</h1>
<style>
 h1{
     color: black;
} 
</style>
`; 

class TheBanner extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"}); 

    }
    
    connectedCallback(){
        this.shadowRoot.appendChild(b_template.content.cloneNode(true));
    }
}

customElements.define("the-banner", TheBanner);
