# LQuery

LQuery is a clean-room reimplementation of jQuery, developed from scratch using ES6 standards to replicate its functionality.

## Usage

### $(selector)

The `$(selector)` function is used to select DOM elements and perform various operations on them. Below are some of the methods you can use with the selected elements.

- **ready(fn)**
  - **Description:** Runs the specified function once the DOM is loaded.
  - **Parameters:**
    - `fn` (function): Function to run once the DOM is loaded.
  - **Returns:**
    - void

- **getHTML()**
  - **Description:** Returns the outer HTML of the selected elements.
  - **Returns:**
    - `string`: Outer HTML of the selected elements.

- **html([html])**
  - **Description:** Gets or sets the HTML content of the selected elements. When `html` parameter is provided, it sets the inner HTML of the elements; otherwise, it gets the inner HTML.
  - **Parameters:**
    - `html` (string) [Optional]: If provided, sets the inner HTML of the selected elements.
  - **Returns:**
    - `this`: Instance for method chaining when setting the value.
    - `string | string[]`: Inner HTML value(s) of the selected elements when getting the value.

- **text([text])**
  - **Description:** Gets or sets the text content of the selected elements. When `text` parameter is provided, it sets the inner text of the elements; otherwise, it gets the inner text.
  - **Parameters:**
    - `text` (string) [Optional]: If provided, sets the inner text of the selected elements.
  - **Returns:**
    - `this`: Instance for method chaining when setting the value.
    - `string | string[]`: Inner text value(s) of the selected elements when getting the value.

- **val([value])**
  - **Description:** Gets or sets the value of the selected elements. When `value` parameter is provided, it sets the value of the elements; otherwise, it gets the value.
  - **Parameters:**
    - `value` (string) [Optional]: If provided, sets the value of the selected elements.
  - **Returns:**
    - `this`: Instance for method chaining when setting the value.
    - `string | string[]`: Value(s) of the selected elements when getting the value.

- **attr(name, [value])**
  - **Description:** Gets or sets the attribute of the selected elements. When `value` parameter is provided, it sets the attribute to the specified value; otherwise, it gets the attribute value.
  - **Parameters:**
    - `name` (string): The name of the attribute to get or set.
    - `value` (string) [Optional]: If provided, sets the attribute to the specified value.
  - **Returns:**
    - `this`: Instance for method chaining when setting the value.
    - `string | string[]`: Attribute value(s) of the selected elements when getting the value.

- **css(...args)**
  - **Description:** Gets or sets the CSS styles of the selected elements. When two arguments are provided, the first is the CSS property name and the second is the value to set for that property. When an object is provided, the properties of the object are applied as CSS styles to the elements.
  - **Parameters:**
    - `args` (string, string) [Optional]: When two arguments are provided, the first is the CSS property name and the second is the value to set for that property.
    - `args` (object) [Optional]: When an object is provided, the properties of the object are applied as CSS styles to the elements.
  - **Returns:**
    - `this`: Instance for method chaining when setting styles.

- **append(html)**
  - **Description:** Appends the specified HTML to the selected elements.
  - **Parameters:**
    - `html` (string | HTMLElement): HTML or text to append to the selected elements.
  - **Returns:**
    - `this`: Instance for method chaining.

- **prepend(html)**
  - **Description:** Prepends the specified HTML to the selected elements.
  - **Parameters:**
    - `html` (string | HTMLElement): HTML or text to prepend to the selected elements.
  - **Returns:**
    - `this`: Instance for method chaining.

- **after(html)**
  - **Description:** Inserts the specified HTML after the selected elements.
  - **Parameters:**
    - `html` (string | HTMLElement): HTML or text to insert after the selected elements.
  - **Returns:**
    - `this`: Instance for method chaining.

- **before(html)**
  - **Description:** Inserts the specified HTML before the selected elements.
  - **Parameters:**
    - `html` (string | HTMLElement): HTML or text to insert before the selected elements.
  - **Returns:**
    - `this`: Instance for method chaining.

- **remove([selector])**
  - **Description:** Removes the selected elements from the DOM. If a `selector` parameter is provided, removes matching child elements.
  - **Parameters:**
    - `selector` (string) [Optional]: When provided, removes matching child elements.
  - **Returns:**
    - void

- **empty()**
  - **Description:** Removes all child elements of the selected elements.
  - **Returns:**
    - `this`: Instance for method chaining.

- **wrap(element)**
  - **Description:** Wraps the selected elements with the specified DOM element.
  - **Parameters:**
    - `element` (string | HTMLElement): Wrapper element, either a string representation or a DOM element.
  - **Returns:**
    - `this`: Instance for method chaining.

- **clone([cloneEvents])**
  - **Description:** Clones the selected elements. If the `cloneEvents` parameter is set to true, also copies all events.
  - **Parameters:**
    - `cloneEvents` (boolean) [Optional]: When set to true, also copies all events.
  - **Returns:**
    - `LQueryDOM`: Cloned instance of the selected elements.

