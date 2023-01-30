# Database
An internal package to manage and share the schema.
Uses prisma under the hood. 


```shell
yarn add @redample/database
```

Note: direct call to the prisma client should not be used,
send call to the db instance from the index.ts.

## Usage
- Use this to make db calls.
- Use this to make type validations.
- Change database schema.

### Making database calls
```typescript
import {db} from '@redample/database'
```
### Getting types

#### Getting enums

```typescript
import {user_role} from '@redample/database'
```

#### Getting types from db

```typescript
import {Prisma} from "@redample/database";

const users : Prisma.userSelect[] = await axios.get("/api/v1/users");
```
**Key:Use 'Select' prefix

#### Modifying schema

See prisma [docs](https://www.prisma.io/docs/getting-started/quickstart).

### Scripts

#### Generate client
```shell
npx turbo db:generate
```
