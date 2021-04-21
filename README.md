## Setup

## Styled Components

VS-Extension

vscode-styled-components

Regural Setup

```jsx
import styled from 'styled-components'
const NameOfElement = styled.htmlElement`
your
styles
go
here
`
```

Global Styles

```jsx
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
your
global
styles
go here
`
// wrap root element
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}

Both files
- gatsby-browser.js
- gatsby-ssr.js

```

## Airtable

[airtable](https://airtable.com/invite/r/h4p0v9Vg)

## env variables

gatsby-config

```js
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
```

#### ROOT!!!!!!!!!!!!!!!

.env.development

## Algolia

[algolia](https://www.algolia.com/);

## Project Steps

- cover setup
- styled components global css
- basic gatsby background image
- basic navbar
- about
- airtable
- connect to airtable
- env vars
