# Module 01- `@HostBinding` and `@HostListener`

## DEMOS

- StackBlitz - [@HostBinding and @Hostlistener](https://stackblitz.com/edit/angular-ivy-fbslkz)


## Training


### Training 1: Use `@HostBinding` to change the background color of a host element

- Create a new Angular component called
**ColorChanger**
- Add a _public_ property called **bgColor** to
the component with a default value of "white"
- Use the `@HostBinding` decorator to bind the **bgColor** property to the style  
**background-color** property of the host element
- Add a button to the component's template that when
clicked, changes the value of **bgColor** to a random color
- Use the component in a parent template and observe the background color of the host element changing when the button is clicked.


### Training 2: Using `@HostListener` to detect key presses

- Create a new Angular component called **HoverEffect**
- Add a _public_ property called **isHovered** to the component with a default value.
- Use the `@HostBinding` decorator to bind the **isHovered** property to the `background-color` property of the host element
- Use the `@HostListener` decorator to listen for the _mouseenter_ and _mouseleave_ events on the host element
- In the event handler functions, set the **isHovered** property to true or false respectively
- Use the component in a parent template and observe the background color of the host element changing when the mouse enters and leaves the element.

### BONUS:  Creating a custom directive that interacts with other directives

- Create a new Angular directive called **FancyTabs**
- Use the `@Directive` decorator to apply the directive to the `nav` elements with a specific CSS class in the application
- Use the `@ViewChildren` decorator  or other Angular techniques like `ElementRef` to get access to all the `a` elements inside the host element
- Add a property called _activeTab_ to the directive with a default value of _0_
- Use the `@HostListener` decorator to listen for the `click` event on the `a` elements. In the event handler function, set the _activeTab_ property to the index of the clicked element
- Use the `@HostBinding` decorator to bind the _activeTab_ property to the _border-bottom_ property of the host element. When _activeTab_ is set to a specific index, the border-bottom of the corresponding `a` element should be `2px solid purple`
- Use the directive in a parent template and observe the border-bottom of the `a` elements changing when they are clicked.


> **😉 Info:** The `@HostBinding` and `@HostListener` decorators are used to bind to the host element of a component. This is useful when you want to change the host element's properties or listen to events on the host element. The `@HostBinding` decorator is used to bind to the host element's properties and the `@HostListener` decorator is used to listen to events on the host element.

>**:warning: ATTENTION:** Note that this are simplified examples, in a real application you might want to use `ngClass` or `ngStyle` to change the style of the element, instead of using `@HostBinding` with the style property of the host element.

## 📰 Summary

- `@HostBinding` and `@HostListener` are used to bind to the host element of a component
