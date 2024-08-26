
# Portfolio

My basic personal website built with SakuraCSS and AstroJS


## Run Locally

Clone the project

```bash
  git clone https://github.com/meizuflux/portfolio
```

Go to the project directory

```bash
  cd portfolio
```

Install dependencies

```bash
  pnpm install
```

Start the dev server

```bash
  pnpm run dev
```


## Deployment

This website runs on Github pages, and on push uses an Action to build and deploy the latest changes automatically.

Build the site

```sh
  pnpm run build
```

Start a generic webserver

```sh
  python -m http.server 8000 --directory dist
```



## License

[MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/)

