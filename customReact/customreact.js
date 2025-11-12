function customRender(reactElement,container){
  /*
  const domElement=document.createElement(reactElement.type)
  domElement.innerHTML=reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)

  container.appendChild(domElement)
*/

  const domElement=document.createElement(reactElement.type)
  domElement.innerHTML=reactElement.children
  for(const prop in reactElement.props){
    if(prop==='children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  container.appendChild(domElement)
}

const reactElement={
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)











// function customRender(reactElement, mainContainer) {
//  /*
//   // ✅ Correct: createElement (not childElement)
//   const domElement = document.createElement(reactElement.type);

//   // ✅ Add text
//   domElement.innerHTML = reactElement.children;
 
//   // ✅ Set all attributes
//   domElement.setAttribute('href', reactElement.props.href);
//   domElement.setAttribute('target', reactElement.props.target);

//   // ✅ Append to container (not CSSContainerRule)
//   mainContainer.appendChild(domElement);
// }

// // ✅ Object that represents a React-like element
// */
//  // 👉 Naya HTML element create karte hain (jaise 'a', 'div', 'h1' etc.)
//     const domElement = document.createElement(reactElement.type);

//     // 👉 Us element ke andar ka text set karte hain
//     domElement.innerHTML = reactElement.children;

//     // 👉 Loop chala ke props (href, target, etc.) ko element me set karte hain
//     for (const prop in reactElement.props) {
//         if (prop === 'children') continue; // children ko skip karte hain
//         domElement.setAttribute(prop, reactElement.props[prop]); // attribute lagate hain
//     }

//     // 👉 Ab element ko main container ke andar daal dete hain
//     mainContainer.appendChild(domElement);
// }
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit Google',
// };

// // ✅ Find container and render
// const mainContainer = document.querySelector('#root');
// customRender(reactElement, mainContainer);
 