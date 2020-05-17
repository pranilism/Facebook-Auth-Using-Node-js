> # Facebook Authentication using Node.js

<p>
    This is the basic authentication software which demonstrates the OAuth Authentication using the facebook's OAuth service.
    This is the web api application used to authenticate the user by sending the request from the client side.
    This software uses the lates version of node.js and passport.js is used for the facebook authentication.
</p>

> <b>    You will require : </b>

<ul>
    <li> 
        node.js (Latest Version), you can download it from <a href="https://nodejs.org/en/download/">here</a>
    </li>
    <li> 
        Already existing facebook id and secreat key, if not you can register your app and generate it from <a href="https://developers.facebook.com/">here</a>
    </li>
</ul>

> <b>    Steps to run the software on your local machine</b>

<ol>
    <li> 
        Clone / download the repository in the local file system
    </li>
    <li> 
        Open Terminal and traverse in the directory where repository is placed using "cd " ciommand
    </li>
    <li> 
        Place your AppId and Secreat Key in ".env.txt" file and save that file as ".env" in same directory.
    </li>
    <li> 
        run npm install (This will generate all the dependencies/packages required to run this software)
    </li>
    <li> 
        Then execute npm run start command (This will run the application in debug mode)
    </li>
</ol>

> <b> Routes Information </b>

<ol>
    <li>
        <b>User Routes</b>
        <ul>
            <li> 
                /user/ - To handle the basic user page
            </li>
        </ul>
    </li>
    <li>
        <b>Auth Routes</b>
        <ul>
            <li> 
                /auth/ - To handle the basic auth info page
            </li>
            <li> 
                /auth/facebook - To verify the user by facebook OAuth system
            </li>
             <li> 
                /auth/success - To handle the success callback from facebook OAuth system
            </li>
             <li> 
                /auth/done - To verify the user is already logged in and if he is logged in then will be redirected on this route by facebook OAuth system
            </li>
             <li> 
                /auth/fail - If the varification is failed then will be redirected on this route by facebook OAuth system
            </li>
        </ul>
    </li>
</ol>

> <b> Folder Structure </b>
<ul>
    <li>node_modules</li>
    <li>
        <b>routes</b>
        <ul>
            <li> 
                auth.js
            </li>
            <li> 
                user.js
            </li>
        </ul>
    </li>
    <li>
        <b>utils</b>
        <ul>
            <li> 
                passport.middlewares.js
            </li>
        </ul>
    </li>    
    <li>app.js</li>
    <li>server.js</li>
    <li>package-lock.json</li>
    <li>package.json</li>
    <li>.env</li>
    <li>README.md</li>
    <li>.gitignore</li>
</ul>

<p>
    <span style="float:right">&copy; Developed by <a href="https://pranilism.github.io/">Pranil Tunga</a>
 </p>
