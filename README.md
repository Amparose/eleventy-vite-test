# Minimal EleventyVitePlugin example issue

This repo demonstrates the issue I'm having where Vite isn't building CSS/JS/images to the paths I want.

Goal structure for `dst/`:

```shell
dst/
├── css/
│   └── main-D-dH1e70.css
├── images/
│   └── cat-ibuzatud.jpg
├── js/
│   └── main-BWk3zy5n.js
├── favicon.ico
├── index.html
└── test/
    └── index.html
```

What I get instead is:

```shell
dst/
├── assets/
│   ├── cat-ibuzatud.jpg
│   ├── main-BWk3zy5n.js
│   └── main-D-dH1e70.css
├── favicon.ico
├── index.html
└── test/
    └── index.html
```
