This template enables pre-rendering on React by utilizing `renderToString()` (or Server-Side Rendering to Disk).

React components will be rendered to their initial states into static HTMLs.

## Usage

Calling `npm run prerender:stage` will compile your React application into a SSR-capable library.

Then calling `npm run prerender` will actually build your application using pre-rendered HTML template yielded from the previous step.

## License

MIT
