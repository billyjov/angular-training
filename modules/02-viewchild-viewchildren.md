# 02- `@ViewChild` & `@ViewChildren`

## DEMOS

- StackBlitz - [@ViewChild and @ViewChildren](https://stackblitz.com/edit/angular-ivy-hczcd2)

## Training

---

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

### BONUS: Combine `@ViewChild` and `@ViewChildren` to access a childs elements

Create a component that represents a dynamic form with multiple input
fields (_text, radio, checkbox, select, etc._).

Use `@ViewChildren` to access all input fields within the form so that you
can add validation to them. For example, you could use `@ViewChildren` to
access all input fields and then add a validation function that ensures
that each field is not empty and that it meets certain requirements
(e.g. _email address format_, _password strength_, etc.).

Use `@ViewChild` to access a specific button within the form. This button
will be used to submit the form.

Use the `@ViewChild` to add an event listener to the button that triggers
the validation function for all input fields when the button is clicked.
If any of the fields fail validation, display an error message next to the
field. If all fields pass validation, submit the form data to an API
endpoint for processing.

Create a service that will handle the form submission and return a response.

Use `@ViewChild` to access a specific element (e.g. a `div` or a `span`)
that will be used to display the response message.

- Use the `@ViewChild` to update the text of the response message element
  based on the response from the API endpoint. For example, if the
  submission is successful, display a message saying

  ```
  Form submitted successfully,
  ```

  and if it fails, display an error message.

**OPTIONAL:**

- Add some styling to the form and the response message element
  to make it look good

- Finally, use the component in a parent component and interact with it.

**NOTE**: This exercise should give you a good understanding of how to use
`@ViewChild` and `@ViewChildren` to access specific and multiple elements
within a template, and how to use these elements to add functionality to a component.

## 📰 Summary

`@ViewChild` and `@ViewChildren` are Angular decorators that allow you to
access and manipulate child elements within the template of a component.

Some use cases:

- Access the properties and methods of a child element, such as its value, text, or state.
- Add event listeners to a child element, such as a button click or a form submission.
- Update the properties and styles of a child element.
- Manipulate the child elements in some way, for example, show or hide them
- Help to validate the form input fields
- Use the child elements to perform some logic or calculations
