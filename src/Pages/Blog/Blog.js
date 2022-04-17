import React from 'react';

const Blog = () => {
    return (
        <div className=' container w-75'>
            <h1 className='text-center my-5'>Question & Answer</h1>
            <div className='text-justify'>
                <h5 >What are the difference between authorization and authentication?</h5>
                <p >Authorization is the process of validating a user's access to a specific subset of data, whereas authentication is the act of proving a person's identity. Authorization is the process of granting someone permission to perform a given action. On the other side, authentication is the process of proving that the request comes from a legitimate source. When we authorize someone to perform a task based on a certain authorization, we are authorizing them to perform that task. And when we authenticate someone, we're determining whether or not they're genuine. </p>
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p >For most small businesses, authentication is a complex operation with challenging data storage. Firebase Authentication makes it simple to get application users signed into the system without having to comprehend the complexities of setting up application own's own authentication solution. Firebase maintains track of all database data in real time and ensures that users have secure access to it. Firebase is one of the strongest authentication systems since it allows for real-time data synchronization across all devices. The most popular alternatives and competitors to Firebase Authentication are Auth0, MongoDB, Passport, Okta, and many more...</p>
                <h5 >What other services does firebase provide other than authentication?</h5>
                <p>Firebase provides a lot of different services other than authentication. A few major services we usually see are - hosting, google analytics, cloud function, firebase ML, Realtime Database, cloud storage, cloud messaging, and many more... All the services firebase provides is realtime and efficient for any suitable business. Firebase Cloud Messaging is a messaging platform that allows to send messages to several devices at the same time. In Firebase web hosting Web content is supplied swiftly using the Firebase hosting system.</p>
            </div>
        </div>
    );
};

export default Blog;