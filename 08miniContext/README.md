> useContext :- Acts as a global variable

Takes a default value

Like **Outlet** there is children. Here we can pass components from one components to other.

```Javascript
<Heading />
    <>
        <Home />
        <User />
        <About />
    </>
<Footer />
```

useContext.provider allows children to access the context values

Also we have to provide values like props in useContext.provider, and these values are accessible to children
