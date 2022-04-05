// const MainContent = () => {
//     return <h1>I'm learning react</h1>;
// }

// const element = (
//     <div>
//         <h1 className="header">Hello, react!</h1>
//         <p>This is a paragraph</p>
//     </div>
// );

// console.log('element', element);

const navBar = (
    <nav>
        <h1>Learn React</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(
    navBar, 
    document.getElementById("root")
);

// const h1 = document.createElement("h1");
//  h1.textContent = "This is an imperative way to program";
//  h1.className = "header";
//  document.getElementById("root").append(h1);