- **replaceWith(newContent)**
  - **Description:** Replaces the selected elements with the specified content.
  - **Parameters:**
    - `newContent` (string | HTMLElement | LQueryDOM): Content that will replace the selected elements.
  - **Returns:**
    - `this`: Instance for method chaining.

- **on(type, fn)**
  - **Description:** Adds an event listener to the selected elements.
  - **Parameters:**
    - `type` (string): Event listener type to add.
    - `fn` (function): Function to add as an event listener.
  - **Returns:**
    - `this`: Instance for method chaining.

- **off(type, fn)**
  - **Description:** Removes an event listener from the selected elements.
  - **Parameters:**
    - `type` (string): Event listener type to remove.
    - `fn` (function): Named function to remove from the listener.
  - **Returns:**
    - `this`: Instance for method chaining.

- **click([fn])**
  - **Description:** Adds a click event listener to the selected elements or triggers a click event if no function is provided.
  - **Parameters:**
    - `fn` (function) [Optional]: Function to add as a click event listener.
  - **Returns:**
    - `this`: Instance for method chaining.

- **dblclick([fn])**
  - **Description:** Adds a double-click event listener to the selected elements or triggers a double-click event if no function is provided.
  - **Parameters:**
    - `fn` (function) [Optional]: Function to add as a double-click event listener.
  - **Returns:**
    - `this`: Instance for method chaining.

- **hover(fnOnHover, [fnOnLeave])**
  - **Description:** Adds event listeners to the selected elements for mouse enter and leave events. If `fnOnLeave` is provided, it adds the event listener for the mouse leave event.
  - **Parameters:**
    - `fnOnHover` (function): Function to add as a hover event listener when the mouse enters the element.
    - `fnOnLeave` (function) [Optional]: Function to add as a hover event listener when the mouse leaves the element.
  - **Returns:**
    - `this`: Instance for method chaining.

- **focus([fn])**
  - **Description:** Adds a focus event listener to the selected elements or triggers a focus event if no function is provided.
  - **Parameters:**
    - `fn` (function) [Optional]: Function to add as a focus event listener.
  - **Returns:**
    - `this`: Instance for method chaining.

- **blur([fn])**
  - **Description:** Adds a blur event listener to the selected elements or triggers a blur event if no function is provided.
  - **Parameters:**
    - `fn` (function) [Optional]: Function to add as a blur event listener.
  - **Returns:**
    - `this`: Instance for method chaining.

- **trigger(type)**
  - **Description:** Programmatically triggers the specified event on the selected elements.
  - **Parameters:**
    - `type` (string): Event type to trigger.
  - **Returns:**
    - `this`: Instance for method chaining.

- **animate(animation, [duration], [easing], [complete])**
  - **Description:** Adds an animation to the selected elements. The `animation` parameter specifies the end values, `duration` specifies the animation duration, `easing` specifies the easing function, and `complete` is a function to execute when the animation is done.
  - **Parameters:**
    - `animation` (object): Object containing the end values of the animation.
    - `duration` (number | string) [Optional]: Duration of the animation. Default is 400ms.
    - `easing` (string) [Optional]: Easing applied to the animation. Default is "linear".
    - `complete` (function) [Optional]: Function to execute when the animation is done.
  - **Returns:**
    - `this`: Instance for method chaining.

- **fadeIn([duration], [complete])**
  - **Description:** Adds a fade-in animation to the selected elements. The `duration` parameter specifies the duration of the fade-in animation, and `complete` is a function to execute when the animation is done.
  - **Parameters:**
    - `duration` (number | string) [Optional]: Duration of the fade-in animation. Default is 400ms.
    - `complete` (function) [Optional]: Function to execute when the animation is done.
  - **Returns:**
    - `this`: Instance for method chaining.

- **fadeOut([duration], [complete])**
  - **Description:** Adds a fade-out animation to the selected elements. The `duration` parameter specifies the duration of the fade-out animation, and `complete` is a function to execute when the animation is done.
  - **Parameters:**
    - `duration` (number | string) [Optional]: Duration of the fade-out animation. Default is 400ms.
    - `complete` (function) [Optional]: Function to execute when the animation is done.
  - **Returns:**
    - `this`: Instance for method chaining.

- **slideDown([duration], [complete])**
  - **Description:** Adds a slide-down animation to the selected elements. The `duration` parameter specifies the duration of the slide-down animation, and `complete` is a function to execute when the animation is done.
  - **Parameters:**
    - `duration` (number | string) [Optional]: Duration of the slide-down animation. Default is 400ms.
    - `complete` (function) [Optional]: Function to execute when the animation is done.
  - **Returns:**
    - `this`: Instance for method chaining.

- **slideUp([duration], [complete])**
  - **Description:** Adds a slide-up animation to the selected elements. The `duration` parameter specifies the duration of the slide-up animation, and `complete` is a function to execute when the animation is done.
  - **Parameters:**
    - `duration` (number | string) [Optional]: Duration of the slide-up animation. Default is 400ms.
    - `complete` (function) [Optional]: Function to execute when the animation is done.
  - **Returns:**
    - `this`: Instance for method chaining.

