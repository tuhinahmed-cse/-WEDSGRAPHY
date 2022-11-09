import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blog = () => {
  return (
    <div>
      <Container>
        <Row>

          <h1 style={{ color: 'tomato', textAlign: 'center', marginTop: '40px' }}>Question Answer Part</h1>

          <div>

            <div >
              <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }}> Q1. Difference between SQL and NoSQL ?</h2>
              <p style={{ color: '#043D1D' }}><strong>Ans: </strong>
                When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision. <br />
                The five critical differences between SQL vs NoSQL are: <br />
                1. SQL databases are relational, NoSQL databases are non-relational. <br />
                2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                <br />
                3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                <br />
                4.  SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.

              </p>
            </div>
            <div >
              <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }} > Q2. What is JWT, and how does it work?</h2>
              <p style={{ color: '#043D1D' }}><strong>Ans: </strong>

                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />

                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. <br />

                Once decoded, you will get two JSON strings: <br />
                1. The header and the payload. <br />
                2. The signature. <br />
                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

              </p>
            </div>
            <div >
              <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }}> Q3.  What is the difference between javascript and NodeJS?</h2>
              <p style={{ color: '#043D1D' }}><strong>Ans: </strong> <br />

                1.  NodeJS : <br />
                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />
                2. JavaScript : <br />
                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br />
                Difference between Nodejs and JavaScript :  <br />
                1. Javascript is a programming language that is used for writing scripts on the website. <br /> NodeJS is a Javascript runtime environment. <br />

                2.  Javascript can only be run in the browsers. <br /> We can run Javascript outside the browser with the help of NodeJS <br />
                3. Javascript is basically used on the client-side. <br />  NodeJS is mostly used on the server-side. <br />
                4. Javascript is capable enough to add HTML and play with the DOM.  <br /> Nodejs does not have capability to add HTML tags. <br />
                5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br /> V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
                6. Javascript is used in frontend development. <br /> Nodejs is used in server-side development. <br />
                7. Some of the javascript frameworks are RamdaJS, TypedJS, etc. <br />
                Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. <br />
                8. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. <br /> Nodejs is written in C, C++ and Javascript.
              </p>
            </div>
            <div >
              <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }}> Q4.  How does NodeJS handle multiple requests at the same time?</h2>
              <p style={{ color: '#043D1D' }}><strong>Ans: </strong>  Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded. <br />Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations. <br /> The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool. <br /> NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue. So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue.The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.


              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;