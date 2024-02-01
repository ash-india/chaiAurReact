In react we use Link, because A tag will reload the whole page. 
But Link follows the virtual DOM property

NavLink provides some extra features

#### Dynamic ClassName, i.e. className changes for different elements

<div classNme={(isActive)=>{`block ${isActive ? "text-orange-500" : "text-gray-500"}`}>