function reactRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target);


// optimize
    for(let prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:"https://react.dev/",
        target:"_blank"
    },
    children:"click me to open react documentation"
}

const container = document.getElementById('root');

reactRender(reactElement,container )

// if we pass direcg reactElement to the render function of the react then it will not work because it is expecting function
// where it will parse it into tree based on its key, here we are passing custom keys, and these can have different name that it is expecting 