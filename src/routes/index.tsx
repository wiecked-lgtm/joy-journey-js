12:28:26.887 Running build in Washington, D.C., USA (East) – iad1
12:28:26.887 Build machine configuration: 2 cores, 8 GB
12:28:26.989 Cloning github.com/wiecked-lgtm/joy-journey-js (Branch: main, Commit: 230c6b2)
12:28:28.093 Cloning completed: 1.104s
12:28:28.164 Restored build cache from previous deployment (AegbvTD6bea5pHjuPKdb4Adxr3wQ)
12:28:28.403 Running "vercel build"
12:28:28.432 Vercel CLI 54.19.0
12:28:29.071 Installing dependencies...
12:28:29.112 bun install v1.3.12 (700fc117)
12:28:29.304 
12:28:29.304 Checked 505 installs across 627 packages (no changes) [212.00ms]
12:28:29.317 Running "bun run build"
12:28:29.321 $ vite build
12:28:31.060 [info] [nitro:vercel] Using `nodejs24.x` runtime.
12:28:31.061 [info] [nitro:vercel] Using `web` entry format.
12:28:31.068 The plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the resolve.tsconfigPaths option. You can remove the plugin and set resolve.tsconfigPaths: true in your Vite config instead.
12:28:31.126 Error: Error transforming route file /vercel/path0/src/routes/index.tsx: SyntaxError: Expected corresponding JSX closing tag for <div>. (169:14)
12:28:31.127     at file:///vercel/path0/node_modules/@tanstack/router-generator/dist/esm/generator.js:143:13
12:28:31.127     at async generate (file:///vercel/path0/node_modules/@tanstack/router-plugin/dist/esm/core/router-generator-plugin.js:39:4)
12:28:31.127     at async BasicMinimalPluginContext.configResolved (file:///vercel/path0/node_modules/@tanstack/router-plugin/dist/esm/core/router-generator-plugin.js:56:4)
12:28:31.128     at async Promise.all (index 5)
12:28:31.128     at async resolveConfig (file:///vercel/path0/node_modules/vite/dist/node/chunks/node.js:34748:2)
12:28:31.128     at async createBuilder (file:///vercel/path0/node_modules/vite/dist/node/chunks/node.js:33650:17)
12:28:31.128     at async CAC.<anonymous> (file:///vercel/path0/node_modules/vite/dist/node/cli.js:766:19)
12:28:31.134 vite v8.0.16 building client environment for production...
12:28:31.437 
transforming...✓ 178 modules transformed.
12:28:31.439 ✗ Build failed in 301ms
12:28:31.440 error during build:
12:28:31.440 Build failed with 1 error:
12:28:31.440 
12:28:31.440 [plugin tanstack-start:route-tree-client-plugin]
12:28:31.440 Error: Crawling result not available
12:28:31.440     at LoadPluginContextImpl.handler (file:///vercel/path0/node_modules/@tanstack/start-plugin-core/dist/esm/vite/start-router-plugin/plugin.js:69:32)
12:28:31.441     at async plugin (file:///vercel/path0/node_modules/vite/node_modules/rolldown/dist/shared/bindingify-input-options-ClrST5Xx.mjs:1219:16)
12:28:31.441     at async plugin.<computed> (file:///vercel/path0/node_modules/vite/node_modules/rolldown/dist/shared/bindingify-input-options-ClrST5Xx.mjs:1625:12)
12:28:31.441     at aggregateBindingErrorsIntoJsError (file:///vercel/path0/node_modules/vite/node_modules/rolldown/dist/shared/error-BuvQYXuZ.mjs:48:18)
12:28:31.441     at unwrapBindingResult (file:///vercel/path0/node_modules/vite/node_modules/rolldown/dist/shared/error-BuvQYXuZ.mjs:18:128)
12:28:31.441     at #build (file:///vercel/path0/node_modules/vite/node_modules/rolldown/dist/shared/rolldown-build-CrPk_lZe.mjs:3246:34)
12:28:31.441     at async buildEnvironment (file:///vercel/path0/node_modules/vite/dist/node/chunks/node.js:33253:64)
12:28:31.442     at async Object.build (file:///vercel/path0/node_modules/vite/dist/node/chunks/node.js:33675:19)
12:28:31.442     at async buildStartViteEnvironments (file:///vercel/path0/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
12:28:31.442     at async Object.buildApp (file:///vercel/path0/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
12:28:31.442     at async Object.buildApp (file:///vercel/path0/node_modules/vite/dist/node/chunks/node.js:33667:6)
12:28:31.442     at async CAC.<anonymous> (file:///vercel/path0/node_modules/vite/dist/node/cli.js:777:3) {
12:28:31.442   errors: [Getter/Setter]
12:28:31.442 }
12:28:31.506 error: script "build" exited with code 1
12:28:31.515 Error: Command "bun run build" exited with 1
