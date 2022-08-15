import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Ques.What is the Difference between Authentication and Authorization?</h2>
            <p>Ans: Authentication and authorization may sound alike, but each plays a different role in securing systems and data. Unfortunately, people often use both terms interchangeably as they both refer to system access. However, they are distinct processes. Simply put, one verifies the identity of a user or service before granting them access, while the other determines what they can do once they have access.

                The best way to illustrate the differences between the two terms is with a simple example. Let's say you decide to go and visit a friend's home. On arrival, you knock on the door, and your friend opens it. She recognizes you (authentication) and greets you. As your friend has authenticated you, she is now comfortable letting you into her home. However, based on your relationship, there are certain things you can do and others you cannot (authorization). For example, you may enter the kitchen area, but you cannot go into her private office. In other words, you have the authorization to enter the kitchen, but access to her private office is prohibited.</p>

            <h2>Ques. Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Ans: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. That is reason for using Firebase.
                Auth0. A set of unified APIs and tools that instantly enables Single Sign On and user management to all your applications.
                Others option are:
                1. MongoDB
                2.  Okta
                3. JSON Web Token
                4. Amazon Cognito
                5. Keycloak, and so on..
            </p>

            <h2>Ques.  What other services does firebase provide other than authentication?</h2>
            <p>Ans:     Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.</p>
        </div>
    );
};

export default Blog;