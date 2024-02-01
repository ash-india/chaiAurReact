import Chai from './Chai';

function App() {
  const username = "Nitesh"
  return (
    <>
      <h1>Chai aur React | {username}</h1>
      <Chai/>
    </>
  )
}

// {abc}
// abc is a evaluated expression
// {} is a expression evaluator,
// here we write the complete final evaluated javascript
// abc can't be a if-else code or function

// why

// the above fucnion is also evaluated into a tree, like ReactElement2

// in this tree, after the child element, we can inject variables (or evaluated expression), but 
// conditional codes or loops or anything else are not allowed
// so any statements is not allowed

// check ReactElement2

export default App
