## Network Packet:
   
    - HTTP => Application.
    - UDP and TCP => Transport .
    - IP => Network.
    - Ethernet of Wifi => Link.
    - Coaxial Ethernet cable => Physical.
    
`Transport layer` - letting multiple applications use one network connection simultaneously.
    
`TCP` - Transmission Control Protocol. 
`Connection` oriented protocol - firstly set a session between two computers. 
Two computers verify connection before any communication take place.
Guaranty all the data is received. 
If some data missed, the TCP wil resend it - Delivery acknowledgments. `Stream-oriented` e.g. phone conversation, chats. `Non-ordered packets`.
     
`UPD` - User Datagram Protocol.
Similar for `TCP`. `Connectionless` oriented protocol.
Not established session. Does not guaranty data delivery. Faster than TCP.
`Message-oriented` e.g. mail. `Ordered packets`.

`HTTP` - Hyper Text Transform Protocol.
Protocol for viewing web pages in the Internet. 
All the info sent in clear text between browser and server.
Vulnerable for hackers.

`HTTPS` - Hyper Text Transform Protocol Secure. HTTP with a security feature.
Encrypts the data that being retrieved by HTTP. Uses encryption algorithm.

`HTTPS` protects the data one of two protocols:

    - SSL - Secure Sockets Layer. Protocol that`s ensure security on the internet. Authenticate the server, client, encrypt data.
    - TLS - Transport Layer Security. The latest industry standard protocol. The successor to SSL.

`Proxy server`:

    - Privacy - allows to surf the internet anonymously.
    - Speed - cached web page database on Proxy Server.
    - Save bandwidth.

## Client storage
`Cookies` used for:

    - preserve login state.
    
`Important`: To include cookies in a Fetch requests across different origins we must provide the credentials: "include" (by default it's same origin).

`Cookies` pros:

    - session IDs are opaque and carry no meaningful data.
    - cookies can be secured with flags (same origin (domain), HttpOnly, HTTPS, etc.).
    - HttpOly cookies can`t be compromised with XSS exploits.
    
`Cookies` cons:
    
    - server must stire each user session in memory.
    - session auth must be secured against CSRF.
    - horizontaly scaling (risk of single point of failure, need load balancing).
    - have to worry about domains and subdomains.

`Session Storage` used for:
 - Good alternative to passing data between pages using hidden <input> fields, or URL parameters.
 - Some things only want the user to see once per login, like a news popup. You could store that they've seen it already in sessionStorage. This would also work for actions that you only want the user to do once per login.
   
`Local Storage` best for:  

    - public, non-sensitive, string data.
   
`Local Storage` worst for:  

    - private sensitive data.
    - non-string data.
    
![cookies-localStorage-sessionStorage](https://github.com/AndrewDeiak/AndrewDeiak.github.io/blob/master/browser-general-info/cookies-localStorage-sessionStorage.png?raw=true)

`JWT` Auth - JSON WEB TOKEN Auth pros:
    
    - server does not need to keep track of user sessions.
    - horizontal scaling is easier.
    - operational even if cookies are disabled.
    - CORS (Cross Origin Resource Sharing) is not an issue if Authorization header (contain token) is used instead of `Cookies`.
 
`JWT` Auth cons:

    - when scaling the secret must be shared between servers.
    - token stored on clinet storage are vulnerable to XSS (Cross-Site Scripting)
        - steal user info, permissions, metadata, etc.
        - access website resources on user's behalf.
    - requires JavaScript to be enabled.
    
## Options for Auth in SPAs / APIs:

1. Sessions.
2. Stateless JWT.
3. Stateful JWT.
    
### Stateless JWT:

    - user payload embedded in the token.
    - token is signed & base64url encoded.
        - sent via Authorization header.
        - stored on localStorage / sessionStorage (in plaintext).
    - server retrieves user info from the token.
    - no user sessions are stored server side.
    - only revoked tokens are persisted.
    - refresh token sent to renew the access token.

### Stateful JWT:
 
    - only user ref (e.g. ID) embedded in the token.
    - token is signed & base64url encoded.
        - sent as an HttpOnly cookie (Set-Cookie header).
    - server uses ref (ID) in the token to retrieve user from the DB.
    - no user sessions stored on the server eather.
    - revoked tokens still have to be persisted.

### Sessions:

    - sessions are persisted server-side and linked by session ID.
    - session ID is signed and stored on a cookie.
        - sent via Set-Cookie header.
        - HttpOnly, Secure, SameSite flags.
        - scipred to the origin with Domains, Path attrs.
        
### `Verdict`
Sessions are (probably) better suited for web apps and websites.

### Why not JWT:

    - server state need to be maintained.
    - leak throught XSS (JS code had the access directly).
    - data never goes stale (always in sync with DB). In case of sessions IDs stored in cookies the only way to access to the data through the server.  

### `XSS can compromise user accounts`:

    - by leaking tokens from localStorage.
        - via AJAX requests with user token in Authorization.
        - via AJAX requests with HttpOnly cookies.
    - SSL / HTTPS must be configured.
    - security headers must be set.

### `Auxiliary measures`:

    - IP verification.
    - user agent verification.
    - two-factor auth.
    - API throttling.
