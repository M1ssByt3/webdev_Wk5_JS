function changeContent() {
    let title = document.getElementById("mainTitle");
    let description = document.getElementById("description");
  
    // Change text content
    title.textContent = "You changed the title!";
    description.textContent = "Now the text is updated, and the style is different too.";
  
    // Modify CSS styles
    description.style.color = "blue";
    description.style.fontSize = "20px";
    description.style.fontWeight = "bold";
  }
  
  function addElement() {
    let ul = document.getElementById("itemList");
  
    let li = document.createElement("li");
    li.textContent = "New Item";
  
    ul.appendChild(li);
  }
  
  function removeElement() {
    let ul = document.getElementById("itemList");
    if (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    } else {
      alert("No more items to remove!");
    }
  }
  