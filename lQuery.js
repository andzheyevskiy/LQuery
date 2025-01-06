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
            return this.dom.map(e => e.innerHTML)
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
            return this.dom.map(e => e.textContent)
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
            return this.dom.map(e => e.getAttribute("value"))
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
     * - Returns the instance (`this`) for method chaining when setting the value.
     * - Returns an array of inner values matching the name of the attibute of the element/s when getting the value.
     * */
    attr(name, value) {
        if (name && value) {
            this.dom.forEach(e => e.setAttribute(name, value))
            return this
        } else if (name) {
            return this.dom.map(e => e.getAttribute(name))
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
}
