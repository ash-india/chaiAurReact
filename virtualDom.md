## Virtual DOM
The virtual DOM is a much lighter replica of the actual DOM in the form of objects. The virtual DOM can be saved in the browser memory and doesn’t directly change what is shown on the user’s browser.

The virtual DOM’s operations support and add on to those of the actual DOM. Essentially, the virtual DOM provides a mechanism that allows the actual DOM to compute minimal DOM operations when re-rendering the UI.

For example, when an element in the real DOM is changed, the DOM will re-render the element and all of its children. When it comes to building complex web applications with a lot of interactivity and state changes, this approach is slow and inefficient.

Instead, in the rendering process, React employs the concept of the virtual DOM, which conforms with its declarative approach. Therefore, we can specify what state we want the UI to be in, after which React makes it happen.

After the virtual DOM is updated, React compares it to a snapshot of the virtual DOM taken just before the update, determines what element was changed, and then updates only that element on the real DOM. This is one method the virtual DOM employs to optimize performance.

## What is Hydration?
The UI loaded but it is not interactive, i.e., the buttons are not working properly.\
The javascript is not loaded yet.\
Hydration is the process of injecting Javascript to the app, so that page becomes interactive and the buttons and other elements will function properly. all the methods related to the elements or the event listeners are injected in this process.\
Before Hydration the page remains static.

## What is reconciliation?
It is a recursive algorithm which checks the parts in the DOM which needs to be updated
**Reconciliation**
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
The trees are:-
- provided by the browser
- by createRoot
***update***
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

## Reconciliation and rendering
React is designed so that reconciliation and rendering are separate phases.\
The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.

### Approach
Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.\
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

While looping through arrays, objects. Keys are used to differentiate the two components to be generated

Fiber reimplements the reconciler. It is not principally concerned with rendering, though renderers will need to change to support (and take advantage of) the new architecture.



#### Summary

1. The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2. But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9. In UI it is not necessary for every update to be applied immediately.