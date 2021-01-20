
# Solid SPARQL

Since [Comunica and Solid are compatible](https://comunica.dev/docs/query/advanced/solid/), you can use it to run SPARQL queries over your pod resources. 

## How To?

```bash
git clone git@github.com:matthieubosquet/solid-sparql-test.git
cd solid-sparql-test
npm ci
npm run build
node .
```

Alternatively, start the TypeScript compiler in watch mode via `npm run watch` instead of `npm run build` while developing.

Can be run with a locally running instance of the Solid community server.

```bash
git clone git@github.com:solid/community-server.git
cd community-server
npm ci
npm run start:file
curl -X PUT -H "Content-Type: text/turtle" -d "<ex:s> <ex:p> <ex:o> ." http://localhost:3000/foo
```

More on interacting with the CSS via CLI here: https://github.com/solid/community-server-demos/blob/main/solid-world-2020-sep/steps.sh


## TODO

Use Solid specific HTTP actor https://github.com/comunica/actor-http-solid-auth-fetch to query over data pods that require authentication.

