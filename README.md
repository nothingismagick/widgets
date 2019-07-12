# SourceCred Widgets

A Node.js based set of tools to interpret SourceCred scores and generate widgets.
For example to use in README's or as webpage static assets.

## Example usage

```sh
# 1. Use the main sourcecred's score feature to export scores to a file.
export SOURCECRED_GITHUB_TOKEN=YOUR_GITHUB_TOKEN
node PATH_TO_SOURCECRED/bin/sourcecred.js load sourcecred/sourcecred
node PATH_TO_SOURCECRED/bin/sourcecred.js scores sourcecred/sourcecred > scores.json

# 2. Install this package's dependencies.
yarn

# 3. Generate a contributor wall SVG.
./bin/contributor-wall-svg.js < scores.json > contributors.svg
```
