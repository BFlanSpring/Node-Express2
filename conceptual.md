### Conceptual Exercise

#### What is a JWT?
A JWT (JSON Web Token) is a secure and URL-safe method for parties in an application to authenticate. It comprises three main sections: header, payload, and signature. It's commonly used for authentication and authorization in web applications.

#### Signature Portion of JWT
The signature in a JWT is created by using the encoded header, encoded payload, secret/private key, and the algorithm from the header. Its primary function is to verify the message's integrity and the sender's identity.

#### Payload Visibility if Intercepted
An intercepted JWT exposes the encoded header and payload, but without the ability to alter its content due to the absence of a valid signature.

#### Implementing Authentication with JWT
Authentication with JWT involves user login, token creation, and server-side verification. Upon login, the server creates a JWT containing user details, stores it, and on subsequent requests, the server verifies the token before granting access to protected resources.

#### Unit, Integration, and End-to-End Tests Comparison
Unit tests validate small, isolated parts without external dependencies, while integration tests verify interactions between components. End-to-end tests check the entire application flow, simulating user scenarios.

#### Mocking and Its Applications
Mocks are simulated versions used for testing. They replicate real functionalities like external API calls, databases, or complex functions, isolating specific parts for testing purposes.

#### Continuous Integration
Continuous Integration involves frequently integrating code changes into a shared repository, triggering automated tests to identify issues early in the development cycle.

#### Environment Variables and Use Cases
Environment variables store dynamic values affecting process behavior. They hold system configurations, user preferences, and runtime information, adapting application behavior based on the environment.

#### TDD (Test-Driven Development)
TDD is a development approach where tests are written before code. Benefits include early issue detection and clearer code design, but drawbacks include time consumption and potential over-testing.

#### JSONSchema for Validation
JSONSchema defines JSON data structure and rules, ensuring data correctness and safety. It aids teams in agreeing on data structure standards.

#### Deciding What Code to Test
Critical features, complex logic, extreme inputs, and code interactions are factors influencing code testing decisions.

#### SQL's RETURNING Clause
RETURNING retrieves affected column values after INSERT, UPDATE, or DELETE operations. It's used when immediate access to affected data is required after an operation.

#### Web Sockets vs. HTTP Differences
Web Sockets enable full-duplex communication with a persistent connection, allowing real-time data exchange, while HTTP operates in a request-response manner, making intermittent connections.

#### Preference: Flask vs. Express
There's no binary preference. Flask and Express have strengths in different scenarios. Flask, with its simplicity, is useful for simpler sites, while Express, with its efficiency, suits applications with fast-paced data needs. The choice depends on project requirements and familiarity with the technologies.
