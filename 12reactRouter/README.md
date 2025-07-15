# React router dom
It's an external dependency that we use to do route navigation in react.

Just how react provides us useEffect,Callback,State hooks, react-router-dom also provides us a few features like Link, Navlink. 
Link is used in place of anchor <a> tag in html to navigate to a link, cuz anchor tag reloads the entire page whereas Link doens't


# Link vs NavLInk
NavLink is like Link, but adds styles automatically when the link is active (i.e., when the current URL matches the link). 

# callback classes and their manipulation.
Navlink provides us access to isactive variable that has access to url and know what url we currently at, so using a callback fxn with isactive as parameter we can manipulate the class i.e. say our navbar in header contains buttoms of home, aboutus, contactus, so if we are currently at home it would be highlighted in orange, if we click on aboutUs then our page content will change with url and aboutUs  becomes orange as aboutUs is our active url. 

# assignment 
Do the same for all the footer.

# Dynamic values extraction from URL
Make sure what u pass in the url should be the same name as what we use in the component that maps to that route. we can extract the url parameters using
useParams hook that returns an object. Chekout User.jsx

# Two methods for routing 
Both use react-router-dom

# loader()
It's used to optimize the entire process of data fetching through api or db, the moment your cursor hovers over any specific element say contactUs, data fetching will start and will be saved in cache before that component is even clicked ( cuz obviously before clicking it you'd hover over it.)

# React-router
Can study more about it in the documentation if need more info.

