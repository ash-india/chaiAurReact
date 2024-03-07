# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



#### Redux Toolkit - 
npm i @reduxjs/toolkit
npm i react-redux

#### Router
npm i react-router-dom

#### Appwrite
npm i appwrite

#### Tinymce Editor
npm i @tinymce/tinymce-react

#### react to html
npm i html-react-parser

#### React ofrms
npm i react-hook-form


### environment variables

When app is created using **React** then the environment variables are created as
> REACT_APP_APPWRITE_URL = ""

When app is created using **Vite** then the environment variables are created as
> VITE_APPWRITE_URL = ""
And this are used as 
> import.meta.env.VITE_APPWRITE_URL

Appwrite_url is API endpoint (present in settings option of project in appwrite)

Similarly Project_id is also present there

Database is created in Appwrite and Database id is taken from there
Inside dataase collection(table) is created and id is generated from there

Now permission is given, how collection (articles) to be accessed. 
permission for CRUD operations are available to all users

Now for table articles, attributes are created. Also index is created

bucket is created in storage where images will get stored. permission is given to all users


> Always try to keep the values of environment variables as string

All the environment variables will be imported to config.js. From there it will be exported to different files.

All the values of environment variables are converted into string before exporting

This is needed because it might be possible that sometime a environment doesn't gets loaded, or environment variable is of some other type than string.


### Authentication

These functionalities are present in auth.js (authentication)
- createAccount, 
- login 
- logout
- getCurrentUser

### Services

These are present in service
- createPost
- updatePost
- deletePost
- getAllPost
- addFile
- deleteFile
- filePreview

All the services returns a promise that's why async await has been used. But filePreview is very fast that's why it's not needed to be handled by async await.


#### Redux Toolkit

creation of store and authSlice.js to handle login and logout

anotherSlice for post (assignment)

----


### Created Header footer

#### Footer - ;

#### Header 

NavBar is designed 

**LogOutBtn is created** - logout() from auth.js and logout() from authSlice.js 

In production grade react, one singal input or button is designed and is used in whole project.

**useRef()** :- a component which used to store value and its value persists betwen rendering and on change does not forces render.

**forwardRef** When we have to pass ref to a component, we use forwardRef

It can be called while declaring the function or while exporting the component

In card component, showing image and title of card
To get Image we are passing id to appwrite.bucket to get url

Also we are using $id to use id, this is the syntax of appwrite