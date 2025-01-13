const $ = function (query) {
    if (query) {
        return new LQueryDOM(query)
    }
}

class LQueryDOM {
    constructor(query) {
        this.dom = [...document.querySelectorAll(query)]
    }

    /**
     *  **$(document).ready()** - Runs inside code after DOM is loaded.
     * 
     * ### Parameters:
     * - "fn" (function): function to run once the DOM is loaded.
     * 
     * ### Returns:
     * - void.
     */
    ready(fn) {
        if (this.dom.length === 1 && this.dom[0] instanceof Document) {
            document.addEventListener("DOMContentLoaded", fn)
        }
    }

    /**
     * **html()** - Get or set the html contents of the element/s.
     * 
     * ### Parameters:
     * - "hmtl" (string)[Optional]: If provided, sets the inner HTML of the element/s.
     * 
     * ### Returns
     * - Returns instance of "this" for method chaining when setting the value.
     * - Returns an array of inner HTML values of the element/s when getting the value.
    */
    html(html) {
        if (html) {
            this.dom.forEach(e => e.innerHTML = html)
            return this
        } else {
            const result = this.dom.map(e => e.innerHTML)
            if (result.length === 1) {
                return result[0]
            } else {
                return result
            }
        }
    }

    /**
     * **text()** - Get or set the text contents of the element/s.
     * 
     * ### Parameters: 
     * - "text" (string)[Optional]: If provided, sets inner text of the element/s.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     * - Returns an array of inner text values of the element/s when getting the value.
    */
    text(text) {
        if (text) {
            this.dom.forEach(e => e.textContent = text)
            return this
        } else {
            const result = this.dom.map(e => e.textContent)
            if (result.length === 1) {
                return result[0]
            } else {
                return result
            }
        }
    }

    /**
     * **val()** - Get or set values of the element/s.
     * 
     * ### Parameters:
     * - "value" (string)[Optional]: If provided sets the value attribute of the element/s.
     * 
     * ### Returns: 
     * - Returns instance of "this" for method chaining when setting the value.
     * - Returns an array of inner values of the element/s when getting the value.
    */
    val(value) {
        if (value) {
            this.dom.forEach(e => {
                if (e.tagName === 'INPUT' || e.tagName === 'TEXTAREA' || e.tagName === 'SELECT') {
                    e.value = value
                } else {
                    e.setAttribute("value", value)
                }
            })
            return this
        } else {
            const result = this.dom.map(e => e.getAttribute("value"))
            if (result.length === 1) {
                return result[0]
            } else {
                return result
            }
        }
    }

    /**
     * **attr()** - Get or set attribute of the element/s.
     * 
     * ### Parameters:
     * - "name" (string): The name of the attribute to get or set.
     * - `value` (string) [Optional]: If provided, sets the attribute to the specified value for the element/s.
     * 
     * ### Returns: 
     * - Returns the instance "this" for method chaining when setting the value.
     * - Returns an array of inner values matching the name of the attibute of the element/s when getting the value.
     * */
    attr(name, value) {
        if (name && value) {
            this.dom.forEach(e => e.setAttribute(name, value))
            return this
        } else if (name) {
            const result = this.dom.map(e => e.getAttribute(name))
            if (result.length === 1) {
                return result[0]
            } else {
                return result
            }
        } else {
            return this
        }
    }

    /**
     * **css()** - Get or set CSS styles for the element/s.
     * 
     * ### Parameters:
     * - `args` (string, string) [optional]: When two arguments are provided, the first is the CSS property name and the second is the value to set for that property.
     * - `args` (object) [optional]: When an object is provided, the properties of the object are applied as CSS styles to the elements.
     *
     * ### Returns:
     * - Returns the instance (`this`) for method chaining when setting styles.
     */
    css(...args) {
        if (args.length === 2) {
            this.dom.forEach(e => e.style[args[0]] = args[1])
            return this
        } else if (typeof args[0] === "object") {
            for (const prop in args[0]) {
                if (args[0].hasOwnProperty(prop)) {
                    this.dom.forEach(e => e.style[prop] = args[0][prop])
                }
            }
            return this
        } else {
            return this
        }
    }

    /**
     *  **append()** - Append html to element/s
     * 
     * ### Parameters:
     * - "html" (string): html or text to append
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    append(html) {
        this.dom.forEach(e => e.insertAdjacentHTML("beforeend", html))
        return this
    }

    /**
     *  **prepend()** - Prepend html to element/s
     * 
     * ### Parameters:
     * - "html" (string): html or text to prepend
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    prepend(html) {
        this.dom.forEach(e => e.insertAdjacentHTML("afterbegin", html))
        return this
    }

    /**
     *  **after()** - Insert html after the element/s
     * 
     * ### Parameters:
     * - "html" (string): html or text to insert
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    after(html) {
        this.dom.forEach(e => e.insertAdjacentHTML("afterend", html))
        return this
    }

    /**
     *  **before()** - Insert html before the element/s
     * 
     * ### Parameters:
     * - "html" (string): html or text to insert
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    before(html) {
        this.dom.forEach(e => e.insertAdjacentHTML("beforebegin", html))
        return this
    }

    /**
     *  **on()** - Adds event to the element/s
     * 
     * ### Parameters:
     * - "type" (string): event listener type to add.
     * - "fn" (function): function to add as event.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    on(type, fn) {
        this.dom.forEach(e => e.addEventListener(type, fn))
        return this
    }

    /**
     *  **off()** - Removes event from the element/s.
     * 
     * ### Parameters:
     * - "type" (string): event listener type to remove.
     * - "fn" (function): named function to remove from listener.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    off(type, fn) {
        this.dom.forEach(e => e.removeEventListener(type, fn))
        return this
    }

    /**
     *  **click()** - add event to run when element is clicked
     * 
     * ### Parameters:
     * - "fn" (function): function to add as event.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    click(fn) {
        this.dom.forEach(e => e.addEventListener("click", fn))
        return this
    }

    /**
     *  **dblclick()** - add event to run when element is double clicked
     * 
     * ### Parameters:
     * - "fn" (function): function to add as event.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    dblclick(fn) {
        this.dom.forEach(e => e.addEventListener("dblclick", fn))
        return this
    }

    /**
     *  **hover()** - add event to when the cursor enters the elements and when it leaves.
     * 
     * ### Parameters:
     * - "fnOnHover" (function): function to add as event when mouse enters the element.
     * - "fnOnLeave" (function) [optional]: function to add as event when mouse leaves the element.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    hover(fnOnHover, fnOnLeave) {
        this.dom.forEach(e => {
            e.addEventListener("mouseenter", fnOnHover)
            if (fnOnLeave) {
                e.addEventListener("mouseleave", fnOnLeave)
            }
        })
        return this
    }

    /**
     *  **focus()** - add event to run when element is focused.
     * 
     * ### Parameters:
     * - "fn" (function): function to add as event.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    focus(fn) {
        this.dom.forEach(e => e.addEventListener("focus", fn))
        return this
    }

    /**
     *  **blur()** - add event to run when element looses focused.
     * 
     * ### Parameters:
     * - "fn" (function): function to add as event.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    blur(fn) {
        this.dom.forEach(e => e.addEventListener("blur", fn))
        return this
    }

}
