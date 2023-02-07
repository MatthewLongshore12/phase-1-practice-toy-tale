let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  fetch('http://localhost:3000/toys')
    .then (resp => resp.json())
    .then (toys => {
      toys.forEach(toyObj => {
        console.log(toyObj)
        const div = document.createElement ('div')
        document.getElementById("toy-collection").appendChild(div)
        div.className = "card" 
        const h2 = document.createElement ('h2')
        const img = document.createElement ('img')
        const p = document.createElement ('p')
        const btn = document.createElement('button')
        
        div.appendChild(h2)
        div.appendChild(img)
        div.appendChild(p)
        div.appendChild(btn)

        btn.innerText = "Like"
        h2.innerText = 
        // img.src = [toy_image_url]
        // console.log(h2)
        // p.innerText = 

      })
    })  
    
    

  
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

});
