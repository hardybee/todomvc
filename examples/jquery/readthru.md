# TodoMVC - jQuery

Useful links:
1. https://github.com/hardybee/todomvc/blob/master/app-spec.md

## destroy method
The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

Uses jQuery .closest method and gets the corresponding 'id' of the element

Loops through the todos array looking for a match, which is returned

## bindEvents
### Sets up event listeners for various DOM elements
> #### Chrome Dev Tools - Event Listeners tab
> Allows you to inspect the event listeners assigned to each element

```javascript
$('#todo-list')
  .on('change', '.toggle', this.toggle.bind(this))
  .on('dblclick', 'label', this.edit.bind(this))
  .on('keyup', '.edit', this.editKeyup.bind(this))
  .on('focusout', '.edit', this.update.bind(this))
  .on('click', '.destroy', this.destroy.bind(this));
```

### [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
> The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.


## Handlebars
### [Try Handlebars](tryhandlebarsjs.com)
``` javascript

// create an object w/ array property
var data = {todos: [{title: 'First'}, {title: 'Second'}, {title: 'Third'}]};

// create an html template of list items to be rendered in a FOR LOOP
// reference the array property (i.e., for each array element, create a list item)
var htmlTemplate = '<ul> {{#todos}} <li>{{title}}</li> {{/todos}}  </ul>';

// compile to a Handlebars Template
var handlerbarsTemplate = Handlebars.compile(htmlTemplate);

// inject the data into the template
handlerbarsTemplate(data);

> "<ul>  <li>First</li>  <li>Second</li>  <li>Third</li>   </ul>"

// --------------------------------------------------------------

// Alternatively, create an array directly
var data = [{title: 'First'}, {title: 'Second'}, {title: 'Third'}];

// reference the array using the this keyword
var htmlTemplate = '<ul> {{#this}} <li>{{title}}</li> {{/this}}  </ul>';

// compile to a Handlebars Template
var handlerbarsTemplate = Handlebars.compile(htmlTemplate);

// inject the data into the template
handlerbarsTemplate(data);

> "<ul>  <li>First</li>  <li>Second</li>  <li>Third</li>   </ul>"

```


``` javascript

//Using CONDITIONAL LOGIC

var htmlTemplate = '<div> {{#if show}} TRUE {{/if}} </div>';
var handlebarsTemplate = Handlebars.compile(htmlTemplate);

// True will result in the content of the div being rendered
handlebarsTemplate({show: true});

> "<div>  TRUE  </div>"

// False should return an empty div
// note literal spaces in the template "..v> {{}} </d.." 
handlebarsTemplate({{show: false}});

"<div>  </div>"

```

``` javascript
  // debugging the template in the todos app
  // calling the html() method on the jQuery element
  > $('#todo-template').html();

  // returns the raw html for the element
{{#this}}
 <li {{#if completed}}class="completed"{{/if}} data-id="{{id}}">
  <div class="view">
   <input class="toggle" type="checkbox" {{#if completed}}checked{{/if}}>
   <label>{{title}}</label>
   <button class="destroy"></button>
  </div>
  <input class="edit" value="{{title}}">
 </li>
{{/this}} 

```