### $.method

LQuery also provides several utility methods that can be used without selecting any DOM elements.

- **$.ajax(url, options)**
  - **Description:** Executes an asynchronous AJAX request with customizable options.
  - **Parameters:**
    - `url` (string) [Optional]: URL of the AJAX request.
    - `options` (object) [Optional]: Object containing the request options.
      - `accepts` (object): A set of key/value pairs to send in the Accept request header.
      - `cache` (boolean): When false, sets fetch cache options to "no-store".
      - `complete` (function): Function to run once the fetch operation is complete. Uses `(error, data) => {}` callback.
      - `contentType` (string): Appends value to "Content-Type" header.
      - `context` (any): Defines `this` when running various functions such as `dataFilter()`, `statusCode()`, `success()`, `error()`, and `complete()`.
      - `crossDomain` (boolean): When true, sets fetch mode to "cors".
      - `data` (string | object): Value to be used as the fetch body. For "GET" method, it will be used as URL parameters.
      - `dataFilter` (function): Function to handle the received data from the request.
      - `dataType` (string): Type of data expected back from the server.
      - `error` (function): Function to run when the operation fails. Uses `(error) => {}` callback.
      - `headers` (object): Additional custom headers to be sent with the request.
      - `method` (string): Method to use in the fetch request. Default is "GET".
      - `statusCode` (object): A set of key/value pairs where the key is the status code and the value is the function to run when the status of the request matches.
      - `success` (function): Function to run when the operation succeeds. Uses `(data) => {}` callback.
      - `timeout` (number): Set a timeout (in ms) for the request.
      - `url` (string): URL of the fetch request.
  - **Returns:**
    - `Ajax`: Instance of the AJAX request.

- **$.get(url, options)**
  - **Description:** Executes an asynchronous GET request with customizable options.
  - **Parameters:**
    - `url` (string) [Optional]: URL of the AJAX request.
    - `options` (object) [Optional]: Object containing the request options.
  - **Returns:**
    - `Ajax`: Instance of the AJAX request.

- **$.post(url, options)**
  - **Description:** Executes an asynchronous POST request with customizable options.
  - **Parameters:**
    - `url` (string) [Optional]: URL of the AJAX request.
    - `options` (object) [Optional]: Object containing the request options.
  - **Returns:**
    - `Ajax`: Instance of the AJAX request.

- **$.put(url, options)**
  - **Description:** Executes an asynchronous PUT request with customizable options.
  - **Parameters:**
    - `url` (string) [Optional]: URL of the AJAX request.
    - `options` (object) [Optional]: Object containing the request options.
  - **Returns:**
    - `Ajax`: Instance of the AJAX request.

- **$.delete(url, options)**
  - **Description:** Executes an asynchronous DELETE request with customizable options.
  - **Parameters:**
    - `url` (string) [Optional]: URL of the AJAX request.
    - `options` (object) [Optional]: Object containing the request options.
  - **Returns:**
    - `Ajax`: Instance of the AJAX request.

- **$.each(item, fn)**
  - **Description:** Iterates through an Array or an Object and runs the specified function on each element or entry.
  - **Parameters:**
    - `item` (array | object): The item (array or object) to iterate through.
    - `fn` (function): Function to run on each iteration. For an array, the function receives the element. For an object, the function receives the key and value of each entry.
  - **Returns:**
    - void

- **$.map(item, fn)**
  - **Description:** Iterates through an Array or an Object and returns the result of the function applied to each element or entry.
  - **Parameters:**
    - `item` (array | object): The item (array or object) to iterate through.
    - `fn` (function): Function to run on each iteration. For an array, the function receives the element. For an object, the function receives the key and value of each entry.
  - **Returns:**
    - `array`: Array of the results of the function applied to each element.

- **$.grep(item, fn, [invert])**
  - **Description:** Iterates through an Array or an Object and filters it based on a condition specified by the function. If `invert` is true, the array is reversed before applying the filter.
  - **Parameters:**
    - `item` (array | object): The item (array or object) to iterate through.
    - `fn` (function): Filter function to run on each iteration. This function should return a boolean indicating if the item should be included in the result.
    - `invert` (boolean) [Optional]: If true, the array is reversed before applying the filter. Default is false.
  - **Returns:**
    - `array`: Array of filtered items.

- **$.extend(deep, target, ...objects)**
  - **Description:** Merges a set of objects into one. If `deep` is true, the merge is deep (nested objects are merged); otherwise, it is shallow.
  - **Parameters:**
    - `deep` (boolean): Specifies if the merge should be deep (nested objects are merged). Default is false (shallow merge).
    - `target` (object): The target object to merge the other objects into.
    - `...objects` (object): The objects to be merged into the target object.
  - **Returns:**
    - `object`: Merged object.

## License

This project is licensed under the MIT License.