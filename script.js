//making the root div a variable to reference it
const root = document.querySelector('#root')
// console.log(root)
const groceries = [
    {item: 'things', bought: false,},
    {item: 'things 1', bought: true,},
  ];
  
  const renderGroceryList = () => {
    /*
    these next few lines check if a grocery list already exists on screen
    if yes, remove it from the screen
    if we do not have this check, then the grocery list will keep appending on top of each other
    */
    const existingList = document.querySelector('#grocery-list');
      
    if (existingList) {
      root.removeChild(existingList);
    }
    
    const list = document.createElement('ul');
    list.id = 'grocery-list';
    
    groceries.forEach((grocery, index) => {
        console.log(grocery.item)
        const groceryItem = document.createElement('li')
        groceryItem.innerText= grocery.item
        list.appendChild(groceryItem)

        const xButton = document.createElement('button')
        groceryItem.appendChild(xButton)

        //need to be able to uncheck 

        xButton.addEventListener('click', () => {if (grocery.bought) {
            groceryItem.style.textDecoration = 'line-through';
        }})

      // for each item in the groceries array,
      // 1. display the grocery in a list
      // 2. each list item should have an X button.
      // this X button would delete this item from the array, and call `renderGroceryList()` to display the new state
      // of the grocery list on the screen
      // 3. a click event. once user clicks on the grocery item, it would either add a line thru it, or remove the line thru it
      // here is the code for the line-through so you dont have to google it
      /*
      const groceryListItem = document.createElement('li');
      
      if (grocery.bought) {
        groceryListItem.style.textDecoration = 'line-through';
      }
      
      .... or if you're using a css file for this logic
      .bought {
        text-decoration: line-through;
      }
      */
    })
    
    root.appendChild(list);
  }
  
  const renderInputs = () => {
    const input = document.createElement('input');
    const button = document.createElement('button');
    
    // whenever user types into the input field and presses the button, a new grocery item should appear in the list
  
    root.appendChild(input);
    root.appendChild(button);
  }
  
  renderInputs();
  renderGroceryList();