# `Label`

📣 For more context and visual guides relating to `Label` usage on the [Source Design System website](https://www.theguardian.design)

## Install

```sh
$ yarn add @guardian/src-label
```

## Use

```tsx
import { Label } from "@guardian/src-label"

const Form = () => (
    <form>
        <Label text="First name" error="Enter your first name below">
            <input type="text" />
        </Label>
    </form>
)
```

## Props

### `text`

**`string`**

The label text

### `supporting`

**`string`**

Additional text that appears below the label

### `optional`

**`boolean`** _= "false"_

Adds the word "Optional" after the label.

### `error`

**`string`**

Appears as an inline error message below the label and supporting text.

### `success`

**`string`**

Appears as an inline error message below the label and supporting text. This prop should not have a
value set at the same time as the error prop. In the event that both are set, errors take precedence.

### `as`

**`"label" | "legend"`** _="label"_

The HTML element that the Label component gets rendered as. By default it is `<label>`, but `<legend>`
is also available for when labelling a fieldset.

## Supported themes

### Standard

-   `light`
