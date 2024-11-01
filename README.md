# Nextjs Keystone Auth

Boilerplate session authentication and access control with Nextjs and Keystone.

In local development, you can start both Nextjs and Keystone development servers by running:

```
pnpm run dev
```

When deploying to PROD, Keystone will compile with the `--no-ui` flag and the keystone admin ui will not be available.

> GraphQL yoga is used to proxy Keystone context to the Nextjs Application.
