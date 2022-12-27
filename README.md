# Prodentifier

This tiny library is a lightweight tool that aims to help developers easily track and debug build issues. It simply logs some basic build information, such as the version of the library and the environment it is running in, to help identify and resolve problems more efficiently. It is by no means a comprehensive solution, but it may serve as a useful starting point for debugging.

_(it's a fancy console.log)_

## Usage

```ts
import { Prodentifier } from 'prodentifier';

const prodentifier = new Prodentifier({
  'Build Version': process.env.BUILD_VERSION,
  'Build Date': process.env.BUILD_DATE,
  'Commit ID': process.env.COMMIT_ID,
  'Build ID': process.env.BUILD_ID,
  'Source Branch': process.env.SOURCE_BRANCH,
});

prodentifier.log();
```
