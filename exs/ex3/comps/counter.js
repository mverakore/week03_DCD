var c_template = document.createElement("template");
// creates tags <template></template>
c_template.innerHTML = `   
<style>
body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
</head>
<body>
<style>
#counter {
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    border-radius: 5px;
}

button{
    width: 30px;
    height: 30px;
    background-color: azure;
    border: none;
    border-radius: 5px;
    margin: 5px;
}

#counter > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

#bar {
    background-color: rgb(164, 252, 152);
    width: 0px;
    height: 15px;
}

</style>
<div id="counter">
<button id="d_but">-</button>
<div id="number">1</div>
<button id="i_but">+</button>
</div>  
<div id="bar"></div>
`;
// writing inside the template tag - the UI of the component, no script tag 

class TheCounter extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"}); 
        this.num = 1;

    }
    
    connectedCallback(){
        this.shadowRoot.appendChild(c_template.content.cloneNode(true));
        this.shadowRoot.querySelector("#i_but").onclick = () => this.inc();
        this.shadowRoot.querySelector("#d_but").onclick = () => this.dec();
    }

    dec(){
        this.num = this.num - 1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";

    }
    
    inc(){
        this.num = this.num + 1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";
    }
}

customElements.define("the-counter", TheCounter);

// line 54 find a huge bag called TheCounter to create children
// wrap the template above and push the traits into the new child
// attachshadow = a background power thats happening in the back/hidden 
// line 54 - 61 is a rule

