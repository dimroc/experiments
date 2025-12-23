# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
grunt serve     # Dev server with livereload at http://localhost:9000
grunt test      # Run Karma unit tests
grunt build     # Production build to dist/
grunt deploy    # Build and deploy to GitHub Pages
```

## Architecture

AngularJS 1.6.1 single-page portfolio site with Grunt build system.

**Structure**:
- `app/scripts/` - AngularJS modules (app.js defines routes, MainCtrl has project data)
- `app/views/` - HTML templates (main.html is primary view)
- `app/styles/` - SCSS compiled via Compass
- `test/spec/` - Karma unit tests

**Key Patterns**:
- Angular `experimentsApp` module with ngRoute
- `dimroc` global namespace for graphics utilities
- Three.js WebGL rendering via custom directives (e.g., `renderer`)

## Build

Grunt pipeline: Sass→CSS via Compass, ng-annotate for minification safety, filerev for cache busting. Deployed to GitHub Pages.

## Code Style

- 2-space indents, single quotes, camelCase
- Globals: THREE, dimroc, angular (see .jshintrc)
- ES6 allowed
