# Webpack Entry Points as HTML (Prototype)

## Current Implementation (Updated Architecture)

The initial prototype described below is based on a virtual module approach.
The current implementation has been improved to use a loader + plugin architecture for better integration with Webpack’s module graph.

---

```
HTML
 ↓ (html-entry-loader)
Converted to JS imports
 ↓
Webpack Module Graph
 ↓
Plugin (HTML reconstruction + asset injection)
 ↓
Final HTML output

```

## 📍My example implementation is inside directory

```
html-entry-webpack-prototype/
  ├── example
  │   ├── src
  │   │   ├── main.html
  │   │   ├── main.css
  │   │   └── main.js
  │   └── webpack.config.js
  └── plugin
        └── HTMLEntryPlugin.js
```

## Run

Run in root level where webpack is

```bash
npm run build:example
```

### 👉 **Here is the Full Explaintion How i approached the problem**

---

While exploring Webpack internals for GSoC 2026, I wanted to understand how entry points actually work beyond the usual configuration.

Initially, I only knew that Webpack requires JavaScript as an entry, and HTML is typically handled using plugins like `HtmlWebpackPlugin`. But I wanted to go deeper and understand how Webpack builds its dependency graph internally.

## Learning Phase

To achieve this, I explored:

- Webpack core source code (especially `lib/`)
- Entry handling via `EntryPlugin` and `EntryDependency`
- Compiler and Compilation lifecycle
- How plugins integrate into Webpack without modifying core

I also referred to documentation, online resources, and used ChatGPT to accelerate understanding and clarify concepts.

## Key Realization

One of the most important insights I gained was:

> “Everything in Webpack is built around plugins and dependencies.”

Webpack is highly extensible — instead of modifying the core, we can:

- Hook into the compilation lifecycle
- Create dependencies
- Inject custom behavior via plugins

## Understanding Entry Internals

I focused deeply on how entries work:

1. Every entry is converted into an `EntryDependency`.
2. This dependency is added using: `compilation.addEntry(context, dependency, options, callback)`
3. Webpack then:
   - Creates a module from the entry
   - Builds the Module Graph by traversing all dependencies
   - Constructs the Chunk Graph to group modules into chunks
   - Runs optimization steps (code splitting, deduplication, etc.)
   - Emits final assets (JS, CSS, images, etc.)

Each entry also becomes a ChunkGroup, which represents the starting point of the application.

## Idea: HTML as Entry Point

After understanding this, I realized:

**If Webpack can treat JavaScript as an entry via dependencies, then HTML can also be transformed into dependencies.**

## Prototype Approach (Virtual Module Based)

I implemented a plugin: **`HTMLEntryPlugin`**

It works by:

## Step 1: **Parsing HTML**

The plugin reads HTML entries from:

```javascript
compiler.options.entry;
```

It parses HTML using Cheerio, which provides a fast and efficient way to traverse HTML without building a full DOM tree.

It parses HTML using Cheerio, which provides a fast and efficient way to traverse HTML without building a full DOM tree.

## Step 2: **Extracting tags:**

- `<script src="...">` → JavaScript files
- `<link rel="stylesheet" href="...">` → CSS files
- `<img src="...">` → image assets

All attributes are preserved for later use.

The original HTML entry is removed from Webpack’s entry config and stored internally for later reconstruction.

## Step 3: **Creating a virtual module:**

Instead of creating multiple entries, a single virtual module is created per HTML entry:

```javascript
import "./style.css?html-entry";
import "./main.js";
import "./image.png";
```

This follows Webpack’s core principle:

> One entry → multiple dependencies

- CSS imports use `?html-entry` for scoped loader behavior
- Paths are normalized for cross-platform compatibility
- Paths are normalized for cross-platform compatibility

## Step 4: Adding Entry via Dependency

The virtual module is converted into an `EntryDependency` and added using

```javascript
compilation.addEntry(...)
```

This integrates seamlessly with Webpack’s internal entry system.

## Step 5: Webpack Builds the Graph

Once the virtual entry is added, Webpack continues its normal flow:

- Builds the Module Graph from imports
- Constructs the Chunk Graph
- Applies optimizations
- Applies optimizations

## Step 6: Rebuilding HTML

Using:

```javascript
compilation.hooks.processAssets;
```

the plugin reconstructs the final HTML:

**JS Injection**

- Uses `entrypoint.getFiles()`
- Injects bundled scripts in correct order

**CSS Injection**

- Extracted via `MiniCssExtractPlugin`
- Injected as `<link>` tags

**Image Handling**

- Uses `compilation.getAssets()`
- Maps original image paths → emitted hashed files
- Rewrites `<img src="...">` accordingly

## Step 7: Emitting Final HTML

The final processed HTML is emitted using:

```javascript
compilation.emitAsset(name, new RawSource(html));
```

## Step 8: Cleanup

Temporary virtual modules created on disk are removed after the build.

## Current Capabilities

- Supports:
  - `<script>`
    `<link rel="stylesheet">`
    `<img>`
- Uses `resourceQuery` for scoped CSS handling
- Handles asset emission and mapping
- Generates final HTML with correct bundled outputs

## Limitations

This is a prototype and does not yet handle:

- Inline `<script>` or `<style>`
- Advanced chunk mapping (async/defer behavior)
- Dev server / HMR support
- Full HTML spec coverage

## Improvements Over Prototype

The current implementation improves upon the prototype by:

- Moving HTML parsing into a custom loader
- Eliminating filesystem-based virtual modules
- Integrating HTML directly into Webpack’s module graph
- Using module-based mapping instead of filename-based mapping

## Future Vision

The long-term goal is:

> This prototype demonstrates a pathway toward supporting HTML as an optional entry type within Webpack’s existing architecture.

If implemented in core:

- No need for extra plugin
- HTML becomes a first-class entry
- intuitive developer experience

## Conclusion

This project demonstrates that:

- HTML can act as an entry by transforming it into dependencies
- Webpack’s plugin system is powerful enough to achieve this without modifying core
- A production-ready implementation could integrate this directly into Webpack internals
