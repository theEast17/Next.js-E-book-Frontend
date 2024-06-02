caching in Next.js

1-Data Fetching:
Data fetching is a core part of any application. Next.js provides several ways to fetch data, including:
On the server, using the native fetch API.
On the client, via a route handler or third-party libraries.
You can use fetch with async/await in various contexts, such as Server Components, Route Handlers, and Server Actions.

2-Caching Data:
Caching stores data to reduce the number of requests made to the server. By default, Next.js automatically caches the returned values of fetch in the Data Cache on the server.

4 types cache ->

1->Router cache:-The Router Cache is particularly useful when you have server components that are expensive to render and don’t change often between requests. By caching these components, Next.js can serve them quickly without the need to re-render them for each new request.

ex: we have a route called /about and /contact

    we go from / -> /about first time it will take time then we return to /

    and again if we go to /about it will not take time because the route is in the caching

    advantage-reduce server requests on navigation

so this is called route caching

2->Full Route cache:-  advantage-reduce rendering cost and improve performance

3->Data cache:-  we are calling external api's from the server it ccache the data and when we again request on the same server now it will give the data from the cache

-it by default cache the data 
 
 -store data across user requests and deployments 

 4-> Request memoization:- solve the problem of prop drilling 

 if we have three components and all the three components require api data from same link then how you send the data using props in React and this is calling prop drilling and it is not useful when we have multiple children 

 so next js solve this problem using request memoization if you create fetch functionality in each component it will understand only one fetch because it is c=very smart


 advantage- Re-use data in React component Tree 
