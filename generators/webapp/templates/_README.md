<%= projectName %>
==================
> Super cool project

Folder Structure
----------------
    +- app
    |   +- models
    |   +- views
    |   +- controllers
    |   +- plugins
    |   +- helpers
    |   +- shims
    |   |- app.js
    |   |- router.js
    |   |- main.js
    |   |- config.js
    |   \- index.html
    +- assets
    |   +- fonts
    |   +- images
    |   +- templates<% if (!useLess && !useSass) { %>
    |   +- css
    |       \- style.css<% } else if (useLess) { %>
    |   +- less
    |       |- reset.less
    |       \- style.less<% } else if (useSass) { %>
    |   +- sass
    |       |- reset.scss
    |       \- style.scss<% } %>
    +- config
    |   |- .csslintrc
    |   |- .eslintrc.js
    |   |- default.js
    |   \- karma.conf.js
    +- tasks
    |   |- build.js
    |   |- test.js
    |   \- main.js
    +- test
    |   +- data
    |   +- jasmine
    |       +- specs
    |   \- config.js
    |- GruntFile.js
    \- package.json

Grunt Tasks
-----------
- `grunt lint`
- `grunt linting`   _(watch task)_
- `grunt build`     _(transpile LESS, pre-compile templates and optimize JS into one file)_
- `grunt test`
- `grunt cover`
- `grunt covering`  _(watch task)_
- `grunt serve`     _(watch task)_ **[default task]**<% if (use.jsinspect) { %>
- `grunt inspect`   _(detect copy-pasted and structurally similar code)_<% } %><% if (use.a11y) { %>
- `grunt aria`      _(lint HTML files for accessibility)_<% } %>
- `grunt docs`      _(generate documentation in `./reports/docs` and living styleguide in `./styleguide`)_
- `grunt plato`     _(generate plato report in `./reports/plato`)_
- `grunt reports`   _(generate code coverage and plato reports)_