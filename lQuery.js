const $ = (function (query) {


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
                    global.copyEvents(e, newLQueryDom.dom[i])
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
            this.dom.forEach(e => global.addEvent(e, type, fn))
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
            this.dom.forEach(e => global.removeEvent(e, type, fn))
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

        /**
         *  **animate()** - Add animation to element
         * 
         * ### Parameters:
         * - "animation" (object): object containing the end values.
         * - "duration" (number | string) [optional]: duration of animation, number in case of ms, string in case of manual specification(ex: 1s, 1000ms). default: 400
         * - "easing" (string) [optional]: easing aplied to the animation. default: "linear"
         * - "complete" (function) [optional]: function to execute when animation is done.
         * 
         * ### Returns:
         * - Returns instance of "this" for method chaining.
         */
        animate(animation, duration = "400ms", easing = "linear", complete) {
            global.addAnimation(this.dom, animation, duration, easing)
            const durationinMS = utils.convertToMs(duration)

            if (complete && typeof complete === "function") {
                setTimeout(() => { complete.call(this) }, durationinMS)
            }

            return this
        }

        /**
         *  **fadeIn()** - Add fade in animation to element/s
         * 
         * ### Parameters:
         * - "duration" (number | string) [optional]: duration of animation, number in case of ms, string in case of manual specification(ex: 1s, 1000ms). default: 400
         * - "complete" (function) [optional]: function to execute when animation is done.
         * 
         * ### Returns:
         * - Returns instance of "this" for method chaining.
         */
        fadeIn(duration = "400ms", complete) {
            global.addFadeIn(this.dom, duration, "linear")
            const durationinMS = utils.convertToMs(duration)

            if (complete && typeof complete === "function") {
                setTimeout(() => { complete.call(this) }, durationinMS)
            }

            return this
        }

        /**
         *  **fadeOut()** - Add fade out animation to element/s
         * 
         * ### Parameters:
         * - "duration" (number | string) [optional]: duration of animation, number in case of ms, string in case of manual specification(ex: 1s, 1000ms). default: 400
         * - "complete" (function) [optional]: function to execute when animation is done.
         * 
         * ### Returns:
         * - Returns instance of "this" for method chaining.
         */
        fadeOut(duration = "400ms", complete) {
            global.addFadeOut(this.dom, duration, "linear")
            const durationinMS = utils.convertToMs(duration)

            if (complete && typeof complete === "function") {
                setTimeout(() => { complete.call(this) }, durationinMS)
            }

            return this
        }
        /**
         *  **slideDown()** - Add slide down animation to element/s
         * 
         * ### Parameters:
         * - "duration" (number | string) [optional]: duration of animation, number in case of ms, string in case of manual specification(ex: 1s, 1000ms). default: 400
         * - "complete" (function) [optional]: function to execute when animation is done.
         * 
         * ### Returns:
         * - Returns instance of "this" for method chaining.
         */
        slideDown(duration = "400ms", complete) {
            global.addSlideDown(this.dom, duration, "linear")
            const durationinMS = utils.convertToMs(duration)

            if (complete && typeof complete === "function") {
                setTimeout(() => { complete.call(this) }, durationinMS)
            }

            return this
        }
        /**
         *  **slideUp()** - Add slide up animation to element/s
         * 
         * ### Parameters:
         * - "duration" (number | string) [optional]: duration of animation, number in case of ms, string in case of manual specification(ex: 1s, 1000ms). default: 400
         * - "complete" (function) [optional]: function to execute when animation is done.
         * 
         * ### Returns:
         * - Returns instance of "this" for method chaining.
         */
        slideUp(duration = "400ms", complete) {
            global.addSlideUp(this.dom, duration, "linear")
            const durationinMS = utils.convertToMs(duration)

            if (complete && typeof complete === "function") {
                setTimeout(() => { complete.call(this) }, durationinMS)
            }

            return this
        }


    }

    class globalTracker {
        constructor() {
            this.events = new Map() // Map gives better performance compared to Array.
            this.animationSeq = 0
            this.animations = {
                fadeIn: {
                    name: "LQueryAnimationFadeIn",
                    isIncluded: false,
                    css: "@keyframes LQueryAnimationFadeIn {from {opacity: 0;} to{opacity: 1;}}"

                },
                fadeOut: {
                    name: "LQueryAnimationFadeOut",
                    isIncluded: false,
                    css: "@keyframes LQueryAnimationFadeOut {from {opacity: 1;} to{opacity: 0;}}"
                },
                slideDown: {
                    name: "LQueryAnimationSlideDown",
                    isIncluded: false,
                    css: "@keyframes LQueryAnimationSlideDown { from {transform: translateY(-100%);} to {transform: translateY(0);}}"

                },
                slideUp: {
                    name: "LQueryAnimationSlideUp",
                    isIncluded: false,
                    css: "@keyframes LQueryAnimationSlideUp { from {transform: translateY(100%);} to {transform: translateY(0);}}"
                }
            }
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

        getStyle() {
            const doesExist = document.querySelector("style")
            if (!doesExist) {
                const styleElement = document.createElement("style")
                document.querySelector("head").appendChild(styleElement)
                return styleElement
            } else {
                return doesExist
            }
        }

        getAnimationName() {
            return `LQueryAnimation${this.animationSeq++}`
        }

        addAnimation(elements, animation, duration, easing) {
            const durationinMS = utils.convertToMs(duration)
            const animationName = this.getAnimationName()
            const formatted = Object.entries(animation)
                .map(([key, value]) => `${key}: ${value}`)
                .join("; ")
            const animationStr = `@keyframes ${animationName} { to {${formatted}}}`
            const inlineToAppend = `${animationName} ${durationinMS}ms ${easing} forwards`
            this.getStyle().append(animationStr)
            elements.forEach(e => {
                const finalStr = e.style.animation ? `${e.style.animation},${inlineToAppend}` : inlineToAppend
                e.style.animation = finalStr
            })
        }

        addFadeIn(element, duration, easing) {
            const durationinMS = utils.convertToMs(duration)
            const animationName = this.animations.fadeIn.name
            const inlineToAppend = `${animationName} ${durationinMS}ms ${easing} forwards`

            if (!this.animations.fadeIn.isIncluded) {
                this.getStyle().append(this.animations.fadeIn.css)
                this.animations.fadeIn.isIncluded = true
            }

            element.forEach(e => {
                const finalStr = e.style.animation ? `${e.style.animation},${inlineToAppend}` : inlineToAppend
                e.style.animation = finalStr
            })
        }

        addFadeOut(element, duration, easing) {
            const durationinMS = utils.convertToMs(duration)
            const animationName = this.animations.fadeOut.name
            const inlineToAppend = `${animationName} ${durationinMS}ms ${easing} forwards`

            if (!this.animations.fadeOut.isIncluded) {
                this.getStyle().append(this.animations.fadeOut.css)
                this.animations.fadeOut.isIncluded = true
            }

            element.forEach(e => {
                const finalStr = e.style.animation ? `${e.style.animation},${inlineToAppend}` : inlineToAppend
                e.style.animation = finalStr
            })
        }

        addSlideDown(element, duration, easing) {
            const durationinMS = utils.convertToMs(duration)
            const animationName = this.animations.slideDown.name
            const inlineToAppend = `${animationName} ${durationinMS}ms ${easing} forwards`

            if (!this.animations.slideDown.isIncluded) {
                this.getStyle().append(this.animations.slideDown.css)
                this.animations.slideDown.isIncluded = true
            }

            element.forEach(e => {
                const finalStr = e.style.animation ? `${e.style.animation},${inlineToAppend}` : inlineToAppend
                e.style.animation = finalStr
            })
        }

        addSlideUp(element, duration, easing) {
            const durationinMS = utils.convertToMs(duration)
            const animationName = this.animations.slideUp.name
            const inlineToAppend = `${animationName} ${durationinMS}ms ${easing} forwards`

            if (!this.animations.slideUp.isIncluded) {
                this.getStyle().append(this.animations.slideUp.css)
                this.animations.slideUp.isIncluded = true
            }

            element.forEach(e => {
                const finalStr = e.style.animation ? `${e.style.animation},${inlineToAppend}` : inlineToAppend
                e.style.animation = finalStr
            })
        }


    }
    const global = new globalTracker()

    const utils = {
        convertToMs: function (string) {
            if (typeof string === "number") {
                return string
            } else if (string.endsWith("ms")) {
                return parseInt(string, 10)
            } else if (string.endsWith("s")) {
                return parseInt(string, 10) * 1000
            }
        },
        each: function (item, fn) {
            if (Array.isArray(item)) {
                item.forEach(e => fn(e))
            } else if (typeof item === "object" && item !== null && item !== undefined) {
                Object.entries(item).forEach(([key, value]) => fn(key, value))
            }
        },
        map: function (item, fn) {
            if (Array.isArray(item)) {
                return item.map(e => fn(e))
            } else if (typeof item === "object" && item !== null && item !== undefined) {
                return Object.entries(item).map(([key, value]) => fn(key, value))
            }
        },
        grep: function (item, fn, invert = false) {
            let items
            if (Array.isArray(item)) {
                items = invert ? [...item].reverse() : item
                return items.filter(e => fn(e))
            } else if (typeof item === "object" && item !== null && item !== undefined) {
                const arrFromObj = Object.entries(item)
                items = invert ? [...arrFromObj].reverse() : arrFromObj
                return items.filter(([key, value]) => fn(key, value))
            }
        },
        extend: function (deep, target, ...objects) {
            if (typeof deep !== "boolean") {
                objects.unshift(target)
                target = deep
                deep = false
            }

            if (!deep) {
                return Object.assign({}, target, ...objects)
            }

            // Handle deep merge
            const deepClone = (obj) => {
                if (obj === null || typeof obj !== "object") return obj
                if (Array.isArray(obj)) return obj.map(deepClone)
                return Object.keys(obj).reduce((acc, key) => {
                    acc[key] = deepClone(obj[key])
                    return acc
                }, {})
            };

            const combined = [target, ...objects]
            const deepCopies = combined.map(deepClone)

            return deepCopies.reduce((merged, current) => {
                return { ...merged, ...current }
            }, {})

        },

    }

    /**
     * **$.ajax()**: Executes an asynchronous AJAX request with customizable options.
     * 
     * ### Parameters:
     * - url (string) [optional]: URL of the fetch request.
     * - options (object) [optional]: Object containing the request options.
     * - **Atleast one of the arguments needs to be provided**
     * 
     * #### Options:
     * - accepts (object): A set of key/value pairs which get send in the Accept request header.
     * - cache (boolean): When set to false, sets fetch cache options to "no-store".
     * - complete (function): A function to run one the fetch operation is complete. Uses (error, data)=>{} callback.
     * - contentType (string): Appends value to "Content-Type" header.
     * - context (any): Defines "this" when running dataFilter(), statusCode(), success(), error() and complete() function. By default "this" is binded to the instance of the Ajax class.
     * - crossDomain (boolean): When set to true, sets fetch mode to "cors".
     * - data (string, object): Value to be used as fetch body. In case of a "GET" method, it will used as URL parameters.
     * - dataFilter (function): function to handle the recieved data from the request.
     * - dataType (string): Type of data back expecting from the server.
     * - error (functions): A function to run when the operations fails. Uses (error)=>{} callback.
     * - headers (object): Aditional custom headers to be sent with the request.
     * - method (string): Method to use in the fetch request. By default: "GET".
     * - statusCode (object): A set of key/values pairs, where key is the status code, and value is the function to run when the status of the request matches the status code. Depending on the status code uses (data|error)=>{} callback. Executed before success(), error() and complete().
     * - success (function): A function to run when the operation succedes. Uses {data}=>{} callback.
     * - timeout (number): Set a timeout(in ms) for the request.
     * - url (string): URL of the fetch request.
     * 
     * ### Returns: 
     * - Returns instance of "this".
     */
    class Ajax {
        constructor(url, options) {
            if (!url && !options) { throw new Error("No url or options provided") }
            this.url = typeof url === "string" ? url : options.url
            this.options = typeof url === "object" ? url : options
            this.method = options.method || "GET"
            this.body = options.data
            this.response = undefined
            this.data = undefined
            this.error = undefined
            this.initPromise = this.init()
        }

        async init() {
            /* ===== Headers ===== */
            const headers = new Headers
            if (this.options.accepts) {
                Object.entries(this.options.accepts).forEach(([key, value]) => {
                    headers.append("Accept", `${key}: ${value}`)
                })
            }
            if (this.options.contentType) { headers.append("Content-Type", this.options.contentType) }
            if (this.options.headers) {
                Object.entries(this.options.headers).forEach(([key, value]) => {
                    headers.append(key, value)
                })
            }

            /* ===== Fetch options ===== */
            const fetchOptions = { headers: headers, method: this.method, url: this.url }
            if (this.options.cache === false) { fetchOptions.cache = "no-store" }
            if (this.options.crossDomain) { fetchOptions.mode = "cors" }
            if (this.body && this.method !== "GET") {
                fetchOptions.body = JSON.stringify(this.body)
            } else {
                const urlParams = new URLSearchParams()
                for (const key in this.body) {
                    if (this.body.hasOwnProperty(key)) {
                        // Encoded for edge case handling
                        urlParams.append(encodeURIComponent(key), encodeURIComponent(this.body[key]));
                    }
                    fetchOptions.url = `${this.url}?${urlParams.toString()}`
                }
            }

            // Actually runs the init functions.
            await this._useFetch(fetchOptions)
            await this._formatData()
            this._filterData()
            this._handleComplete()
        }

        // Methods

        // Chained method as alternative for "complete" option.
        async done(fn) {
            await this.initPromise
            this._success(fn)
            return this
        }

        // Chained method as alternative for "error" option.
        async fail(fn) {
            await this.initPromise
            this._error(fn)
            return this
        }

        // Chained method as alternative for "complete" option.
        async always(fn) {
            await this.initPromise
            this._complete(fn)
            return this
        }

        // Chained method to handle "done" and "fail" in a single method
        async then(successFn, errorFn) {
            await this.initPromise
            if (successFn) this._complete(successFn)
            if (errorFn) this._error(errorFn)
            return this
        }

        // Chained method to catch errors, to be used with then
        async catch(fn) {
            this.fail(fn)
            return this
        }

        /* ===== Global Functions ===== */
        //Named function to run fetch
        _useFetch = async (options) => {
            // Controllers
            const controller = new AbortController();
            options.signal = controller.signal
            // Fetch
            const fetchPromise = fetch(options) // No await, since it will be resolved by Promise.race
            const finalFetchArr = [fetchPromise]

            // Prep in case there is timeout
            let timeoutPromise
            if (this.options.timeout) {
                timeoutPromise = new Promise((_, reject) => {
                    const timeoutId = setTimeout(() => {
                        controller.abort()
                        reject(new Error("Request timed out"))
                    }, this.options.timeout)

                    fetchPromise.finally(() => { clearTimeout(timeoutId) })
                })
                finalFetchArr.push(timeoutPromise)
            }

            // Fetch
            try {
                this.response = await Promise.race(finalFetchArr)
            } catch (err) {
                this.error = err
            }
        }

        // Function to parse response
        _format = async (format) => {
            let data
            const resText = await this.response.text()
            switch (format) {
                case "xml":
                    data = new DOMParser().parseFromString(resText, "application/xml")
                    break
                case "html":
                    data = new DOMParser().parseFromString(resText, "text/html")
                    break
                case "script":
                    const script = document.createElement("script")
                    script.textContent = resText
                    data = script
                    break
                case "json":
                    data = await this.response.json()
                    break
                case "text":
                    data = resText
                    break
                default:
                    throw new Error(`Usupported format ${format}`)

            }
            this.data = data
        }
        // Format data
        _formatData = async () => {
            const type = this.options.dataType || "json"
            if (this.response.ok) {
                this.data = await this._format(type)
            }
        }
        // Filter data in case its sepecified
        _filterData = () => {
            if (typeof this.options.dataFilter === "function") {
                this.data = this.options.dataFilter.call(this.options.context || this, this.data, this.options.dataType)
            }
        }

        // Status code function. Executes functions depending on status code. 
        _statusCode = () => {
            if (this.options.statusCode) {
                const code = this.response.status
                const object = this.options.statusCode
                const data = this.response.ok ? this.data : this.error
                if (object.hasOwnProperty(code)) {
                    object[code].call(this.options.context, data)
                }
            }
        }
        // Success function, executed only if the operation succedes. response.ok checked inside this functions for reusability.
        _success = (fn) => {
            if (this.response.ok) {
                if (typeof fn === "function") {
                    fn.call(this.options.context, this.data)
                }
            }
        }

        // Error functions, executed only if there is an error. response.ok checked inside this functions for reusability.
        _error = (fn) => {
            if (!this.response.ok) {
                if (typeof fn === "function") {
                    fn.call(this.options.context, this.error)
                }
            }
        }

        // Complete function. Similar to finally. Uses (error, data) =>{}
        _complete = (fn) => {
            if (typeof fn === "function") {
                fn.call(this.options.context, this.error, this.data)
            }
        }

        // Handle all the completing functions
        _handleComplete = () => {
            this._statusCode()
            this._success(this.options.success)
            this._error(this.options.error)
            this._complete(this.options.complete)
        }

    }

    const lQueryMiddleware = {
        _request: (url, options, method) => {
            if (typeof url === "object") {
                url.method = method
                return new Ajax(url)
            } else {
                options.method = method
                return new Ajax(url, options)
            }
        },
        ajax: (url, options) => { return new Ajax(url, options) },
        get: (url, options) => { return lQueryMiddleware._request(url, options, "GET") },
        post: (url, options) => { return lQueryMiddleware._request(url, options, "POST") },
        put: (url, options) => { return lQueryMiddleware._request(url, options, "PUT") },
        delete: (url, options) => { return lQueryMiddleware._request(url, options, "DELETE") }
    }

    if (query) {
        return new LQueryDOM(query)
    }
    return {
        /**
         * **$.ajax()**: Executes an asynchronous AJAX request with customizable options.
         * 
         * ### Parameters:
         * - url (string) [optional]: URL of the AJAX request.
         * - options (object) [optional]: Object containing the request options. An object containing additional configuration options for the AJAX request. Refer to the Ajax options documentation for more details.
         * 
         * **Atleast one argument(url or options) needs to be provided** 
         * 
         * ### Returns:
         * - Returns the Ajax instance
         * */
        ajax: lQueryMiddleware.ajax,
        /**
         * **$.get()**: Executes an asynchronous GET request.
         * 
         * ### Parameters:
         * - url (string) [optional]: URL of the AJAX request.
         * - options (object) [optional]: Object containing the request options. An object containing additional configuration options for the AJAX request. Refer to the Ajax options documentation for more details.
         * 
         * **Atleast one argument(url or options) needs to be provided** 
         * 
         * ### Returns:
         * - Returns the Ajax instance
         * */
        get: lQueryMiddleware.get,
        /**
         * **$.post()**: Executes an asynchronous POST request.
         * 
         * ### Parameters:
         * - url (string) [optional]: URL of the AJAX request.
         * - options (object) [optional]: Object containing the request options. An object containing additional configuration options for the AJAX request. Refer to the Ajax options documentation for more details.
         * 
         * **Atleast one argument(url or options) needs to be provided** 
         * 
         * ### Returns:
         * - Returns the Ajax instance
         * */
        post: lQueryMiddleware.post,
        /**
         * **$.put()**: Executes an asynchronous PUT request.
         * 
         * ### Parameters:
         * - url (string) [optional]: URL of the AJAX request.
         * - options (object) [optional]: Object containing the request options. An object containing additional configuration options for the AJAX request. Refer to the Ajax options documentation for more details.
         * 
         * **Atleast one argument(url or options) needs to be provided** 
         * 
         * ### Returns:
         * - Returns the Ajax instance
         * */
        put: lQueryMiddleware.put,
        /**
         * **$.delete()**: Executes an asynchronous DELETE request.
         * 
         * ### Parameters:
         * - url (string) [optional]: URL of the AJAX request.
         * - options (object) [optional]: Object containing the request options. An object containing additional configuration options for the AJAX request. Refer to the Ajax options documentation for more details.
         * 
         * **Atleast one argument(url or options) needs to be provided** 
         * 
         * ### Returns:
         * - Returns the Ajax instance
         * */
        delete: lQueryMiddleware.delete,
        /**
         * **$.each()**: Iterates through an Array or an Object and runs the specified function.
         * 
         * ### Parameters:
         * - item (array | object): The item (array or object) to iterate through.
         * - fn (function): Function to run on each iteration. For an array, the function receives the element. For an object, the function receives the key and value of each entry.
         * 
         * ### Returns:
         * - void
         */
        each: utils.each,
        /**
         * **$.map()**: Iterates through an Array or an Object and returns the result of the function.
         * 
         * ### Parameters:
         * - item (array | object): The item (array or object) to iterate through.
         * - fn (function): Function to run on each iteration. For an array, the function receives the element. For an object, the function receives the key and value of each entry.
         * 
         * ### Returns:
         * - Returns an array of the results of the function applied to each element.
         */
        map: utils.map,
        /**
         * **$.grep()**: Iterates through an Array or an Object and filters it based on a condition.
         * 
         * ### Parameters:
         * - item (array | object): The item (array or object) to iterate through.
         * - fn (function): Filter function to run on each iteration. This function should return a boolean indicating if the item should be included in the result.
         * - invert (boolean, optional): If true, the array is reversed before applying the filter. Default is false.
         * 
         * ### Returns:
         * - Returns an array of filtered items.
         */
        grep: utils.grep,
        /**
         * **$.extend()**: Merges a set of objects into one.
         * 
         * ### Parameters:
         * - deep (boolean): Specifies if the merge should be deep (nested objects are merged). Default is false (shallow merge).
         * - target (object): The target object to merge the other objects into.
         * - objects (object): The objects to be merged into the target object.
         * 
         * ### Returns:
         * - Returns the merged object.
         */
        extend: utils.extend,
    }
})()