# Module Federation Demo

This is a demo of Module Federation in Webpack 5 and Vite
with React, Material UI and TypeScript.
Webpack apps (Flex and Hybrid) act as both hosts and remotes, 
where each app consumes a component exported 
from the other.
The Vite app (Platform) acts as a host and consumes components from both Webpack apps.

Major dependency versions between the vite and webpack projects are intentionally different, to test
working of shared remote modules with different framework versions.

### Install dependencies
`yarn install`

### Run the apps in development mode
`yarn start`

### Build the apps
`yarn build`

### Serve the apps after building
`yarn serve`
