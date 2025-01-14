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
     * **getHTML()** - Returns outer html of current element
     * 
     * ### Parameters:
     * 
     * 
     * ### Returns
     * - Returns outer html of current element
    */
    getHTML() {
        return this.dom.map(e => e.outerHTML).join("")
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
     * - "html" (string | element): html or text to append
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    append(html) {
        if (typeof html === "string") {
            this.dom.forEach(e => e.insertAdjacentHTML("beforeend", html))
        } else if (html instanceof HTMLElement) {
            this.dom.forEach(e => e.appendChild(html))
        }
        return this
    }

    /**
     *  **prepend()** - Prepend html to element/s
     * 
     * ### Parameters:
     * - "html" (string | element): html or text to prepend
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    prepend(html) {
        if (typeof html === "string") {
            this.dom.forEach(e => e.insertAdjacentHTML("afterbegin", html))
        } else if (html instanceof HTMLElement) {
            this.dom.forEach(e => e.insertBefore(html, e.firstChild))
        }
        return this
    }

    /**
     *  **after()** - Insert html after the element/s
     * 
     * ### Parameters:
     * - "html" (string | element): html or text to insert
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    after(html) {
        if (typeof html === "string") {
            this.dom.forEach(e => e.insertAdjacentHTML("afterend", html))
        } else if (html instanceof HTMLElement) {
            this.dom.forEach(e => e.parentNode.insertBefore(html, e.nextSibling))
        }
        return this
    }

    /**
     *  **before()** - Insert html before the element/s
     * 
     * ### Parameters:
     * - "html" (string | element): html or text to insert
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining when setting the value.
     */
    before(html) {
        if (typeof html === "string") {
            this.dom.forEach(e => e.insertAdjacentHTML("beforebegin", html))
        } else if (html instanceof HTMLElement) {
            this.dom.forEach(e => e.parentNode.insertBefore(html, e))
        }
        return this
    }

    /**
     *  **remove()** - Removes element/s from DOM
     * 
     * ### Parameters:
     * - "selector" (string) [optional]: When provided, removes matching element's childs.
     * 
     * ### Returns:
     * - void.
     */
    remove(selector) {
        if (selector) {
            this.dom.forEach(e => e.querySelectorAll(selector).forEach(x => x.remove()))
        } else {
            this.dom.forEach(e => e.remove())
        }
    }

    /**
     *  **empty()** - Removes all child elements
     * 
     * ### Parameters:
     * Method does not accept parameters
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining
     */
    empty() {
        this.dom.forEach(e => e.innerHTML = "")
        return this
    }

    /**
     *  **wrap()** - Wraps current element with new DOM element
     * 
     * ### Parameters:
     * - "element" (string | Element ): Wrapper element, either a string representation or DOM element.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining
     * 
     * ### Example:
     * $(".important").wrap("p")
     */
    wrap(element) {
        if (typeof element === "string") {
            const newElement = document.createElement(element)
            this.before(newElement)
            const newLquery = new LQueryDOM("null")
            newLquery.dom = [newElement]
            this.dom.forEach(e => {
                newLquery.append(e)
            })
        } else if (element instanceof Document) {
            this.dom.forEach(e => {
                element.appendChild(e)
            })
        }
        return this
    }

    /**
     *  **clone()** - Clones current element/s
     * 
     * ### Parameters:
     * - "cloneEvents" (bool) [optional] - When set to true, also copies all events
     * 
     * ### Returns:
     * - Returns a cloned instance of the selected element/s
     */
    clone(cloneEvents = false) {
        const newLQueryDom = new LQueryDOM("null") // empty selector since we manually will asing this.dom
        newLQueryDom.dom = this.dom.map(e => e.cloneNode(true))
        if (cloneEvents) {
            this.dom.forEach((e, i) => {
                events.copyEvents(e, newLQueryDom.dom[i])
            })
        }
        return newLQueryDom
    }

    /**
     *  **replaceWith()** - Replaces currently selected element/s
     * 
     * ### Parameters:
     * - "newContent" (string, Element, LQuery) - Content that will replace current element*s
     * 
     * ### Returns:
     * - Returns instance of removed element.
     */
    replaceWith(newContent) {
        if (newContent instanceof LQueryDOM) {
            newContent.dom.forEach(e => {
                this.after(e)
            })
            this.remove()
        } else {
            this.dom.forEach(e => {
                e.replaceWith(newContent)
            })
        }
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
     * - Returns instance of "this" for method chaining.
     */
    on(type, fn) {
        this.dom.forEach(e => events.addEvent(e, type, fn))
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
     * - Returns instance of "this" for method chaining.
     */
    off(type, fn) {
        this.dom.forEach(e => events.removeEvent(e, type, fn))
        return this
    }

    /**
     *  **click()** - add event to run when element/s is clicked. When no argument is provided, programatically execute a click event.
     * 
     * ### Parameters:
     * - "fn" (function) [optional]: When provided, function to add as event.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining.
     */
    click(fn) {
        if (fn) {
            this.on("click", fn)
        } else {
            this.dom.forEach(e => e.dispatchEvent(new Event("click")))
        }
        return this
    }

    /**
     *  **dblclick()** - add event to run when element/s is double clicked. When no argument is provided, programatically execute a dobule click event.
     * 
     * ### Parameters:
     * - "fn" (function) [optional]: When provided, function to add as event.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining.
     */
    dblclick(fn) {
        if (fn) {
            this.on("dblclick", fn)
        } else {
            this.dom.forEach(e => e.dispatchEvent(new Event("dblclick")))
        }
        return this
    }

    /**
     *  **hover()** - add event to when the cursor enters the element/s and when it leaves.
     * 
     * ### Parameters:
     * - "fnOnHover" (function): function to add as event when mouse enters the element.
     * - "fnOnLeave" (function) [optional]: function to add as event when mouse leaves the element.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining.
     */
    hover(fnOnHover, fnOnLeave) {
        this.on("mouseenter", fnOnHover)
        if (fnOnLeave) this.on("mouseleave", fnOnLeave)
        return this
    }

    /**
     *  **focus()** - add event to run when element/s is focused. When no argument is provided, programatically execute a focused event.
     * 
     * ### Parameters:
     * - "fn" (function) [optional]: When provided, function to add as event.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining.
     */
    focus(fn) {
        if (fn) {
            this.on("focus", fn)
        }
        else {
            this.dom.forEach(e => e.dispatchEvent(new Event("focus")))
        }
        return this
    }

    /**
     *  **blur()** - add event to run when element looses focused. When no argument is provided, programatically execute a not:focused event.
     * 
     * ### Parameters:
     * - "fn" (function) [optional]: When provided, function to add as event.
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining.
     */
    blur(fn) {
        if (fn) {
            this.on("blur", fn)
        } else {
            this.dom.forEach(e => e.dispatchEvent(new Event("blur")))
        }
        return this
    }

    /**
     *  **trigger()** - Programatically triggers event.
     * 
     * ### Parameters:
     * - "type" (string): event type to trigger
     * 
     * ### Returns:
     * - Returns instance of "this" for method chaining.
     */
    trigger(type) {
        const event = new Event(type)
        this.dom.forEach(e => e.dispatchEvent(event))
        return this
    }
}

class eventTracker {
    constructor() {
        this.events = new Map() // Map gives better performance compared to Array.
    }

    addEvent(element, type, fn) {
        // Create entry if it does not exist.
        if (!this.events.has(element)) {
            this.events.set(element, [])
        }
        // Asign event object to entry value.
        this.events.get(element).push({ type: type, function: fn })
        // Add event listener
        element.addEventListener(type, fn)
    }

    removeEvent(element, type, fn) {
        if (this.events.has(element)) {
            // Get all entry values that does NOT contain the event object to delete.
            const eventsArray = this.events.get(element).filter(event =>
                !(event.type === type && event.function === fn)
            )
            // If result array is emtpy delete entry, in other case, replace current value with the arr that does not contain the deleted event.
            if (eventsArray.length > 0) {
                // Replace value.
                this.events.set(element, eventsArray)
            } else {
                // Delete entry.
                this.events.delete(element)
            }
            // Remove event listener.
            element.removeEventListener(type, fn)
        }
    }

    copyEvents(originalElement, newElement) {
        if (this.events.has(originalElement)) {
            const originalEvents = this.events.get(originalElement)
            originalEvents.forEach(event => {
                this.addEvent(newElement, event.type, event.function)
            })
        }
    }
}
const events = new eventTracker()