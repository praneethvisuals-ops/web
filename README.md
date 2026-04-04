# praneethvisuals

**Deploy**
Netlify (static export): Connect the repo in Netlify. `netlify.toml` sets the build command to `npm run build` and publish directory to `out`.

Render (static site): Use the `render.yaml` blueprint. It builds with `npm install && npm run build` and serves the static output from `out`.
