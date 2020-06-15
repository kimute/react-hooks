# @hoons/use-title

React Hook to update your document's title.

## Installation

#### yarn

`yarn add @hoons/use-title`

#### npm

`npm i @hoons/use-title`

## Usage

```js
import React from "react";
import useTitle from "@hoons/use-title";

function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title you want to use on your document | yes      |
