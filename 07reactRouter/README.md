In react we use Link, because A tag will reload the whole page.
But Link follows the virtual DOM property

NavLink provides some extra features

#### Dynamic ClassName, i.e. className changes for different elements

<div classNme={(isActive)=>{`block ${isActive ? "text-orange-500" : "text-gray-500"}`}>
isActive we get while writing a callback

in the application,header and footer will remain constant. The data (UI) in between these will get change.  
So we will use **Outlet**, which indicates that here a child element should be rendered

Layout.jsx can be treated as App.jsx

If we want that data to be loaded when the component renders then there is loader.
This is used in the route.
useLoaderData is a hook which is used to load data in the component
