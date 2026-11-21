# Workflows

- [ci.yml](ci.yml) runs the shared PLUNZ pnpm check and build on pull requests and pushes.
- [deploy.yml](deploy.yml) deploys to Cloudflare Workers on pushes to `main` and manual dispatch, using the organization `CLOUDFLARE_API_TOKEN` secret.
