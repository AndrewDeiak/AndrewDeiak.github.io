`Network Packet`:
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

`Cookies` used for:

    - save the selected language.
    - shopping card.
