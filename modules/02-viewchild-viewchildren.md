# 02- `@ViewChild` & `@ViewChildren`

## DEMOS

- StackBlitz - [@ViewChild and @ViewChildren](https://stackblitz.com/edit/angular-ivy-hczcd2)

## Training

### Training 1: Using `@ViewChildren` to access a child elements

Create a component _HobbyComponent_ that uses `@ViewChildren` to access
all child elements of a specific type within the template. For example,
your component has multiple buttons, and use `@ViewChildren` to access all
of them so that you can add an event listener to each one.

### Training 2: Using `@ViewChildren` and `@ViewChild` to access a child element

Create a component _SpikerComponent_ that uses both `@ViewChild` and
`@ViewChildren` in combination to access specific and multiple child
elements within the template. For example, your component has a button
and multiple text inputs, and use `@ViewChild` to access the button and
`@ViewChildren` to access all of the text inputs. You could then use the
button to update the value of all text inputs.
