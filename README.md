# Setup

```
yarn install
```

Install postgresql on your machine if you don't already have it

```
psql postgres
```

Create the database

```
CREATE DATABASE course_site;
CREATE ROLE db_user WITH LOGIN PASSWORD 'password' CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE course_site TO db_user;
```

```
yarn develop
```

Update Permissions

```
Roles & Permissions -> Authenticated

Course: find, findone, update
Lesson: find, findone, update
Completed-Lessons: find, findone, create
```
