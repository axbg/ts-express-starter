# ts-express-starter

### A powerful express template based on TypeScript
----
Features

- dotenv properties
- MySQL connection using typeorm
- Dependency injection using typedi
- Database migrations
- Database repositories
- Passport integration
  - Google
  - GitHub
- Cookie-based JWT
- In-file logs with 24h rotation
- Schema-based API request/response
- Swagger UI
- ESLint
- Testing infrastructure
- Tests coverage
- Docker containerization
- Docker Compose environment automation


## Useful CLI commands
* npm run build - build the application
* npm start - build & start the application
* npm run dev - build & restart the app on every change
* npm test - run all the tests
* npm run test-watch - run all the tests with verbose output
* npm run coverage - create coverage report & update *coverage shield* in README.md 
* npm run migrate MIGRATION_NAME_ - create a database migration 

## Deployment
### You can deploy the app in 3 ways:
* Manually *(recommended for back-end development)*
    1. Run the database as a Docker container
        ```docker
        docker run --name db -p 3306:3306 -d mysql
        ```
    2. Replace the values of the following fields in .env
        ```
        DB_HOST=localhost
        DB_PORT=3306
        DB_NAME=db_name
        DB_USER=db_user
        DB_PASSWORD=db_password
        ```
    3. Fill the other fields (optional)
    4. Run **npm start**
#
* Using Docker containers managed manually *(recommended during front-end integration)*
    1. Run the database as a Docker container
        ```docker
        docker run --name db -p 3306:3306 -d mysql
        ```
    2. Replace the values of the following fields in .env
        ```
        DB_HOST=host.docker.internal
        DB_PORT=3306
        DB_NAME=db_name
        DB_USER=db_user
        DB_PASSWORD=db_password
        ```
    3. Fill the other fields (optional)
    4. Run **docker build -t template_image_name .**
    4. Run **docker run -d --env-file .\.env --name ts_template -p 8080:8080 template_image_name**    
#
* Using Docker Compose
    1. Replace the values of the following fields in .env
        ```
        DB_HOST=db
        DB_PORT=3306
        DB_NAME=db_name
        DB_USER=db_user
        DB_PASSWORD=db_password
        ```
    2. Fill the other fields (optional)
    3. Run **docker-compose up -d**

If you want to deploy the application using additional features, such as Google/GitHub authentication, check the [.env file](./.env) to discover all the available options