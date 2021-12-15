import "./App.css";

import products from "./ProductList";
import React from "react";
import {Product} from "./components/Product";

function App() {

  const [, updateState] = React.useState();
  const callBack = React.useCallback(() => updateState({}), []);

  function increseLike(prod){
    prod.likes = prod.likes + 1;
    callBack();
  }
  products.sort((a, b) => (
    b.likes - a.likes
));
  

  return (
    <body>
    <h1><font>Most Liked Items</font></h1>
    <div>
			{
				products.map((p,i) =>
        <div>
            <p><button onClick={increseLike.bind(this,p)}><font size="5">{p.likes}</font></button>
          <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Green-Up-Arrow.svg/1200px-Green-Up-Arrow.svg.png'} width="25" height="25"/>
              </p>
          <Product imageUrl={p.productImageUrl} title={p.title} description={p.description} submitter={p.submitter}/>

        </div>
				)
			}
      </div>
      </body>
  );
}

export default App;
