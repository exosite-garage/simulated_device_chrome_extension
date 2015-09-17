# Exosite Simulated Device Chrome Extension
Uses node.js, node-onep, and browserify to work as a test device making calls to OneP as a Chrome extension.

## Format
- `popup.html` is the front-end html for the extension
- `main.js` is the front-end JavaScript where you can write your API calls from
- the extension actually uses `bundle.js` as the front-end JavaScript, which can be generated with `browserify main.js -o bundle.js`

## Notes
- the version of `request` that node-onep currently uses is incompatible with browserify. You must update the version in `/node_modules/onep/package.json` to at least ~2.62.0 and reinstall


### Sorry for the rushed readme! PRE-ALPHA software!!!